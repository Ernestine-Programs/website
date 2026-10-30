import { Code2, Server, Smartphone, Database, Cloud, Wrench } from "lucide-react";
import Section from "./Section";
import { techCategories } from "@/config/site";
const icons = [Code2, Server, Smartphone, Database, Cloud, Wrench];
export default function Tech() {
  return (
    <Section id="tech" title="The tools we work with.">
      <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {techCategories.map((c, i) => { const Icon = icons[i % icons.length]; return (
          <div key={c.title} className="bg-panel p-6">
            <h3 className="flex items-center gap-2.5 font-medium"><Icon size={17} className="text-accent" aria-hidden />{c.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">{c.items.map((t) => (<li key={t} className="rounded-md border border-line bg-raised px-2.5 py-1 text-sm text-muted transition-colors hover:text-fg">{t}</li>))}</ul>
          </div>); })}
      </div>
    </Section>
  );
}
