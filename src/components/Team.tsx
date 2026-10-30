import { Github } from "lucide-react";
import Section from "./Section";
import { team } from "@/config/site";
export default function Team() {
  return (
    <Section id="team" title="The People Behind the Code.">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m) => (
          <li key={m.name} className="rounded-xl border border-line bg-panel p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-cyan font-semibold text-ink" aria-hidden>{m.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}</div>
            <h3 className="mt-5 font-medium">{m.name}</h3>
            <p className="text-sm text-accent">{m.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{m.bio}</p>
            <a href={m.github} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg"><Github size={15} aria-hidden />GitHub<span className="sr-only"> profile of {m.name}</span></a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
