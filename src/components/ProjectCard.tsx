"use client";
import { ExternalLink, Github } from "lucide-react";
import type { Project, Status } from "@/config/site";
const dot: Record<Status, string> = { Active: "bg-emerald-400", Completed: "bg-accent", Experimental: "bg-amber-400" };
// Deterministic abstract visual from a seed, so each project gets its own artwork.
function Visual({ seed }: { seed: number }) {
  const bars = Array.from({ length: 18 }, (_, i) => 14 + ((i * seed * 37) % 61));
  return (
    <svg viewBox="0 0 360 120" className="h-28 w-full" aria-hidden>
      <rect width="360" height="120" fill="#0A0C0F" />
      {bars.map((h, i) => (<rect key={i} x={10 + i * 19} y={110 - h} width="9" height={h} rx="2" fill={i % 5 === 0 ? "#3DD6F5" : "#5B8CFF"} opacity={0.25 + (h / 75) * 0.6} />))}
    </svg>
  );
}
export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`); e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`); }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-panel transition-colors hover:border-accent/50"
    >
      <div className="spot pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
      <Visual seed={p.seed} />
      <div className="relative flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-mono text-base font-medium">{p.name}</h3>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted"><span className={`h-1.5 w-1.5 rounded-full ${dot[p.status]}`} aria-hidden />{p.status}</span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">{p.stack.map((s) => (<li key={s} className="rounded-md border border-line bg-raised px-2 py-0.5 text-xs text-muted">{s}</li>))}</ul>
        <div className="mt-5 flex gap-4 text-sm">
          <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent"><Github size={15} aria-hidden />Repository<span className="sr-only"> for {p.name}</span></a>
          {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent"><ExternalLink size={15} aria-hidden />Live demo<span className="sr-only"> of {p.name}</span></a>}
        </div>
      </div>
    </article>
  );
}
