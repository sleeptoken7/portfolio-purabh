"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FileText, Download, ExternalLink } from "lucide-react";

export function Hero() {
  const [showResumeOptions, setShowResumeOptions] = useState(false);

  return (
    <section className="py-20 flex flex-col items-start gap-4 max-w-4xl relative">
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
        className="mt-8 flex gap-4 relative"
      >
        <a 
          href="#projects" 
          className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold hover:opacity-90 transition-all"
        >
          View Projects
        </a>
        
        <div className="relative">
          <button 
            onClick={() => setShowResumeOptions(!showResumeOptions)}
            className="border border-border px-6 py-3 rounded-full font-bold hover:bg-muted transition-all flex items-center gap-2"
          >
            Download Resume
          </button>

          <AnimatePresence>
            {showResumeOptions && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-2xl z-50 p-2 overflow-hidden"
              >
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted rounded-lg transition-colors"
                >
                  <ExternalLink size={16} className="text-accent" /> View in Browser
                </a>
                <a 
                  href="/resume.pdf" 
                  download
                  className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-muted rounded-lg transition-colors"
                >
                  <Download size={16} className="text-accent" /> Download PDF
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
