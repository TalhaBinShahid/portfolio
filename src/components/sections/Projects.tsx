import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Speech-to-Speech Reconstruction for Dysarthria',
    subtitle: 'Deep Convolutional cGAN',
    description: 'Advanced speech rehabilitation system using Deep Convolutional Conditional GANs to transform dysarthric speech into intelligible, natural-sounding speech. Trained on 92,780 audio files with U-Net Generator and PatchGAN Discriminator, achieving PESQ score of 2.77 for assistive communication.',
    tech: ['TensorFlow', 'cGAN', 'U-Net', 'Mel-Spectrograms', 'Python', 'Speech Processing'],
    github: 'https://github.com/TalhaBinShahid',
    live: null,
    featured: true,
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Vizdom AI',
    subtitle: 'AI Educational Video Generation Platform',
    description: 'Agentic AI platform for intelligent learning video generation, semantic video search, and scalable streaming delivery. Uses LangGraph-powered multi-agent workflows for automated scripting, scene planning, and HLS adaptive streaming with embedding-based semantic search.',
    tech: ['LangGraph', 'NestJS', 'FastAPI', 'React', 'MongoDB', 'Supabase', 'HLS', 'FFmpeg'],
    github: 'https://github.com/TalhaBinShahid',
    live: null,
    featured: true,
    gradient: 'from-violet-500 to-fuchsia-600',
  },
  {
    title: 'LeafLens',
    subtitle: 'AI Disease Detection & Assistant',
    description: 'End-to-end plant disease detection system using FastAPI + TensorFlow. Fine-tuned ResNet50/InceptionV3 on 50k+ images achieving 97-98% accuracy. Full-stack Next.js app with real-time predictions and RAG-powered AI assistant.',
    tech: ['TensorFlow', 'FastAPI', 'Next.js', 'OpenAI', 'ResNet50'],
    github: 'https://github.com/TalhaBinShahid',
    live: null,
    featured: true,
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Pizza Showdown App',
    subtitle: 'Google Agent Development Kit',
    description: 'Built autonomous agents using Google\'s Agentic AI Toolkit and Gemini 2.5 models for web search, translation, and planning tasks. Integrated multi-agent workflows using ReAct and SequentialAgent patterns.',
    tech: ['Google ADK', 'Gemini 2.5', 'Python', 'ReAct', 'Multi-Agent'],
    github: 'https://github.com/TalhaBinShahid',
    live: null,
    featured: true,
    gradient: 'from-red-500 to-orange-600',
  },
  {
    title: 'Number Plate Recognition',
    subtitle: 'YOLO Fine-tuning',
    description: 'Fine-tuned YOLO on 25K+ Pakistan vehicle images for accurate number plate detection. Extracts bounding box coordinates with high precision for automated vehicle identification systems.',
    tech: ['YOLOv8', 'Python', 'OpenCV', 'Computer Vision'],
    github: 'https://github.com/TalhaBinShahid',
    live: null,
    featured: true,
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Agentic AI Chatbot',
    subtitle: 'LangChain + DeepSeek',
    description: 'Locally running AI chatbot using LangChain integrated with DeepSeek-R1 through Ollama. Deployed via Streamlit for conversational AI interactions.',
    tech: ['LangChain', 'DeepSeek-R1', 'Ollama', 'Streamlit'],
    github: 'https://github.com/TalhaBinShahid',
    live: null,
    featured: false,
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Eye Disease Detection',
    subtitle: 'CNN Classification',
    description: 'Convolutional Neural Network for automated eye disease detection from medical images. Trained on diverse dataset for early diagnosis assistance.',
    tech: ['TensorFlow', 'CNN', 'Keras', 'Medical AI'],
    github: 'https://github.com/TalhaBinShahid',
    live: null,
    featured: false,
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    title: 'Twitter Sentiment Analysis',
    subtitle: 'RNN/LSTM',
    description: 'Deep learning model for real-time Twitter sentiment analysis using RNN/LSTM architecture. Classifies tweets into positive, negative, and neutral categories.',
    tech: ['RNN', 'LSTM', 'NLP', 'Python', 'TensorFlow'],
    github: 'https://github.com/TalhaBinShahid',
    live: null,
    featured: false,
    gradient: 'from-sky-500 to-blue-600',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <div
      className={`reveal-up project-card ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient Top Bar */}
      <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
      
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-display text-xl font-bold mb-1">{project.title}</h3>
            <p className="text-primary text-sm">{project.subtitle}</p>
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Github size={20} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-muted border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="reveal-up section-heading text-gradient">Featured Projects</h2>
          <p className="reveal-up section-subheading max-w-2xl mx-auto">
            A showcase of AI-powered applications and intelligent systems
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        <div className="reveal-up">
          <h3 className="font-display text-xl font-semibold text-center mb-8 text-muted-foreground">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
