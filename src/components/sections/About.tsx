import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Brain, Rocket, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Brain,
    title: "AI & ML Expert",
    description:
      "Deep expertise in machine learning, deep learning, and building intelligent systems that solve real-world problems.",
  },
  {
    icon: Code2,
    title: "Full-Stack Developer",
    description:
      "Building end-to-end applications with modern frameworks like React, Next.js, FastAPI, and more.",
  },
  {
    icon: Rocket,
    title: "Agentic AI Pioneer",
    description:
      "Designing autonomous AI agents using LangChain, LangGraph, and Google ADK for complex workflows.",
  },
  {
    icon: Users,
    title: "Continuous Learner",
    description:
      "Working as a Full-Stack AI Engineer, building end-to-end intelligent systems while continuously advancing skills in AI agents, RAG, LLMs, and workflow automation.",
  },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered highlight cards
      gsap.fromTo(
        ".about-card",
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: ".about-cards-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );

      // Tech badges stagger
      gsap.fromTo(
        ".about-tech-badge",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".about-tech-strip",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="parallax-bg absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="parallax-bg absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

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
              Building the Future with{" "}
              <span className="text-gradient">Intelligent Systems</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Full-Stack AI Engineer based in Islamabad, Pakistan,
                building intelligent systems that combine advanced machine
                learning with robust software engineering. My work focuses on
                translating cutting-edge AI capabilities into reliable,
                production-ready applications that deliver real-world value.
              </p>
              <p>
                I specialize in Agentic AI, autonomous AI agents,
                Retrieval-Augmented Generation (RAG), and Large Language Model
                (LLM) systems. From large-scale data acquisition and scraping
                pipelines to backend architectures and intuitive interfaces, I
                design end-to-end solutions that enable machines to reason,
                interact with tools, and execute complex workflows with minimal
                human intervention.
              </p>
              <p>
                Currently pursuing my BS in Computer Science at NUML while
                working professionally in AI, I am driven by a long-term goal:
                to contribute to the development of safe, scalable, and
                genuinely useful intelligent systems. I value clarity of
                thought, strong fundamentals, and engineering rigor — building
                systems that are not only impressive in capability, but
                dependable in practice.
              </p>
            </div>
          </div>

          {/* Right: Stats/Highlights */}
          <div className="about-cards-grid grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="about-card glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h4 className="font-display font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Strip */}
        <div className="about-tech-strip">
          <p className="reveal-up text-center text-sm text-muted-foreground mb-6">
            Technologies I work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python",
              "TensorFlow",
              "PyTorch",
              "LangChain",
              "React",
              "Next.js",
              "FastAPI",
              "PostgreSQL",
              "Docker",
            ].map((tech) => (
              <span key={tech} className="about-tech-badge skill-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
