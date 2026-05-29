"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="py-20 flex flex-col items-start gap-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-accent terminal-text text-lg mb-4 block">
          {">"} sudo whoami
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-6">
          Purabh Singh
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
          Software Engineer specializing in{" "}
          <span className="text-foreground font-semibold">Production-Grade AI Pipelines</span>, 
          LLMOps, and Full-Stack Architecture.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-8 flex gap-4"
      >
        <a 
          href="#projects" 
          className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold hover:opacity-90 transition-all"
        >
          View Projects
        </a>
        <a 
          href="/resume" 
          className="border border-border px-6 py-3 rounded-full font-bold hover:bg-muted transition-all"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
