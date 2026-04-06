import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Heart } from 'lucide-react';
import { SITE_ADDRESS, SITE_EMAIL, SITE_HOURS_CALENDAR, SITE_HOURS_PRIMARY, SITE_HOURS_SATURDAY, SITE_PHONES } from '@/lib/site-info';

export function Footer() {
  return (
    <footer className="relative">
      {/* Wavy top */}
      <div className="bg-background overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px]">
          <path d="M0,80 L0,40 Q240,0 480,30 Q720,60 960,20 Q1200,0 1440,40 L1440,80 Z" fill="hsl(var(--foreground))" />
        </svg>
      </div>

      <div className="bg-foreground text-background">
        <div className="container-main px-4 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img src="/images/logo.jpg" alt="Twin Stars" className="h-14 rounded-xl" />
                <div>
                  <h3 className="font-display font-black text-xl">Twin Stars</h3>
                  <p className="text-sm opacity-60 font-body">Day Care & After Care</p>
                </div>
              </div>
              <p className="text-sm opacity-70 leading-relaxed font-body mb-5">
                Foundation is the future. Nurturing young minds with love, care, and quality early childhood education.
              </p>
              <div className="flex gap-3">
                <a href="#" className="p-2.5 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-all" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="p-2.5 rounded-full bg-background/10 hover:bg-primary hover:text-primary-foreground transition-all" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-base mb-5">Quick Links</h4>
              <ul className="space-y-2.5 font-body text-sm">
                {[
                  { to: '/about', label: 'About Us' },
                  { to: '/programs', label: 'Programs' },
                  { to: '/gallery', label: 'Gallery' },
                  { to: '/faq', label: 'FAQ' },
                  { to: '/contact', label: 'Contact' },
                ].map(link => (
                  <li key={link.to}>
                    <Link to={link.to} className="opacity-70 hover:opacity-100 hover:text-primary transition-all flex items-center gap-1.5">
                      <span className="text-primary">›</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-display font-bold text-base mb-5">Our Programs</h4>
              <ul className="space-y-2.5 font-body text-sm opacity-70">
                <li>Infants (1 month-12 months)</li>
                <li>Toddlers (1-2 years)</li>
                <li>Preschool (2-4 years)</li>
                <li>After care & school-age support</li>
                <li>Holiday Programs</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-bold text-base mb-5">Contact Us</h4>
              <ul className="space-y-3.5 font-body text-sm">
                <li className="flex items-start gap-2.5 opacity-70">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <span>{SITE_ADDRESS}</span>
                </li>
                <li className="flex items-start gap-2.5 opacity-70">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <span className="space-y-0.5">
                    {SITE_PHONES.map(({ display, tel }) => (
                      <a key={tel} href={`tel:${tel}`} className="block hover:text-primary transition-colors">
                        {display}
                      </a>
                    ))}
                  </span>
                </li>
                <li className="flex items-center gap-2.5 opacity-70">
                  <Mail className="w-4 h-4 shrink-0 text-primary" />
                  <a href={`mailto:${SITE_EMAIL}`} className="hover:text-primary transition-colors">
                    {SITE_EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-2.5 opacity-70">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                  <span className="space-y-0.5">
                    <span className="block">{SITE_HOURS_PRIMARY}</span>
                    <span className="block">{SITE_HOURS_SATURDAY}</span>
                    <span className="block text-xs opacity-90">{SITE_HOURS_CALENDAR}</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
