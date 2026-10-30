"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { site } from "@/config/site";
import BranchGraphic from "./BranchGraphic";
export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (d: number) => ({ initial: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: reduce ? 0 : d } });
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:py-32 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.h1 {...rise(0)} className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">Building Ideas Into Reality.</motion.h1>
          <motion.p {...rise(0.1)} className="mt-6 max-w-lg text-lg leading-relaxed text-muted">We are an independent collective of developers working together to design, build and ship software that makes a difference.</motion.p>
          <motion.div {...rise(0.2)} className="mt-9 flex flex-wrap gap-3">
            <a href={site.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-fg px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white"><Github size={16} aria-hidden /> View on GitHub</a>
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-lg border border-line bg-panel px-5 py-3 text-sm font-medium transition-colors hover:border-accent/60">Explore projects <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden /></a>
          </motion.div>
        </div>
        <div className="mx-auto w-full max-w-md lg:max-w-none"><BranchGraphic /></div>
      </div>
    </section>
  );
}
