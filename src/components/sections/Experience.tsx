import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Full Stack AI Engineer',
    company: 'Introva',
    location: 'Remote',
    period: 'Dec 2024 - Present',
    description: [
      'Developing end-to-end AI-powered applications using modern tech stacks',
      'Building intelligent systems with machine learning models and APIs',
      'Implementing scalable backend architectures and responsive frontend interfaces',
      'Working with cutting-edge AI technologies and frameworks for production systems',
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

const achievements = [
  {
    title: 'GitHub Developer Program Member',
    description: 'Active member of the GitHub Developer Program with Pro status',
  },
  {
    title: 'AI Agents Intensive',
    description: '5-Day intensive course with Google on building AI agents',
  },
  {
    title: 'Multiple ML Specializations',
    description: 'Completed certifications from Deeplearning.ai and Google',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-card/30">
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

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative pl-8">
              {/* Timeline Line */}
              <div className="timeline-line" />

              {experiences.map((exp, index) => (
                <div key={exp.title} className="reveal-left relative mb-12 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="timeline-dot top-0" />

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

          {/* Achievements */}
          <div className="reveal-right">
            <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-primary" size={24} />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="glass-card rounded-xl p-4 hover:border-primary/30 transition-all duration-300"
                >
                  <h4 className="font-semibold mb-1">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
