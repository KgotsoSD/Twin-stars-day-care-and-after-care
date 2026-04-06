import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        title="Connect With Us"
        subtitle="We'd love to hear from you! Schedule a visit or send us a message."
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Contact Info */}
            <div className="animate-fade-in-left">
              <span className="inline-block font-display font-bold text-primary text-sm mb-2">Get in Touch ✦</span>
              <h2 className="font-display font-black text-3xl text-foreground mb-8">We're Here for You</h2>
              <div className="space-y-5 mb-10">
                {[
                  { icon: Phone, label: 'Phone', value: '012 345 6789', href: 'tel:0123456789' },
                  { icon: Mail, label: 'Email', value: 'info@twinstars.co.za', href: 'mailto:info@twinstars.co.za' },
                  { icon: MapPin, label: 'Address', value: '123 Sunshine Street, Your City, South Africa' },
                  { icon: Clock, label: 'Hours', value: 'Mon–Fri: 6:30am – 5:30pm' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 bg-card rounded-2xl p-4 border border-border">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-foreground text-sm">{label}</p>
                      {href ? (
                        <a href={href} className="font-body text-muted-foreground hover:text-primary transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="font-body text-muted-foreground">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-3xl overflow-hidden border border-border h-64 bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-10 h-10 mx-auto mb-2 opacity-30" />
                  <p className="font-body text-sm">Google Maps integration coming soon</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <span className="inline-block font-display font-bold text-secondary text-sm mb-2">Send a Message ✦</span>
              <h2 className="font-display font-black text-3xl text-foreground mb-8">Drop Us a Line</h2>
              {submitted ? (
                <div className="bg-leaf/10 border border-leaf/30 rounded-3xl p-10 text-center">
                  <div className="w-16 h-16 bg-leaf/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-leaf" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">Message Sent!</h3>
                  <p className="font-body text-muted-foreground">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-card rounded-3xl p-8 border border-border shadow-sm">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-display font-bold text-sm text-foreground mb-2">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block font-display font-bold text-sm text-foreground mb-2">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-display font-bold text-sm text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-display font-bold text-sm text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block font-display font-bold text-sm text-foreground mb-2">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-xl font-display font-bold hover:shadow-lg hover:shadow-primary/20 transition-all"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
