import { ReactNode } from 'react';

export function PageHeader({ title, subtitle, children }: { title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="page-header relative">
      {/* Decorative dots */}
      <div className="absolute top-8 left-12 w-4 h-4 rounded-full bg-primary/20 animate-bounce-gentle" />
      <div className="absolute top-16 right-20 w-3 h-3 rounded-full bg-secondary/20 animate-float" />
      <div className="absolute bottom-12 left-1/3 w-5 h-5 rounded-full bg-accent/20 animate-wiggle" />

      <div className="container-main text-center relative z-10 px-4">
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>

      {/* Bottom cloud wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[30px] md:h-[50px]">
          <path d="M0,60 L0,30 Q180,0 360,25 Q540,50 720,20 Q900,0 1080,30 Q1260,55 1440,25 L1440,60 Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
}
