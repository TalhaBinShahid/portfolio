import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { ParticleField } from '../three/ParticleField';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the video intro section and fade it out on scroll
      ScrollTrigger.create({
        trigger: videoSectionRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        onLeave: () => {
          gsap.to(videoSectionRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.out',
          });
        },
        onEnterBack: () => {
          gsap.to(videoSectionRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
          });
        },
      });

      // Scroll indicator bounce
      gsap.fromTo(
        '.video-scroll-indicator',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 2,
          ease: 'power2.out',
        }
      );

      // Hero content animations triggered when scrolled into view
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroContentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      heroTl
        .fromTo(
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
        )
        .fromTo(
          '.hero-subtitle',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          '.hero-description',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
          '-=0.7'
        )
        .fromTo(
          '.hero-cta',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(
          '.hero-social',
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '.scroll-indicator',
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: 'power2.out' },
          '-=0.3'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Full-screen Video Intro */}
      <section
        ref={videoSectionRef}
        className="relative h-screen w-full flex items-center justify-center bg-background overflow-hidden"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-contain bg-background"
        >
          <source src="/videos/Scene-1.mp4" type="video/mp4" />
        </video>

        {/* Subtle gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        {/* Scroll indicator on video section */}
        <div className="video-scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/70 z-10">
          <span className="text-sm font-display tracking-wider">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </section>

      {/* Main Hero Content */}
      <section
        id="home"
        ref={heroContentRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <ParticleField />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

        <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Name */}
            <div className="overflow-hidden mb-4">
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

          {/* Scroll Indicator */}
          <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </div>
        </div>
      </section>
    </div>
  );
}
