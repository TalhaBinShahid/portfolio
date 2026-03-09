import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
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
  {
    type: 'education',
    title: 'BS Computer Science',
    company: 'National University of Modern Languages (NUML)',
    location: 'Islamabad, Pakistan',
    period: 'In Progress',
    description: [
      'Pursuing comprehensive computer science education with focus on AI/ML',
      'Active participation in coding competitions and hackathons',
      'Building real-world projects alongside academic curriculum',
    ],
    icon: GraduationCap,
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
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="reveal-up section-label">Journey</p>
          <h2 className="reveal-up section-heading">Experience & education</h2>
          <p className="reveal-up section-subheading max-w-2xl mx-auto">
            My journey in AI engineering and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative pl-8">
              <div className="timeline-line" />

              {experiences.map((exp) => (
                <div key={exp.title} className="reveal-left relative mb-10 last:mb-0">
                  <div className="timeline-dot top-1" />

                  <div className="glass-card rounded-2xl p-6 ml-4">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0">
                        <exp.icon className="text-primary" size={18} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold">{exp.title}</h3>
                        <p className="text-primary text-sm">{exp.company}</p>
                        <p className="text-xs text-muted-foreground font-mono mt-1">
                          {exp.location} · {exp.period}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
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
            <div className="flex items-center gap-2 mb-6">
              <Award className="text-primary" size={18} />
              <h3 className="font-display text-lg font-semibold">Achievements</h3>
            </div>
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="glass-card rounded-2xl p-5 transition-all duration-300"
                >
                  <h4 className="font-medium text-sm mb-1">{achievement.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
