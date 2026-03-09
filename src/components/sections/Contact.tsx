import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success('Message sent successfully!', {
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="reveal-up section-label">Contact</p>
          <h2 className="reveal-up section-heading">Have a hard problem?</h2>
          <p className="reveal-up section-subheading max-w-2xl mx-auto">
            If that's the case, don't hesitate to contact me. I'm always open to hearing proposals and growing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="reveal-left space-y-4">
            <a
              href="mailto:talhabinshahid2004@outlook.com"
              className="flex items-center gap-4 p-5 glass-card rounded-2xl transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Mail className="text-primary" size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Email</p>
                <p className="text-sm font-medium">talhabinshahid2004@outlook.com</p>
              </div>
            </a>

            <a
              href="tel:+923476400283"
              className="flex items-center gap-4 p-5 glass-card rounded-2xl transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Phone className="text-primary" size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Phone</p>
                <p className="text-sm font-medium">+92-347-6400283</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 glass-card rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <MapPin className="text-primary" size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Location</p>
                <p className="text-sm font-medium">Islamabad-Rawalpindi, Pakistan</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com/TalhaBinShahid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-xl text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/raja-talha"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-xl text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:talhabinshahid2004@outlook.com"
                className="p-3 glass-card rounded-xl text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal-right">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all text-sm"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all resize-none text-sm"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={16} />
                    Send message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
