import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

export function CTASection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

      <div className="container-main relative z-10 text-center">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
          Ready to Enroll Your Little Star?
        </h2>
        <p className="font-body text-lg opacity-90 max-w-xl mx-auto mb-8">
          Come visit us and see why families choose Twin Stars for their children's early development journey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            to="/contact"
            className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-display font-bold hover:opacity-90 transition-all shadow-lg"
          >
            Schedule a Visit ✨
          </Link>
          <a
            href="tel:0123456789"
            className="px-8 py-4 bg-white/15 backdrop-blur-sm text-primary-foreground rounded-full font-display font-bold hover:bg-white/25 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Call Us Now
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 opacity-80 font-body">
          <MapPin className="w-4 h-4" />
          <span>123 Sunshine Street, Your City, South Africa</span>
        </div>
      </div>
    </section>
  );
}
