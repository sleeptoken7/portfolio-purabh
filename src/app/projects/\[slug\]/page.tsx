import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  // Define valid slugs to prevent directory traversal
  const validSlugs = ['icd10-pipeline', 'structured-rag', 'news-automation', 'backend-infra'];
  
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  // Dynamically import the MDX content
  const Content = dynamic(() => import(`@/content/projects/${slug}.mdx`), {
    loading: () => <p className="text-muted-foreground animate-pulse">Loading intelligence report...</p>,
  });

  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-24 max-w-4xl mx-auto pb-20">
      <Navbar />
      
      <Link 
        href="/" 
        className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-12 text-sm font-medium"
      >
        <ArrowLeft size={16} /> Back to Hub
      </Link>

      <article className="prose prose-invert prose-emerald max-w-none">
        <Content />
      </article>

      <div className="mt-20 pt-10 border-t border-border">
        <h3 className="text-xl font-bold mb-4">Interested in this implementation?</h3>
        <p className="text-muted-foreground mb-6">
          I'm available for consultations on LLMOps, production-grade RAG architectures, and workflow automation.
        </p>
        <a 
          href="mailto:purabhsingh2004@gmail.com" 
          className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-bold hover:opacity-90 transition-all inline-block"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
