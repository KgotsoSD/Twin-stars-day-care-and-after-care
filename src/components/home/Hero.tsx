import { Link } from 'react-router-dom';
import { Star, Shield, Clock, Heart } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/10">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-sunshine/20 animate-float" />
      <div className="absolute top-32 right-16 w-14 h-14 rounded-full bg-pink/20 animate-bounce-gentle" />
      <div className="absolute bottom-20 left-1/4 w-10 h-10 rounded-full bg-leaf/20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 right-1/3 w-16 h-16 rounded-full bg-lavender/20 animate-bounce-gentle" style={{ animationDelay: '0.5s' }} />

      <div className="container-main px-4 md:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-bold font-display mb-6 animate-fade-in">
              <Star className="w-4 h-4 text-sunshine" fill="currentColor" />
              Foundation is the Future
            </div>

            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Nurturing Young
              <span className="text-primary block">Minds to Shine</span>
            </h1>

            <p className="font-body text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Where every child is a star! Quality early childhood education in a safe, loving, and stimulating environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/contact"
                className="px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-display font-bold text-base hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-secondary/30"
              >
                Schedule a Visit ✨
              </Link>
              <Link
                to="/programs"
                className="px-8 py-4 bg-card text-foreground rounded-full font-display font-bold text-base border-2 border-border hover:border-primary hover:text-primary transition-all"
              >
                Our Programs
              </Link>
            </div>
          </div>

          {/* Visual - Logo showcase */}
          <div className="relative flex justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 animate-float" />
              <img
                src="/images/logo.jpg"
                alt="Twin Stars Day Care"
                className="relative z-10 w-full h-full object-contain p-6 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {[
            { icon: Shield, label: 'Safe Environment', color: 'text-leaf' },
            { icon: Heart, label: 'Dedicated Caregivers', color: 'text-pink' },
            { icon: Clock, label: 'Flexible Hours', color: 'text-primary' },
            { icon: Star, label: '5-Star Rated', color: 'text-sunshine' },
          ].map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex items-center gap-3 bg-card rounded-2xl p-4 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className={`p-2 rounded-xl bg-muted ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-body font-semibold text-sm text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
