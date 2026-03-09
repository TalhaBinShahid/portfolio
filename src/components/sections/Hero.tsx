import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ParticleField } from '../three/ParticleField';
import { GradientMesh } from '../GradientMesh';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        '.hero-title-line',
        { opacity: 0, y: 100, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power4.out',
        }
      );

      // Animate subtitle and description
      gsap.fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.8,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        '.hero-description',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1,
          ease: 'power3.out',
        }
      );

      // Animate buttons
      gsap.fromTo(
        '.hero-cta',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
        }
      );

      // Animate social links
      gsap.fromTo(
        '.hero-social',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 1.5,
          stagger: 0.1,
          ease: 'power3.out',
        }
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
      {/* Background animations */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <GradientMesh />
      </div>
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <ParticleField />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <div ref={titleRef} className="overflow-hidden mb-4">
            <h1 className="hero-title-line font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="text-foreground">Talha Bin</span>
            </h1>
          </div>
          <div className="overflow-hidden mb-6">
            <h1 className="hero-title-line font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient">
              Shahid
            </h1>
          </div>

          {/* Title */}
          <p className="hero-subtitle font-display text-xl md:text-2xl text-primary mb-6 tracking-wide">
            Full-Stack AI Engineer
          </p>

          {/* Description */}
          <p className="hero-description text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Building intelligent systems at the intersection of AI, Machine Learning, and Modern Web Development. 
            Specializing in Agentic AI, Computer Vision, and end-to-end ML solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#projects" className="hero-cta btn-primary">
              View My Work
            </a>
            <a href="#contact" className="hero-cta btn-outline">
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/TalhaBinShahid"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/raja-talha"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:talhabinshahid2004@outlook.com"
              className="hero-social p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
