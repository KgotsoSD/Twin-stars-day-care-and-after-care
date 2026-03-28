import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/fees', label: 'Fees' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md shadow-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-1.5 px-4 flex items-center justify-center gap-2">
        <Phone className="w-3.5 h-3.5" />
        <span className="font-body font-medium">Call us: 012 345 6789 | Mon–Fri 6:30am – 5:30pm</span>
      </div>

      <div className="container-main flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src="/images/logo.jpg" alt="Twin Stars Day Care Logo" className="h-12 w-auto rounded-lg" />
          <div className="hidden sm:block">
            <h1 className="font-display font-extrabold text-lg leading-tight text-foreground">
              Twin Stars
            </h1>
            <p className="text-xs text-muted-foreground font-body">Day Care & After Care</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-lg text-sm font-semibold font-body transition-colors
                ${location.pathname === link.to
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 px-5 py-2.5 bg-secondary text-secondary-foreground rounded-full font-display font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Enroll Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden border-t border-border bg-card px-4 py-4 animate-fade-in">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-semibold font-body transition-colors
                ${location.pathname === link.to
                  ? 'bg-primary/10 text-primary'
                  : 'text-foreground hover:bg-muted'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block mt-3 px-4 py-3 bg-secondary text-secondary-foreground rounded-full font-display font-bold text-center"
          >
            Enroll Now
          </Link>
        </nav>
      )}
    </header>
  );
}
