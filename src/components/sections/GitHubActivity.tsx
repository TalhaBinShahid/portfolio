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
    <section className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="reveal-up section-label">Open Source</p>
          <h2 className="reveal-up section-heading">GitHub activity</h2>
          <p className="reveal-up section-subheading max-w-2xl mx-auto">
            Building in public and contributing to the open-source community
          </p>
        </div>

        {/* Stats */}
        <div className="reveal-up grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 text-center transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
              <div className="font-display text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contribution Graph */}
        <div className="reveal-up glass-card rounded-2xl p-6 mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Contribution Activity</p>
          <div className="flex gap-[3px] flex-wrap">
            {Array.from({ length: 52 * 7 }).map((_, i) => {
              const intensity = Math.random();
              let opacity = '0.06';
              if (intensity > 0.8) opacity = '1';
              else if (intensity > 0.6) opacity = '0.6';
              else if (intensity > 0.4) opacity = '0.3';
              else if (intensity > 0.2) opacity = '0.15';

              return (
                <div
                  key={i}
                  className="w-2.5 h-2.5 rounded-sm transition-transform hover:scale-150"
                  style={{ background: `hsl(190 70% 50% / ${opacity})` }}
                />
              );
            })}
          </div>
        </div>

        {/* Featured Repositories */}
        <div className="reveal-up">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground text-center mb-8">Featured Repositories</p>
          <div className="grid md:grid-cols-2 gap-4">
            {featuredRepos.map((repo) => (
              <a
                key={repo.name}
                href={`https://github.com/TalhaBinShahid/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-display font-medium text-sm group-hover:text-primary transition-colors">
                    {repo.name}
                  </h4>
                  <GitBranch size={14} className="text-muted-foreground" />
                </div>
                <p className="text-xs text-muted-foreground mb-4">{repo.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${languageColors[repo.language] || 'bg-muted-foreground'}`} />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={12} />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} />
                    {repo.forks}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-10 reveal-up">
          <a
            href="https://github.com/TalhaBinShahid"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <GitBranch size={16} />
            View full profile
          </a>
        </div>
      </div>
    </section>
  );
}
