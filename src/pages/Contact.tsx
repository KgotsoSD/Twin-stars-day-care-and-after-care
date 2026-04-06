import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, MessageSquareText, Handshake } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import {
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_HOURS_CALENDAR,
  SITE_HOURS_PRIMARY,
  SITE_HOURS_SATURDAY,
  SITE_PHONES,
  getGoogleMapsEmbedSrc,
} from '@/lib/site-info';

const encodeBody = (form: HTMLFormElement) => {
  const params = new URLSearchParams();
  new FormData(form).forEach((value, key) => {
    params.append(key, value instanceof File ? value.name : value);
  });
  return params.toString();
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitting(true);

    const form = e.currentTarget;

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeBody(form),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setSubmitError('We could not send your message right now. Please email or call us instead.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Connect With Us"
        subtitle="We would love to hear from you! Schedule a visit or send us a message."
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Contact Info */}
            <div className="animate-fade-in-left">
              <span className="inline-flex items-center gap-2 font-display font-bold text-primary text-sm mb-2"><Handshake className="w-4 h-4" />Get in Touch</span>
              <h2 className="font-display font-black text-3xl text-foreground mb-8">We Are Here for You</h2>
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4 bg-card rounded-2xl p-4 border border-border">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground text-sm">Phone</p>
                    <div className="font-body text-muted-foreground space-y-1">
                      {SITE_PHONES.map(({ display, tel }) => (
                        <a key={tel} href={`tel:${tel}`} className="block hover:text-primary transition-colors">
                          {display}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                {[
                  { icon: Mail, label: 'Email', value: SITE_EMAIL, href: `mailto:${SITE_EMAIL}` },
                  { icon: MapPin, label: 'Address', value: SITE_ADDRESS },
                  {
                    icon: Clock,
                    label: 'Hours',
                    value: [SITE_HOURS_PRIMARY, SITE_HOURS_SATURDAY, SITE_HOURS_CALENDAR].join('\n'),
                  },
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
                        <p className="font-body text-muted-foreground whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl overflow-hidden border border-border aspect-[4/3] max-h-[380px] bg-muted">
                <iframe
                  title="Twin Stars location on Google Maps"
                  src={getGoogleMapsEmbedSrc()}
                  className="w-full h-full min-h-[280px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <span className="inline-flex items-center gap-2 font-display font-bold text-secondary text-sm mb-2"><MessageSquareText className="w-4 h-4" />Send a Message</span>
              <h2 className="font-display font-black text-3xl text-foreground mb-8">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-leaf/10 border border-leaf/30 rounded-3xl p-10 text-center">
                  <div className="w-16 h-16 bg-leaf/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-leaf" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">Message Sent!</h3>
                  <p className="font-body text-muted-foreground">Thank you for reaching out. We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5 bg-card rounded-3xl p-8 border border-border shadow-sm"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="sr-only">
                    <label>
                      Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-display font-bold text-sm text-foreground mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block font-display font-bold text-sm text-foreground mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
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
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-display font-bold text-sm text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block font-display font-bold text-sm text-foreground mb-2">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  {submitError ? (
                    <p className="text-sm font-body text-destructive" role="alert">
                      {submitError}
                    </p>
                  ) : null}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-xl font-display font-bold hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {submitting ? 'Sending…' : 'Send Message'}
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
