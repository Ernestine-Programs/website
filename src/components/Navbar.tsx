"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import { site } from "@/config/site";
import Logo from "./Logo";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line/70 bg-ink/75 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" aria-label={`${site.name} home`}><Logo /></a>
        <ul className="hidden items-center gap-1 md:flex">
          {site.nav.map((n) => (<li key={n.href}><a href={n.href} className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-fg">{n.label}</a></li>))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={site.github} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-md border border-line bg-panel px-3 py-1.5 text-sm transition-colors hover:border-accent/60 sm:inline-flex"><Github size={15} aria-hidden /> GitHub</a>
          <button className="rounded-md p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-line md:hidden">
            <ul className="px-5 py-3">
              {[...site.nav, { label: "GitHub", href: site.github }].map((n) => (<li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block rounded-md py-3 text-muted hover:text-fg">{n.label}</a></li>))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
