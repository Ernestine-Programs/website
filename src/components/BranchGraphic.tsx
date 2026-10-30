"use client";
import { motion, useReducedMotion } from "framer-motion";
// Several developers' branches converging into one shared main line.
const lines = [
  { d: "M10 70 C120 70 160 210 260 210", c: "#5B8CFF", n: [[10, 70], [120, 105]] },
  { d: "M10 350 C120 350 160 210 260 210", c: "#3DD6F5", n: [[10, 350], [120, 315]] },
  { d: "M10 140 C90 140 130 210 260 210", c: "#8B7BFF", n: [[10, 140], [95, 160]] },
  { d: "M10 280 C90 280 130 210 260 210", c: "#5B8CFF", n: [[10, 280], [95, 258]] },
];
export default function BranchGraphic() {
  const reduce = useReducedMotion();
  const t = (delay: number) => (reduce ? { duration: 0 } : { duration: 1.4, delay, ease: "easeInOut" as const });
  return (
    <svg viewBox="0 0 480 420" role="img" aria-label="Four development branches merging into one main line" className="h-auto w-full">
      <defs><linearGradient id="main" x1="0" x2="1"><stop offset="0" stopColor="#5B8CFF" /><stop offset="1" stopColor="#3DD6F5" /></linearGradient></defs>
      {lines.map((l, i) => (
        <g key={i}>
          <motion.path d={l.d} fill="none" stroke={l.c} strokeWidth="2" strokeLinecap="round" opacity="0.8" initial={{ pathLength: reduce ? 1 : 0 }} animate={{ pathLength: 1 }} transition={t(0.2 + i * 0.15)} />
          {l.n.map(([x, y], j) => (<circle key={j} cx={x} cy={y} r="5" fill="#07080A" stroke={l.c} strokeWidth="2" />))}
        </g>
      ))}
      <motion.path d="M260 210 H460" stroke="url(#main)" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: reduce ? 1 : 0 }} animate={{ pathLength: 1 }} transition={t(1.3)} />
      {[260, 330, 400, 460].map((x, i) => (<motion.circle key={x} cx={x} cy="210" r="6" fill="#07080A" stroke="#3DD6F5" strokeWidth="2.5" initial={{ scale: reduce ? 1 : 0 }} animate={{ scale: 1 }} transition={{ delay: reduce ? 0 : 1.6 + i * 0.12 }} style={{ transformOrigin: `${x}px 210px` }} />))}
      <text x="270" y="190" fill="#8B909C" fontSize="13" fontFamily="var(--font-mono)">main</text>
      <text x="14" y="52" fill="#8B909C" fontSize="12" fontFamily="var(--font-mono)">feat/idea</text>
      <text x="14" y="376" fill="#8B909C" fontSize="12" fontFamily="var(--font-mono)">fix/details</text>
    </svg>
  );
}
