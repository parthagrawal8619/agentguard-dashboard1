import { Check, Copy, Moon, ShieldCheck, Sun, XCircle } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";
import agentImage from "@/assets/agent-01.png";
import type { PaymentStatus } from "@/lib/agentpay-data";

export function Brand({ compact = false }: { compact?: boolean }) {
  return <div className="flex items-center gap-2.5"><div className="brand-mark"><ShieldCheck /></div>{!compact && <div><div className="font-display text-sm font-bold text-foreground">AgentPay<span className="text-cyan">Guard</span></div><div className="font-mono text-[9px] uppercase text-muted-foreground">On-chain control</div></div>}</div>;
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return <Button aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title="Toggle theme" variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="bg-card/70">{theme === "dark" ? <Sun /> : <Moon />}</Button>;
}

export function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={cn("hud-panel", className)}>{children}</section>;
}

export function SectionTitle({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: ReactNode }) {
  return <div className="mb-5 flex items-end justify-between gap-4"><div>{eyebrow && <p className="hud-label mb-1">{eyebrow}</p>}<h2 className="font-display text-lg font-semibold">{title}</h2></div>{action}</div>;
}

export function StatusBadge({ status }: { status: PaymentStatus | "Online" | "Verified" }) {
  const style = status === "Success" || status === "Online" || status === "Verified" ? "status-success" : status === "Blocked" ? "status-blocked" : status === "Duplicate" ? "status-duplicate" : "status-failed";
  return <span className={cn("status-badge", style)}><span className="size-1.5 rounded-full bg-current" />{status}</span>;
}

export function AgentPortrait({ className, eager = false }: { className?: string; eager?: boolean }) {
  return <div className={cn("agent-portrait", className)}><div className="agent-ring" /><img src={agentImage} alt="AGENT-01 cybernetic payment agent" width={1024} height={1024} loading={eager ? "eager" : "lazy"} /></div>;
}

export function BudgetRing({ size = "lg" }: { size?: "sm" | "lg" }) {
  const d = size === "lg" ? 152 : 112;
  const r = size === "lg" ? 62 : 44;
  const c = 2 * Math.PI * r;
  return <div className="relative grid place-items-center" style={{ width: d, height: d }}><svg className="-rotate-90" width={d} height={d} viewBox={`0 0 ${d} ${d}`} aria-label="90 percent budget used"><circle className="stroke-border" fill="none" strokeWidth="10" cx={d/2} cy={d/2} r={r} /><circle className="stroke-cyan drop-shadow-neon" fill="none" strokeLinecap="round" strokeWidth="10" cx={d/2} cy={d/2} r={r} strokeDasharray={c} strokeDashoffset={c * .1} /></svg><div className="absolute text-center"><strong className="font-display text-2xl">90%</strong><span className="block font-mono text-[9px] uppercase text-muted-foreground">consumed</span></div></div>;
}

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return <Button variant="ghost" size="icon" className="size-7" aria-label="Copy value" title="Copy" onClick={async () => { await navigator.clipboard.writeText(value); setCopied(true); window.setTimeout(() => setCopied(false), 1400); }}>{copied ? <Check /> : <Copy />}</Button>;
}

export function HashLine({ label, value }: { label: string; value: string }) {
  return <div className="flex items-center justify-between gap-3 border-b border-border/60 py-3 last:border-0"><div className="min-w-0"><p className="hud-label">{label}</p><p className="truncate font-mono text-xs text-foreground">{value}</p></div><CopyButton value={value} /></div>;
}

export function SecurityItem({ children, danger = false }: { children: ReactNode; danger?: boolean }) {
  return <div className="flex items-center gap-3 py-2.5"><span className={cn("grid size-7 shrink-0 place-items-center rounded-sm", danger ? "bg-destructive/10 text-destructive" : "bg-cyan/10 text-cyan")}>{danger ? <XCircle className="size-4" /> : <ShieldCheck className="size-4" />}</span><span className="text-sm">{children}</span></div>;
}