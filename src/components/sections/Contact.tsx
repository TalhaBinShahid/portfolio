import { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
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
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/talhabinshahid2004@outlook.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success('Message sent successfully!', {
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Failed to send message', {
          description: 'Please try again or reach out via email directly.',
        });
      }
    } catch {
      toast.error('Failed to send message', {
        description: 'Please try again or reach out via email directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Contact info cards stagger
      gsap.fromTo(
        '.contact-info-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-info-list',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Form fields sequential reveal
      gsap.fromTo(
        '.contact-form-field',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Social links bounce in
      gsap.fromTo(
        '.contact-social',
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: '.contact-socials',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="reveal-up section-heading text-gradient">Get In Touch</h2>
          <p className="reveal-up section-subheading max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="reveal-left">
            <h3 className="font-display text-2xl font-bold mb-6">Let's build something amazing</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Whether you need an AI solution, a full-stack application, 
              or just want to say hi – feel free to reach out!
            </p>

            <div className="contact-info-list space-y-4 mb-8">
              <a
                href="mailto:talhabinshahid2004@outlook.com"
                className="contact-info-item flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">talhabinshahid2004@outlook.com</p>
                </div>
              </a>

              <a
                href="tel:+923476400283"
                className="contact-info-item flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+92-347-6400283</p>
                </div>
              </a>

              <div className="contact-info-item flex items-center gap-4 p-4 glass-card rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Islamabad-Rawalpindi, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-socials flex gap-4">
              <a
                href="https://github.com/TalhaBinShahid"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social p-4 glass-card rounded-xl hover:border-primary/30 hover:text-primary transition-all duration-300"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/raja-talha"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social p-4 glass-card rounded-xl hover:border-primary/30 hover:text-primary transition-all duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:talhabinshahid2004@outlook.com"
                className="contact-social p-4 glass-card rounded-xl hover:border-primary/30 hover:text-primary transition-all duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal-right">
            <form onSubmit={handleSubmit} className="contact-form glass-card rounded-xl p-8">
              <div className="contact-form-field grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="contact-form-field mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div className="contact-form-field mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <div className="contact-form-field">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
