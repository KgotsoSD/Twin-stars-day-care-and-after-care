import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-main px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.jpg" alt="Twin Stars" className="h-12 rounded-lg" />
              <div>
                <h3 className="font-display font-extrabold text-lg">Twin Stars</h3>
                <p className="text-sm opacity-70">Day Care & After Care</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed font-body mb-4">
              Foundation is the future. Nurturing young minds with love, care, and quality early childhood education.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/programs', label: 'Programs' },
                { to: '/fees', label: 'Fees' },
                { to: '/events', label: 'Events' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/faq', label: 'FAQ' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-base mb-4">Our Programs</h4>
            <ul className="space-y-2 font-body text-sm opacity-80">
              <li>Infants (6 weeks–12 months)</li>
              <li>Toddlers (1–2 years)</li>
              <li>Preschool (3–5 years)</li>
              <li>After Care (6–12 years)</li>
              <li>Holiday Programs</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3 font-body text-sm">
              <li className="flex items-start gap-2 opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>123 Sunshine Street, Your City, South Africa</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="w-4 h-4 shrink-0" />
                <span>012 345 6789</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@twinstars.co.za</span>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Mon–Fri: 6:30am – 5:30pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm opacity-60 font-body">
          <p>© {new Date().getFullYear()} Twin Stars Day Care & After Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
