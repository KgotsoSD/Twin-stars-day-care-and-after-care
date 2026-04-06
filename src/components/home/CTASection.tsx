import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Wavy top */}
      <div className="bg-background overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[30px] md:h-[50px]">
          <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,20 L1440,60 Z" fill="hsl(var(--primary))" />
        </svg>
      </div>

      <div className="bg-primary text-primary-foreground py-16 md:py-20 relative">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-card/5 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-card/5 translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/4 w-6 h-6 rounded-full bg-card/10 animate-float" />

        <div className="container-main relative z-10 text-center px-4">
          <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl mb-5">
            Ready to Enroll Your Little Star?
          </h2>
          <p className="font-body text-lg opacity-90 max-w-xl mx-auto mb-10">
            Come visit us and see why families choose Twin Stars for their children's early development journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              to="/contact"
              className="px-8 py-4 bg-card text-foreground rounded-full font-display font-bold hover:shadow-xl transition-all hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
            >
              Schedule a Visit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0123456789"
              className="px-8 py-4 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground rounded-full font-display font-bold hover:bg-primary-foreground/25 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 opacity-70 font-body text-sm">
            <MapPin className="w-4 h-4" />
            <span>123 Sunshine Street, Your City, South Africa</span>
          </div>
        </div>
      </div>
    </section>
  );
}
