import { Link } from 'react-router-dom';
import { BookOpen, Users, Sparkles } from 'lucide-react';

export function AboutPreview() {
  return (
    <section className="section-padding bg-card">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-4">
            About Twin Stars Day Care
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Creating a foundation for lifelong learning and success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: BookOpen,
              title: 'Our Mission',
              desc: 'To provide exceptional early childhood care and education in a nurturing, safe, and stimulating environment where every child can thrive.',
              color: 'bg-primary/10 text-primary',
            },
            {
              icon: Users,
              title: 'Our Vision',
              desc: 'To be the leading childcare provider in the community, recognized for excellence in early childhood development.',
              color: 'bg-secondary/10 text-secondary',
            },
            {
              icon: Sparkles,
              title: 'Our Values',
              desc: 'Safety, respect, creativity, inclusivity, and individual growth guide everything we do. We welcome families from all backgrounds.',
              color: 'bg-leaf/10 text-leaf',
            },
          ].map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              className="bg-background rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-5`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-foreground">{title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '10+', label: 'Years Experience', color: 'text-primary' },
            { number: '200+', label: 'Happy Families', color: 'text-secondary' },
            { number: '100%', label: 'Dedicated Staff', color: 'text-leaf' },
            { number: '⭐ 5', label: 'Parent Rating', color: 'text-sunshine' },
          ].map(({ number, label, color }) => (
            <div key={label} className="text-center py-6">
              <div className={`font-display font-black text-4xl md:text-5xl ${color} mb-2`}>{number}</div>
              <div className="font-body font-semibold text-muted-foreground text-sm">{label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/about"
            className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-full font-display font-bold hover:opacity-90 transition-opacity"
          >
            Learn More About Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
