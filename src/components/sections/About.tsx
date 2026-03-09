import { Code2, Brain, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    label: 'NOW',
    icon: Brain,
    title: 'AI & ML Expert',
    description: 'Deep expertise in machine learning, deep learning, and building intelligent systems that solve real-world problems.',
  },
  {
    label: 'BUILDING',
    icon: Code2,
    title: 'Full-Stack Developer',
    description: 'Building end-to-end applications with modern frameworks like React, Next.js, FastAPI, and more.',
  },
  {
    label: 'EXPLORING',
    icon: Rocket,
    title: 'Agentic AI Pioneer',
    description: 'Designing autonomous AI agents using LangChain, LangGraph, and Google ADK for complex workflows.',
  },
  {
    label: 'LEARNING',
    icon: Users,
    title: 'Continuous Learner',
    description: 'Currently pursuing AI/ML Fellowship at Buildables, constantly expanding knowledge in cutting-edge AI technologies.',
  },
];

export function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Label */}
        <div className="text-center mb-16">
          <p className="reveal-up section-label">About</p>
          <h2 className="reveal-up section-heading">Playing with the future</h2>
          <p className="reveal-up section-subheading max-w-2xl mx-auto">
            Passionate about pushing the boundaries of what's possible with AI
          </p>
        </div>

        {/* Bento-style cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="reveal-up glass-card rounded-2xl p-6 group transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="section-label mb-3">{item.label}</p>
              <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div className="reveal-up max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm an AI/ML Engineer based in Islamabad, Pakistan, with a deep passion for building 
                intelligent systems that make a real impact. Currently pursuing my BS in Computer Science 
                at NUML while gaining hands-on experience through the AI/ML Fellowship at Buildables.
              </p>
              <p>
                My journey in AI spans from foundational machine learning to cutting-edge agentic AI systems. 
                I've built everything from computer vision applications achieving 97%+ accuracy to autonomous 
                AI agents using modern frameworks like LangChain, LangGraph, and Google's ADK.
              </p>
            </div>

            {/* Tech strip */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'React', 'Next.js', 'FastAPI', 'PostgreSQL', 'Docker'].map((tech) => (
                  <span key={tech} className="skill-badge text-xs">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
