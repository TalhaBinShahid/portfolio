import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Vizdom AI',
    subtitle: 'AI Educational Video Generation Platform',
    description: 'Agentic AI platform for intelligent learning video generation, semantic video search, and scalable streaming delivery. Uses LangGraph-powered multi-agent workflows for automated scripting, scene planning, and HLS adaptive streaming with embedding-based semantic search.',
    tech: ['LangGraph', 'NestJS', 'FastAPI', 'React', 'MongoDB', 'Supabase', 'HLS', 'FFmpeg'],
    github: 'https://github.com/TalhaBinShahid',
    live: null,
    featured: true,
  },
  {
    title: 'LeafLens',
    subtitle: 'AI Disease Detection & Assistant',
    description: 'End-to-end plant disease detection system using FastAPI + TensorFlow. Fine-tuned ResNet50/InceptionV3 on 50k+ images achieving 97-98% accuracy. Full-stack Next.js app with real-time predictions and RAG-powered AI assistant.',
    tech: ['TensorFlow', 'FastAPI', 'Next.js', 'OpenAI', 'ResNet50'],
    github: 'https://github.com/TalhaBinShahid',
    live: null,
    featured: true,
  },
  {
    title: 'Pizza Showdown App',
    subtitle: 'Google Agent Development Kit',
    description: 'Built autonomous agents using Google\'s Agentic AI Toolkit and Gemini 2.5 models for web search, translation, and planning tasks. Integrated multi-agent workflows using ReAct and SequentialAgent patterns.',
    tech: ['Google ADK', 'Gemini 2.5', 'Python', 'ReAct', 'Multi-Agent'],
    github: 'https://github.com/TalhaBinShahid',
    live: null,
    featured: true,
  },
  {
    title: 'Number Plate Recognition',
    subtitle: 'YOLO Fine-tuning',
    description: 'Fine-tuned YOLO on 25K+ Pakistan vehicle images for accurate number plate detection. Extracts bounding box coordinates with high precision for automated vehicle identification systems.',
    tech: ['YOLOv8', 'Python', 'OpenCV', 'Computer Vision'],
    github: 'https://github.com/TalhaBinShahid',
    live: null,
    featured: false,
  },
  {
    title: 'Agentic AI Chatbot',
    subtitle: 'LangChain + DeepSeek',
    description: 'Locally running AI chatbot using LangChain integrated with DeepSeek-R1 through Ollama. Deployed via Streamlit for conversational AI interactions.',
    tech: ['LangChain', 'DeepSeek-R1', 'Ollama', 'Streamlit'],
    github: 'https://github.com/TalhaBinShahid',
    live: null,
    featured: false,
  },
  {
    title: 'Eye Disease Detection',
    subtitle: 'CNN Classification',
    description: 'Convolutional Neural Network for automated eye disease detection from medical images. Trained on diverse dataset for early diagnosis assistance.',
    tech: ['TensorFlow', 'CNN', 'Keras', 'Medical AI'],
    github: 'https://github.com/TalhaBinShahid',
    live: null,
    featured: false,
  },
  {
    title: 'Twitter Sentiment Analysis',
    subtitle: 'RNN/LSTM',
    description: 'Deep learning model for real-time Twitter sentiment analysis using RNN/LSTM architecture. Classifies tweets into positive, negative, and neutral categories.',
    tech: ['RNN', 'LSTM', 'NLP', 'Python', 'TensorFlow'],
    github: 'https://github.com/TalhaBinShahid',
    live: null,
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <div
      className="reveal-up group"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="block glass-card rounded-2xl p-6 h-full transition-all duration-500 hover:border-primary/20"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.subtitle}</p>
          </div>
          <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="reveal-up section-label">Work</p>
          <h2 className="reveal-up section-heading">Featured work</h2>
          <p className="reveal-up section-subheading max-w-2xl mx-auto">
            A showcase of AI-powered applications and intelligent systems
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        <div className="reveal-up">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground text-center mb-8">
            More projects
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.filter(p => !p.featured).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index + 3} />
            ))}
          </div>
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12 reveal-up">
          <a
            href="https://github.com/TalhaBinShahid?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <Github size={16} />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
