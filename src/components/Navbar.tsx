"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 border-b border-border mb-12">
      <Link href="/" className="text-xl font-bold tracking-tighter hover:text-accent transition-colors">
        PURABH.SINGH
      </Link>
      
      <div className="flex items-center gap-6">
        <Link href="#projects" className="text-sm font-medium hover:text-accent transition-colors">Projects</Link>
        <Link href="#experience" className="text-sm font-medium hover:text-accent transition-colors">Experience</Link>
        <div className="h-4 w-px bg-border mx-2" />
        <div className="flex items-center gap-4">
          <a href="https://github.com/sleeptoken7" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/purabh-singh" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:purabhsingh2004@gmail.com" className="hover:text-accent transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
