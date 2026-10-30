import { site } from "@/config/site";
import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:justify-between">
        <div className="max-w-xs"><Logo /><p className="mt-3 text-sm text-muted">{site.description}</p></div>
        <nav aria-label="Footer"><ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {[...site.nav, { label: "GitHub", href: site.github }].map((n) => (<li key={n.href}><a href={n.href} className="hover:text-fg">{n.label}</a></li>))}
        </ul></nav>
      </div>
      <p className="mx-auto max-w-6xl px-5 pb-10 text-xs text-muted sm:px-8">&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
