import { Link } from 'react-router-dom';
import { GraduationCap, Shield, Clock, Users, ArrowRight, BookOpen } from 'lucide-react';
import { FloatingShapes } from '@/components/shared/FloatingShapes';

export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(var(--coral-light)) 0%, hsl(var(--cream)) 35%, hsl(var(--teal-light)) 100%)' }}>
      <FloatingShapes />

      <div className="container-main px-4 md:px-8 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm text-primary px-5 py-2 rounded-full text-sm font-bold font-display mb-6 animate-fade-in shadow-sm">
              <GraduationCap className="w-4 h-4 text-sunshine" />
              Preschool & After Care
            </div>

            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-[3.5rem] text-foreground leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              It's All About{' '}
              <span className="text-primary relative">
                Your Child
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="hsl(var(--sunshine))" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="font-body text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
              For parents seeking a safe and engaging environment, Twin Stars Day Care and Aftercare offers quality childcare and early learning from 1 month through preschool (1-2 and 2-4 years), with after care and homework support for school-age children.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-display font-bold text-base hover:shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
              >
                Connect With Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/programs"
                className="px-8 py-4 bg-card/80 backdrop-blur-sm text-foreground rounded-full font-display font-bold text-base border-2 border-border hover:border-primary hover:text-primary transition-all"
              >
                Our Programs
              </Link>
            </div>
          </div>

          {/* Visual - Logo on blob */}
          <div className="relative flex justify-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
              {/* Blob background */}
              <div className="absolute inset-0">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <path
                    d="M200,20 C300,20 380,80 380,180 C380,280 320,380 200,380 C80,380 20,300 20,200 C20,100 100,20 200,20"
                    fill="hsl(var(--sunshine))"
                    opacity="0.25"
                  />
                </svg>
              </div>
              <img
                src="/images/logo.jpg"
                alt="Twin Stars Day Care"
                className="relative z-10 w-full h-full object-contain p-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {[
            { icon: Shield, label: 'Safe & Secure', color: 'text-secondary' },
            { icon: Users, label: 'Qualified Educators', color: 'text-primary' },
            { icon: Clock, label: 'Flexible Hours', color: 'text-secondary' },
            { icon: BookOpen, label: 'Homework Support', color: 'text-sunshine' },
          ].map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex items-center gap-3 bg-card/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-border/50 hover:shadow-md transition-all hover:-translate-y-0.5">
              <div className={`p-2.5 rounded-xl bg-muted ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-body font-bold text-sm text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom cloud wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] md:h-[60px] lg:h-[80px]">
          <path d="M0,80 L0,40 Q180,10 360,35 Q540,60 720,25 Q900,0 1080,35 Q1260,60 1440,30 L1440,80 Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
}
