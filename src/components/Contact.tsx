import { Github, Mail } from "lucide-react";
import Section from "./Section";
import { site } from "@/config/site";
export default function Contact() {
  const link = "inline-flex items-center gap-2.5 rounded-lg border border-line bg-panel px-5 py-3 text-sm transition-colors hover:border-accent/60";
  return (
    <Section id="contact" title="Have Something in Mind?" intro="Tell us about an idea, a collaboration or a question. We read everything.">
      <div className="flex flex-wrap gap-3">
        <a className={link} href={`mailto:${site.email}`}><Mail size={16} className="text-accent" aria-hidden />{site.email}</a>
        {site.social.map((s) => (<a key={s.label} className={link} href={s.href} target="_blank" rel="noreferrer"><Github size={16} className="text-accent" aria-hidden />{s.label}</a>))}
      </div>
    </Section>
  );
}
