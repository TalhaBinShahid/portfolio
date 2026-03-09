import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { GitHubActivity } from '@/components/sections/GitHubActivity';
import { Contact } from '@/components/sections/Contact';
import { ParticleField } from '@/components/three/ParticleField';
import { GradientMesh } from '@/components/GradientMesh';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // Small delay to ensure all children are rendered
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Reveal up animations
        gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((elem) => {
          gsap.fromTo(elem,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: elem,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        // Reveal left animations
        gsap.utils.toArray<HTMLElement>('.reveal-left').forEach((elem) => {
          gsap.fromTo(elem,
            { opacity: 0, x: -60 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: elem,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        // Reveal right animations
        gsap.utils.toArray<HTMLElement>('.reveal-right').forEach((elem) => {
          gsap.fromTo(elem,
            { opacity: 0, x: 60 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: elem,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        // Reveal scale animations
        gsap.utils.toArray<HTMLElement>('.reveal-scale').forEach((elem) => {
          gsap.fromTo(elem,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: elem,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        ScrollTrigger.refresh();
      }, el);

      return () => {
        ctx.revert();
      };
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* Background layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GradientMesh />
      </div>
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <ParticleField />
      </div>
      <div ref={contentRef} className="relative z-[2] min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <GitHubActivity />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
