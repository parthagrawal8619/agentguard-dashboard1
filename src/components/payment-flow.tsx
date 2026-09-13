import { useEffect, useState } from "react";
import { Bot, CheckCircle2, Cloud, FileCheck2, FileKey2, LockKeyhole, ReceiptText } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const steps = [
  { label: "AI agent", sub: "Request", icon: Bot }, { label: "Provider", sub: "Quote", icon: Cloud },
  { label: "HTTP 402", sub: "Challenge", icon: ReceiptText }, { label: "x402", sub: "Authorize", icon: FileKey2 },
  { label: "Contract", sub: "Enforce", icon: LockKeyhole }, { label: "Delivery", sub: "Verify", icon: CheckCircle2 },
  { label: "Audit", sub: "Anchor", icon: FileCheck2 },
];

export function PaymentFlow() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => { if (reduced) return; const id = window.setInterval(() => setActive((v) => (v + 1) % steps.length), 900); return () => window.clearInterval(id); }, [reduced]);
  return <div className="overflow-x-auto pb-2"><div className="flex min-w-[720px] items-center">{steps.map((step, index) => <div key={step.label} className="contents"><button onClick={() => setActive(index)} className={cn("flow-node", index === active && "flow-node-active")}><step.icon className="size-5"/><strong>{step.label}</strong><span>{step.sub}</span></button>{index < steps.length - 1 && <div className="relative h-px flex-1 bg-border"><motion.span className="absolute inset-y-0 left-0 bg-cyan" animate={{ width: index < active ? "100%" : index === active ? "55%" : "0%" }} /></div>}</div>)}</div></div>;
}