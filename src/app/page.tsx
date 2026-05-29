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
  BrainCircuit 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-20">
      <Navbar />
      <Hero />
      
      <section id="projects" className="mt-20">
        <h2 className="text-3xl font-bold tracking-tighter mb-10 terminal-text">
          <span className="text-accent">#</span> featured_work
        </h2>
        
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
                  View Case Study <ExternalLink size={14} />
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
              </div>
              <Link href="/projects/structured-rag" className="flex items-center gap-2 text-sm font-semibold hover:text-accent transition-colors">
                Details <ExternalLink size={14} />
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
                  {['RAG', 'LLMOps', 'LangChain', 'Chroma'].map(s => (
                    <span key={s} className="text-[11px] font-mono text-accent/80">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Backend</p>
                <div className="flex flex-wrap gap-1">
                  {['FastAPI', 'Node.js', 'PostgreSQL', 'Redis'].map(s => (
                    <span key={s} className="text-[11px] font-mono text-accent/80">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-2">Infra</p>
                <div className="flex flex-wrap gap-1">
                  {['AWS', 'Docker', 'Linux', 'Nginx'].map(s => (
                    <span key={s} className="text-[11px] font-mono text-accent/80">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>

          {/* News Automation */}
          <BentoCard 
            title="News Automation"
            description="n8n-driven multi-model agent pipeline."
            icon={<Workflow size={20} />}
            className="col-span-1 row-span-1"
          >
            <div className="flex flex-col h-full">
              <div className="mt-2 text-[11px] text-muted-foreground font-mono">
                Scraping → Dedupe → OpenAI/DeepSeek
              </div>
              <Link href="/projects/news-automation" className="mt-auto flex items-center gap-2 text-xs font-semibold hover:text-accent transition-colors">
                Read More <ExternalLink size={12} />
              </Link>
            </div>
          </BentoCard>

          {/* Experience / Stats */}
          <BentoCard 
            title="Strategic Impact"
            className="col-span-2 row-span-1"
          >
            <div className="flex flex-col md:flex-row gap-6 h-full">
              <div className="flex-1 space-y-2">
                <div>
                  <p className="text-xs font-bold text-accent">XORStack · AI Engineer</p>
                  <p className="text-[10px] text-muted-foreground leading-tight">
                    Engineered production LLM pipelines & RAG systems; achieved 86% cost reduction.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold text-accent">Canada's Wonderland · IT Tier III</p>
                  <p className="text-[10px] text-muted-foreground leading-tight">
                    Managed 1500+ device fleet; implemented mass-scale PowerShell automation.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-end border-l border-border pl-6">
                <p className="text-3xl font-black text-foreground tracking-tighter">10+</p>
                <p className="text-[10px] uppercase font-bold text-muted-foreground">Years Technical Vision</p>
                <div className="mt-2 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-[10px] font-mono text-accent">Available for hire</span>
                </div>
              </div>
            </div>
          </BentoCard>

        </div>
      </section>
      
      <footer className="mt-40 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Purabh Singh. Built with Next.js & Stealth.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-foreground transition-colors">Resume</a>
        </div>
      </footer>
    </div>
  );
}
