import { Code2, Brain, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Brain,
    title: 'AI & ML Expert',
    description: 'Deep expertise in machine learning, deep learning, and building intelligent systems that solve real-world problems.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Developer',
    description: 'Building end-to-end applications with modern frameworks like React, Next.js, FastAPI, and more.',
  },
  {
    icon: Rocket,
    title: 'Agentic AI Pioneer',
    description: 'Designing autonomous AI agents using LangChain, LangGraph, and Google ADK for complex workflows.',
  },
  {
    icon: Users,
    title: 'Continuous Learner',
    description: 'Currently pursuing AI/ML Fellowship at Buildables, constantly expanding knowledge in cutting-edge AI technologies.',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="reveal-up section-heading text-gradient">About Me</h2>
          <p className="reveal-up section-subheading max-w-2xl mx-auto">
            Passionate about pushing the boundaries of what's possible with AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Description */}
          <div className="reveal-left">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
              Building the Future with <span className="text-gradient">Intelligent Systems</span>
            </h3>
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
              <p>
                I believe in learning by doing — every project on my GitHub represents hours of experimentation, 
                debugging, and pushing the boundaries of what I thought was possible. Whether it's fine-tuning 
                YOLO models for number plate recognition or building RAG-powered chatbots, I approach each 
                challenge with curiosity and determination.
              </p>
            </div>
          </div>

          {/* Right: Stats/Highlights */}
          <div className="reveal-right grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Strip */}
        <div className="reveal-up">
          <p className="text-center text-sm text-muted-foreground mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'React', 'Next.js', 'FastAPI', 'PostgreSQL', 'Docker'].map((tech) => (
              <span key={tech} className="skill-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
