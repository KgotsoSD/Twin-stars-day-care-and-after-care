import { Link } from 'react-router-dom';
import { BookOpen, Users, Sparkles } from 'lucide-react';

export function AboutPreview() {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-12 right-16 opacity-20 pointer-events-none animate-float">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" stroke="hsl(var(--secondary))" strokeWidth="2" strokeDasharray="6 4" />
        </svg>
      </div>
      <div className="absolute bottom-16 left-12 w-6 h-6 bg-sunshine/20 rounded-full animate-bounce-gentle" />

      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Images */}
          <div className="relative animate-fade-in-left">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-card">
                <img
                  src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=450&fit=crop"
                  alt="Children learning"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
              {/* Overlapping smaller image */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 w-40 md:w-52 rounded-2xl overflow-hidden shadow-xl border-4 border-card">
                <img
                  src="https://images.unsplash.com/photo-1587654780251-5fe13ada3cba?w=300&h=250&fit=crop"
                  alt="Happy children"
                  className="w-full h-32 md:h-40 object-cover"
                />
              </div>
              {/* Decorative border shape */}
              <div className="absolute -top-3 -left-3 w-24 h-24 rounded-2xl border-4 border-primary/20 -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-right">
            <span className="inline-block font-display font-bold text-primary text-sm mb-2">Our Roots ✦</span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              From 6 Weeks to 12 Years
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Twin Stars Day Care & After Care was founded with a simple yet powerful belief: that every child deserves a nurturing environment where they can grow, learn, and shine.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              For over 10 years, we have been dedicated to providing exceptional early childhood care and education. Our team of qualified, passionate caregivers treats each child as an individual, fostering their unique talents.
            </p>

            {/* Value cards */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { icon: BookOpen, label: 'Play-Based Learning', color: 'bg-primary/10 text-primary' },
                { icon: Users, label: 'Qualified Teachers', color: 'bg-secondary/10 text-secondary' },
                { icon: Sparkles, label: 'Creative Growth', color: 'bg-sunshine/15 text-accent-foreground' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="text-center p-3 rounded-xl bg-background border border-border">
                  <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center mx-auto mb-2`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="font-body font-bold text-xs text-foreground">{label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-display font-bold text-sm hover:shadow-lg hover:shadow-secondary/20 transition-all"
            >
              Learn More About Us →
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '10+', label: 'Years Experience', color: 'text-primary' },
            { number: '200+', label: 'Happy Families', color: 'text-secondary' },
            { number: '100%', label: 'Dedicated Staff', color: 'text-leaf' },
            { number: '⭐ 5', label: 'Parent Rating', color: 'text-sunshine' },
          ].map(({ number, label, color }) => (
            <div key={label} className="text-center py-6 bg-background rounded-2xl border border-border">
              <div className={`font-display font-black text-3xl md:text-4xl ${color} mb-1`}>{number}</div>
              <div className="font-body font-semibold text-muted-foreground text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
