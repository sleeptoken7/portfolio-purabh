import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoCard } from "@/components/ui/BentoCard";
import Link from "next/link";
import { 
  Database, 
  Cpu, 
  Workflow, 
  Layers, 
  ExternalLink, 
  Code2, 
  Server, 
  BrainCircuit,
  Terminal,
  ShieldCheck,
  Github,
  Linkedin,
  Mail
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-20">
      <Navbar />
      <Hero />
      
      <section id="projects" className="mt-20">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold tracking-tighter terminal-text">
            <span className="text-accent">#</span> technical_contributions
          </h2>
          <p className="text-muted-foreground text-sm font-mono hidden md:block">SELECT * FROM projects WHERE impact = 'high'</p>
        </div>
        
        <div className="bento-grid">
          {/* AdPrime Project - Large */}
          <BentoCard 
            title="AdPrime ICD-10 Intelligence"
            description="Production LLMOps pipeline automating clinical code resolution with local models."
            icon={<Cpu size={24} />}
            className="col-span-2 row-span-2"
          >
            <div className="flex flex-col h-full">
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-muted text-xs rounded border border-border">Local LLMs (NuExtract)</span>
                <span className="px-2 py-1 bg-muted text-xs rounded border border-border">Langfuse</span>
                <span className="px-2 py-1 bg-muted text-xs rounded border border-border">Docker</span>
              </div>
              <div className="mt-auto pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-muted h-2 rounded-full overflow-hidden">
                    <div className="bg-accent h-full w-[86%]" />
                  </div>
                  <span className="text-xs font-bold text-accent">86% Cost Savings</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Reduction in LLM token usage via custom content filtering.</p>
                <Link href="/projects/icd10-pipeline" className="mt-4 flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
                  View Full Case Study <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </BentoCard>

          {/* RAG Project */}
          <BentoCard 
            title="Layout-Aware RAG"
            description="Complex document intelligence system preserving semantic table structures without OCR."
            icon={<Layers size={24} />}
            className="col-span-2 row-span-1"
          >
            <div className="flex justify-between items-end">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-muted text-xs rounded border border-border">Mistral 7B</span>
                <span className="px-2 py-1 bg-muted text-xs rounded border border-border">FAISS</span>
                <span className="px-2 py-1 bg-muted text-xs rounded border border-border">PyMuPDF</span>
              </div>
              <Link href="/projects/structured-rag" className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
                Details <ExternalLink size={14} />
              </Link>
            </div>
          </BentoCard>

          {/* News Automation */}
          <BentoCard 
            title="News Swarm Automation"
            description="n8n-driven multi-model agent pipeline for news scraping and rewriting."
            icon={<Workflow size={24} />}
            className="col-span-1 row-span-1"
          >
            <div className="flex flex-col h-full">
              <div className="mt-2 text-[10px] text-muted-foreground font-mono">
                Reuters → Dedupe → OpenAI
              </div>
              <Link href="/projects/news-automation" className="mt-auto flex items-center gap-2 text-xs font-semibold hover:text-accent transition-colors">
                Read More <ExternalLink size={12} />
              </Link>
            </div>
          </BentoCard>

          {/* Backend Restructuring */}
          <BentoCard 
            title="Backend & Infra Overhaul"
            description="Architecting scalable microservices for LLM pipelines."
            icon={<Server size={24} />}
            className="col-span-1 row-span-1"
          >
            <div className="mt-auto">
              <Link href="/projects/backend-infra" className="flex items-center gap-2 text-xs font-semibold hover:text-accent transition-colors">
                Architecture Info <ExternalLink size={12} />
              </Link>
            </div>
          </BentoCard>

          {/* Skills Matrix */}
          <BentoCard 
            title="Technical Arsenal"
            className="col-span-1 row-span-2"
          >
            <div className="space-y-4 mt-2">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">AI / ML</p>
                <div className="flex flex-wrap gap-1">
                  {['RAG', 'LLMOps', 'LangChain', 'Chroma', 'NuExtract'].map(s => (
                    <span key={s} className="text-[11px] font-mono text-accent/80">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Backend</p>
                <div className="flex flex-wrap gap-1">
                  {['FastAPI', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'].map(s => (
                    <span key={s} className="text-[11px] font-mono text-accent/80">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Frontend</p>
                <div className="flex flex-wrap gap-1">
                  {['Next.js', 'React', 'Tailwind', 'Framer Motion'].map(s => (
                    <span key={s} className="text-[11px] font-mono text-accent/80">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Strategic Experience */}
          <BentoCard 
            title="Strategic Impact"
            className="col-span-3 row-span-1"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
              <div className="md:col-span-2 space-y-3">
                <div className="group">
                  <p className="text-xs font-bold text-accent group-hover:translate-x-1 transition-transform inline-block cursor-default">XORStack · AI Engineer</p>
                  <p className="text-[10px] text-muted-foreground leading-tight">
                    Engineered production LLM pipelines & RAG systems; achieved 86% cost reduction via content-aware filtering and local inference.
                  </p>
                </div>
                <div className="group">
                  <p className="text-xs font-bold text-accent group-hover:translate-x-1 transition-transform inline-block cursor-default">Canada's Wonderland · IT Tier III</p>
                  <p className="text-[10px] text-muted-foreground leading-tight">
                    Directed management of 1500+ device fleet; implemented mass-scale PowerShell automation for domain integration and security.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-end border-l border-border pl-6 text-right">
                <p className="text-4xl font-black text-foreground tracking-tighter leading-none">1500+</p>
                <p className="text-[10px] uppercase font-bold text-muted-foreground mb-4">Devices Scaled</p>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-mono text-accent">Active Candidate</span>
                </div>
              </div>
            </div>
          </BentoCard>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-20">
        <div className="bento-card p-10 flex flex-col items-center text-center gap-6">
          <div className="p-3 bg-accent/10 rounded-full text-accent">
            <Mail size={32} />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-2">Ready for the next challenge.</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Looking for a Senior Software Engineer who brings both technical depth and business impact? Let's connect.
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <a 
              href="mailto:purabhsingh2004@gmail.com" 
              className="bg-accent text-accent-foreground px-8 py-3 rounded-full font-bold hover:scale-105 transition-all flex items-center gap-2"
            >
              Contact Me
            </a>
            <div className="flex items-center gap-4 px-4 border-l border-border ml-4">
              <a href="https://github.com/sleeptoken7" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/purabh-singh" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Purabh Singh. Built with Next.js, Framer Motion & Logic.</p>
        <div className="flex gap-6">
          <a href="https://github.com/sleeptoken7" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/purabh-singh" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="mailto:purabhsingh2004@gmail.com" className="hover:text-foreground transition-colors">Email</a>
        </div>
      </footer>
    </div>
  );
}
