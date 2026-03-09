import { useEffect } from 'react';
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
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.reveal-left').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.reveal-right').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      
      {/* Gradient mesh behind particles */}
      <div className="fixed inset-0 -z-20">
        <GradientMesh />
      </div>
      {/* Particles on top of mesh */}
      <div className="fixed inset-0 -z-10">
        <ParticleField />
      </div>
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
  );
};

export default Index;
