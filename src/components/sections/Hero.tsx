import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { ParticleField } from '../three/ParticleField';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo('.hero-title-line', 
        { opacity: 0, y: 80, skewY: 3 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.2, stagger: 0.15 }
      )
      .fromTo('.hero-subtitle',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      )
      .fromTo('.hero-description',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      )
      .fromTo('.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        '-=0.3'
      )
      .fromTo('.hero-social',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
        '-=0.2'
      )
      .fromTo('.scroll-indicator',
        { opacity: 0 },
        { opacity: 1, duration: 0.8 },
        '-=0.2'
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleField />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <div className="overflow-hidden mb-2">
            <h1 className="hero-title-line font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05]">
              Building
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className="hero-title-line font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] text-gradient">
              intelligent systems
            </h1>
          </div>

          {/* Subtitle */}
          <p className="hero-subtitle text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Full-Stack AI Engineer. Specializing in agentic AI, computer vision, 
            and end-to-end ML solutions in the age of automation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a href="#projects" className="hero-cta btn-primary">
              Explore projects
            </a>
            <a href="#about" className="hero-cta btn-outline">
              View my journey
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-5">
            <a
              href="https://github.com/TalhaBinShahid"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/raja-talha"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:talhabinshahid2004@outlook.com"
              className="hero-social text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
