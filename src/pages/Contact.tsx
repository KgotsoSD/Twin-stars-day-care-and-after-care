import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-leaf/10 to-primary/10">
        <div className="container-main text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4 animate-fade-in">
            Contact Us
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            We'd love to hear from you! Schedule a visit or send us a message.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in-left">
              <h2 className="font-display font-extrabold text-2xl text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, label: 'Phone', value: '012 345 6789', href: 'tel:0123456789' },
                  { icon: Mail, label: 'Email', value: 'info@twinstars.co.za', href: 'mailto:info@twinstars.co.za' },
                  { icon: MapPin, label: 'Address', value: '123 Sunshine Street, Your City, South Africa' },
                  { icon: Clock, label: 'Hours', value: 'Mon–Fri: 6:30am – 5:30pm' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
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
              <div className="rounded-2xl overflow-hidden border border-border h-64 bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-10 h-10 mx-auto mb-2 opacity-40" />
                  <p className="font-body text-sm">Google Maps integration coming soon</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <h2 className="font-display font-extrabold text-2xl text-foreground mb-6">Send a Message</h2>
              {submitted ? (
                <div className="bg-leaf/10 border border-leaf/30 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">Message Sent!</h3>
                  <p className="font-body text-muted-foreground">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-display font-bold text-sm text-foreground mb-1.5">First Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block font-display font-bold text-sm text-foreground mb-1.5">Last Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-display font-bold text-sm text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-display font-bold text-sm text-foreground mb-1.5">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block font-display font-bold text-sm text-foreground mb-1.5">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-xl font-display font-bold hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
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
