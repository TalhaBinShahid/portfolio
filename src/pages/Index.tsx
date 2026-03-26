import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplashCursor from '@/components/SplashCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Contact } from '@/components/sections/Contact';

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

        // Section headings - animated clip from below
        gsap.utils.toArray<HTMLElement>('.section-heading').forEach((heading) => {
          gsap.fromTo(heading,
            { opacity: 0, y: 30, clipPath: 'inset(100% 0% 0% 0%)' },
            {
              opacity: 1,
              y: 0,
              clipPath: 'inset(0% 0% 0% 0%)',
              duration: 1,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: heading,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          );
        });

        // Parallax background blobs
        gsap.utils.toArray<HTMLElement>('.parallax-bg').forEach((bg) => {
          gsap.to(bg, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
              trigger: bg.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
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
      <SplashCursor
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1440}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.05}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
      />
      <div ref={contentRef} className="relative z-[2] min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
