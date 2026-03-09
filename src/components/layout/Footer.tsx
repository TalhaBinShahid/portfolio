import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <a href="#home" className="font-display text-lg font-semibold text-foreground">
              <span className="text-primary">●</span> talhashahid
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Full-Stack AI Engineer
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/TalhaBinShahid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/raja-talha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:talhabinshahid2004@outlook.com"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-right">
            © {currentYear} Talha Bin Shahid
          </p>
        </div>
      </div>
    </footer>
  );
}
