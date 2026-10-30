import { ArrowUpRight, Github } from "lucide-react";
import { site } from "@/config/site";
export default function GithubCta() {
  return (
    <section id="github" className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-panel px-6 py-16 text-center sm:px-12">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" aria-hidden />
        <Github className="mx-auto text-accent" size={28} aria-hidden />
        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">Built Together. Shared With Everyone.</h2>
        <p className="mx-auto mt-4 max-w-lg text-muted">Browse our repositories, read the code, open an issue or send a pull request.</p>
        <a href={site.github} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-fg px-5 py-3 text-sm font-medium text-ink hover:bg-white">Visit our GitHub organisation <ArrowUpRight size={16} aria-hidden /></a>
      </div>
    </section>
  );
}
