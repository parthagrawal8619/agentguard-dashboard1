import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { Activity, Bot, Boxes, ChevronLeft, ChevronRight, CircleDollarSign, FileSearch, Gauge, Menu, Settings, Shield, Swords } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Brand, ThemeToggle } from "@/components/agentpay-ui";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: Gauge },
  { to: "/agent", label: "AGENT-01", icon: Bot },
  { to: "/services", label: "Services", icon: Boxes },
  { to: "/payments", label: "Payments", icon: CircleDollarSign },
  { to: "/audit", label: "Audit trail", icon: FileSearch },
  { to: "/security", label: "Security", icon: Shield },
  { to: "/demo", label: "Attack demo", icon: Swords },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

function NavLinks({ compact, onNavigate }: { compact?: boolean; onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return <nav className="space-y-1">{nav.map((item) => {
    const active = pathname === item.to;
    const itemLink = <Link onClick={onNavigate} to={item.to} className={cn("nav-item", active && "nav-item-active", compact && "justify-center px-0")}><item.icon className="size-[18px] shrink-0" />{!compact && <span>{item.label}</span>}{active && !compact && <span className="ml-auto size-1.5 rounded-full bg-cyan shadow-cyan" />}</Link>;
    return compact ? <Tooltip key={item.to}><TooltipTrigger asChild>{itemLink}</TooltipTrigger><TooltipContent side="right">{item.label}</TooltipContent></Tooltip> : <div key={item.to}>{itemLink}</div>;
  })}</nav>;
}

export function AppShell({ children, title, eyebrow = "Command center" }: { children: ReactNode; title: string; eyebrow?: string }) {
  const [collapsed, setCollapsed] = useState(false);
  const reduced = useReducedMotion();
  return <TooltipProvider><div className="min-h-screen bg-background text-foreground">
    <aside className={cn("fixed inset-y-0 left-0 z-40 hidden border-r border-border/80 bg-sidebar/95 px-3 py-5 backdrop-blur-xl transition-[width] lg:block", collapsed ? "w-[74px]" : "w-[230px]")}>
      <div className={cn("mb-8 flex h-10 items-center", collapsed ? "justify-center" : "px-2")}><Brand compact={collapsed} /></div>
      <NavLinks compact={collapsed} />
      <div className="absolute bottom-5 left-3 right-3">
        <div className={cn("mb-3 rounded-md border border-cyan/20 bg-cyan/[.04] p-3", collapsed && "px-2")}>
          <div className={cn("flex items-center gap-2", collapsed && "justify-center")}><span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-50"/><span className="relative size-2 rounded-full bg-cyan"/></span>{!collapsed && <span className="font-mono text-[10px] uppercase text-cyan">Base Sepolia</span>}</div>
        </div>
        <Button variant="ghost" className="w-full" size={collapsed ? "icon" : "default"} onClick={() => setCollapsed((v) => !v)} aria-label="Toggle sidebar">{collapsed ? <ChevronRight /> : <><ChevronLeft /><span>Collapse</span></>}</Button>
      </div>
    </aside>
    <div className={cn("transition-[padding]", collapsed ? "lg:pl-[74px]" : "lg:pl-[230px]")}>
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border/70 bg-background/75 px-4 backdrop-blur-xl sm:px-6">
        <div className="flex items-center gap-3">
          <Sheet><SheetTrigger asChild><Button className="lg:hidden" variant="outline" size="icon" aria-label="Open navigation"><Menu /></Button></SheetTrigger><SheetContent side="left" className="w-[280px] bg-sidebar"><SheetHeader><SheetTitle><Brand /></SheetTitle></SheetHeader><div className="mt-8"><NavLinks /></div></SheetContent></Sheet>
          <div><p className="hud-label">{eyebrow}</p><h1 className="font-display text-base font-semibold sm:text-lg">{title}</h1></div>
        </div>
        <div className="flex items-center gap-2"><div className="hidden items-center gap-2 rounded-md border border-border bg-card/70 px-3 py-2 sm:flex"><Activity className="size-3.5 text-cyan"/><span className="font-mono text-[10px] text-muted-foreground">SYSTEM NOMINAL</span></div><ThemeToggle /></div>
      </header>
      <motion.main initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3 }} className="mx-auto max-w-[1540px] px-4 py-6 pb-24 sm:px-6 lg:pb-8">{children}</motion.main>
    </div>
    <nav className="fixed inset-x-0 bottom-0 z-40 grid h-[68px] grid-cols-5 border-t border-border bg-background/95 px-2 backdrop-blur-xl lg:hidden">{nav.slice(0,4).map((item) => <Link key={item.to} to={item.to} activeProps={{ className: "text-cyan" }} className="flex flex-col items-center justify-center gap-1 text-muted-foreground"><item.icon className="size-5"/><span className="text-[9px]">{item.label}</span></Link>)}<Sheet><SheetTrigger asChild><Button variant="ghost" className="h-full rounded-none flex-col gap-1 text-muted-foreground" aria-label="More navigation"><Menu className="size-5"/><span className="text-[9px]">More</span></Button></SheetTrigger><SheetContent side="bottom" className="rounded-t-lg bg-sidebar"><SheetHeader><SheetTitle>More</SheetTitle></SheetHeader><div className="mt-5"><NavLinks /></div></SheetContent></Sheet></nav>
  </div></TooltipProvider>;
}