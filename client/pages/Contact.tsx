import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { themeConfig } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      detail: 'support@themeapp.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      detail: '123 Business Ave, Suite 100',
      description: 'New York, NY 10001',
    },
  ];

  const faqItems = [
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping typically takes 3-7 business days. Express shipping is available for faster delivery.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for most items. Products must be in original condition.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 50 countries worldwide. Shipping costs and times vary by location.',
    },
  ];

  return (
    <div className={`min-h-screen ${themeConfig.layout.type === 'grid' ? 'grid-pattern' : ''}`}>
      {/* Hero Section */}
      <section className={`${themeConfig.spacing.section} ${themeConfig.spacing.container}`}>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className={`grid gap-6 mb-16 ${
          themeConfig.layout.type === 'grid'
            ? 'grid-cols-1 md:grid-cols-3'
            : themeConfig.layout.type === 'sidebar'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1 md:grid-cols-3'
        }`}>
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className={`bg-card border border-border rounded-lg ${themeConfig.spacing.card} text-center hover:shadow-lg transition-all theme-transition group ${
                  themeConfig.layout.type === 'colorful-grid' ? 'hover:scale-105' : ''
                }`}
              >
                <div className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors theme-transition ${
                  themeConfig.layout.type === 'colorful-grid' ? 'group-hover:scale-110' : ''
                }`}>
                  <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-foreground font-medium mb-1">{info.detail}</p>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form and FAQ */}
      <section className={`${themeConfig.spacing.section} ${themeConfig.spacing.container}`}>
        <div className={`grid gap-12 ${
          themeConfig.layout.type === 'sidebar' 
            ? 'grid-cols-1 lg:grid-cols-3' 
            : 'grid-cols-1 lg:grid-cols-2'
        }`}>
          {/* Contact Form */}
          <div className={themeConfig.layout.type === 'sidebar' ? 'lg:col-span-2' : ''}>
            <div className={`bg-card border border-border rounded-lg ${themeConfig.spacing.card}`}>
              <div className="flex items-center gap-2 mb-6">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Send Message</h2>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                  <p className="text-green-800">Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors theme-transition"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors theme-transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors theme-transition"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors theme-transition resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all theme-transition ${
                    themeConfig.layout.type === 'colorful-grid' ? 'hover:scale-105' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* FAQ */}
          <div className={`space-y-6 ${themeConfig.layout.type === 'sidebar' ? 'lg:col-span-1' : ''}`}>
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Quick Answers</h2>
            </div>

            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`bg-card border border-border rounded-lg ${themeConfig.spacing.card} hover:shadow-lg transition-all theme-transition`}
              >
                <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}

            <div className={`bg-primary/5 border border-primary/20 rounded-lg ${themeConfig.spacing.card}`}>
              <h3 className="font-semibold text-foreground mb-2">Need more help?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Check out our comprehensive help center for detailed guides and tutorials.
              </p>
              <button className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                Visit Help Center →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
