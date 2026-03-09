import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Machine Learning', level: 95 },
      { name: 'Deep Learning', level: 90 },
      { name: 'Computer Vision', level: 88 },
      { name: 'NLP', level: 85 },
      { name: 'Agentic AI', level: 92 },
      { name: 'GenAI', level: 90 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'TensorFlow/Keras', level: 90 },
      { name: 'PyTorch', level: 85 },
      { name: 'LangChain/LangGraph', level: 92 },
      { name: 'Scikit-learn', level: 95 },
      { name: 'OpenCV', level: 88 },
      { name: 'YOLO', level: 85 },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'FastAPI', level: 90 },
      { name: 'SQL/PostgreSQL', level: 85 },
      { name: 'Vector Databases', level: 88 },
      { name: 'REST APIs', level: 90 },
      { name: 'Web Scraping', level: 92 },
    ],
  },
  {
    title: 'Frontend & Tools',
    skills: [
      { name: 'React/Next.js', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'Git/GitHub', level: 92 },
      { name: 'Streamlit', level: 90 },
      { name: 'Jupyter/Colab', level: 95 },
      { name: 'Docker', level: 80 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;

    gsap.fromTo(
      barRef.current,
      { width: 0 },
      {
        width: `${level}%`,
        duration: 1.2,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: barRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [level, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{ width: 0, background: 'linear-gradient(90deg, hsl(190 70% 50%), hsl(260 50% 58%))' }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="reveal-up section-label">Expertise</p>
          <h2 className="reveal-up section-heading">Skills & toolkit</h2>
          <p className="reveal-up section-subheading max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="reveal-up glass-card rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold mb-6">{category.title}</h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 reveal-up">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground text-center mb-6">Certifications</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              '5-Day AI Agents Intensive Course with Google',
              'Machine Learning Specialization - Deeplearning.ai',
              'AI for Everyone - Deeplearning.ai',
              'Crash Course on Python - Google',
            ].map((cert) => (
              <div
                key={cert}
                className="px-5 py-2.5 rounded-full text-sm text-muted-foreground border border-border hover:border-primary/30 transition-all duration-300"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
