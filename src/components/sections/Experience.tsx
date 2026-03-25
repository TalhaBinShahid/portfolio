import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    type: 'work',
    title: 'Full Stack AI Engineer',
    company: 'Introva',
    location: 'Remote',
    period: 'Jan 2026 - Present',
    description: [
      'Architecting and building Retrieval-Augmented Generation (RAG) systems for intelligent document processing and knowledge retrieval',
      'Developing autonomous AI agents leveraging LangChain, LangGraph, and custom orchestration frameworks',
      'Fine-tuning and integrating Large Language Models (LLMs) for domain-specific production applications',
      'Building robust data scraping and automation pipelines for large-scale data collection and processing',
      'Delivering end-to-end full-stack AI solutions from model development through deployment and monitoring',
    ],
    icon: Briefcase,
  },
  {
    type: 'work',
    title: 'AI/ML Fellowship',
    company: 'Buildables',
    location: 'Islamabad',
    period: 'Jan 2025 - Dec 2025',
    description: [
      'Gained hands-on experience in Python (NumPy, Pandas, Matplotlib), web scraping (Selenium, BeautifulSoup, Crawl4AI), and data preprocessing',
      'Developed and deployed ML/DL models (Regression, Classification, Clustering, CNNs, RNNs, Transformers, GANs)',
      'Built practical applications including house price prediction, spam detection, anomaly detection, and image classification',
      'Designed and implemented advanced AI agents and RAG chatbots using LangGraph and Google AI SDK',
    ],
    icon: Briefcase,
  },
];


export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line growing
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.timeline-line',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Staggered experience cards
      gsap.fromTo(
        '.exp-card',
        { opacity: 0, x: -50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.exp-timeline',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );


    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden bg-card/30">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="reveal-up section-heading text-gradient">Experience</h2>
          <p className="reveal-up section-subheading max-w-2xl mx-auto">
            My journey in AI engineering and full-stack development
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Timeline */}
          <div>
            <div className="exp-timeline relative pl-8">
              {/* Timeline Line */}
              <div className="timeline-line" />

              {experiences.map((exp, index) => (
                <div key={exp.title} className="exp-card relative mb-12 last:mb-0">

                  <div className="glass-card rounded-xl p-6 ml-4">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <exp.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">
                          {exp.location} • {exp.period}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
