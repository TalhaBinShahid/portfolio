import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    color: 'from-cyan-400 to-blue-500',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'NLP',
      'Agentic AI',
      'GenAI',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    color: 'from-purple-400 to-pink-500',
    skills: [
      'TensorFlow/Keras',
      'PyTorch',
      'LangChain/LangGraph',
      'Scikit-learn',
      'OpenCV',
      'YOLO',
    ],
  },
  {
    title: 'Backend Development',
    color: 'from-green-400 to-teal-500',
    skills: [
      'Python',
      'FastAPI',
      'SQL/PostgreSQL',
      'Vector Databases',
      'REST APIs',
      'Web Scraping',
    ],
  },
  {
    title: 'Frontend & Tools',
    color: 'from-orange-400 to-red-500',
    skills: [
      'React/Next.js',
      'JavaScript',
      'Git/GitHub',
      'Streamlit',
      'Jupyter/Colab',
      'Docker',
    ],
  },
];

function SkillBadge({ name, delay }: { name: string; delay: number }) {
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!badgeRef.current) return;

    gsap.fromTo(
      badgeRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: delay,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: badgeRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [delay]);

  return (
    <div
      ref={badgeRef}
      className="skill-badge opacity-0"
    >
      {name}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-card/30">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="reveal-up section-heading text-gradient">Skills & Expertise</h2>
          <p className="reveal-up section-subheading max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="reveal-up glass-card rounded-xl p-6"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className={`font-display text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge
                    key={skill}
                    name={skill}
                    delay={categoryIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 reveal-up">
          <h3 className="font-display text-2xl font-bold text-center mb-8">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              '5-Day AI Agents Intensive Course with Google',
              'Machine Learning Specialization - Deeplearning.ai',
              'AI for Everyone - Deeplearning.ai',
              'Crash Course on Python - Google',
            ].map((cert) => (
              <div
                key={cert}
                className="px-6 py-3 rounded-full bg-muted border border-border hover:border-primary/50 transition-all duration-300"
              >
                <span className="text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
