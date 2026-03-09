import { GitBranch, Star, GitFork, Users } from 'lucide-react';

const stats = [
  { label: 'Repositories', value: '20+', icon: GitBranch },
  { label: 'Followers', value: '8', icon: Users },
  { label: 'Following', value: '13', icon: Users },
  { label: 'Stars Received', value: '10+', icon: Star },
];

const featuredRepos = [
  {
    name: 'LeafLens',
    description: 'AI-powered plant disease detection with 97%+ accuracy',
    language: 'Python',
    stars: 5,
    forks: 2,
  },
  {
    name: 'Agentic-AI-Chatbot',
    description: 'LangChain-powered chatbot with DeepSeek-R1',
    language: 'Python',
    stars: 3,
    forks: 1,
  },
  {
    name: 'Number-Plate-Recognition',
    description: 'YOLO-based vehicle plate detection for Pakistan',
    language: 'Python',
    stars: 4,
    forks: 2,
  },
  {
    name: 'py-ecommerce-prediction-LM',
    description: 'E-commerce prediction using machine learning',
    language: 'Jupyter Notebook',
    stars: 2,
    forks: 1,
  },
];

const languageColors: Record<string, string> = {
  Python: 'bg-blue-500',
  'Jupyter Notebook': 'bg-orange-500',
  JavaScript: 'bg-yellow-500',
  TypeScript: 'bg-blue-600',
};

export function GitHubActivity() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="reveal-up section-heading text-gradient">GitHub Activity</h2>
          <p className="reveal-up section-subheading max-w-2xl mx-auto">
            Building in public and contributing to the open-source community
          </p>
        </div>

        {/* Stats */}
        <div className="reveal-up grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-6 text-center hover:border-primary/30 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="font-display text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contribution Graph Placeholder */}
        <div className="reveal-up glass-card rounded-xl p-6 mb-12">
          <h3 className="font-display text-lg font-semibold mb-4">Contribution Activity</h3>
          <div className="flex gap-1 flex-wrap">
            {Array.from({ length: 52 * 7 }).map((_, i) => {
              const intensity = Math.random();
              let bgClass = 'bg-muted';
              if (intensity > 0.8) bgClass = 'bg-primary';
              else if (intensity > 0.6) bgClass = 'bg-primary/70';
              else if (intensity > 0.4) bgClass = 'bg-primary/40';
              else if (intensity > 0.2) bgClass = 'bg-primary/20';
              
              return (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-sm ${bgClass} hover:scale-125 transition-transform`}
                  title={`${Math.floor(Math.random() * 10)} contributions`}
                />
              );
            })}
          </div>
        </div>

        {/* Featured Repositories */}
        <div className="reveal-up">
          <h3 className="font-display text-xl font-semibold text-center mb-8">Featured Repositories</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {featuredRepos.map((repo) => (
              <a
                key={repo.name}
                href={`https://github.com/TalhaBinShahid/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {repo.name}
                  </h4>
                  <GitBranch size={16} className="text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">{repo.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className={`w-3 h-3 rounded-full ${languageColors[repo.language] || 'bg-gray-500'}`} />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={14} />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={14} />
                    {repo.forks}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-8 reveal-up">
          <a
            href="https://github.com/TalhaBinShahid"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <GitBranch size={20} />
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
