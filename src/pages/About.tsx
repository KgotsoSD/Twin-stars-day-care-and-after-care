import { BookOpen, Users, Lightbulb, Heart, Shield, Award, BookMarked, Target } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';

const values = [
  { icon: Shield, title: 'Safety', desc: 'A secure, supervised environment where children are protected at all times.', color: 'bg-secondary/10 text-secondary' },
  { icon: Heart, title: 'Respect', desc: 'Every child, family, and staff member is treated with dignity and kindness.', color: 'bg-primary/10 text-primary' },
  { icon: Lightbulb, title: 'Creativity', desc: 'We foster imagination through art, music, play, and exploration.', color: 'bg-sunshine/15 text-accent-foreground' },
  { icon: Users, title: 'Inclusivity', desc: 'We welcome families from all backgrounds and cultures.', color: 'bg-leaf/10 text-leaf' },
  { icon: BookOpen, title: 'Learning', desc: 'Play-based education that builds a strong foundation for lifelong learning.', color: 'bg-pink/10 text-pink' },
  { icon: Award, title: 'Excellence', desc: 'We strive for the highest standards in everything we do.', color: 'bg-lavender/15 text-foreground' },
];

const About = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Learn about our journey, mission, and values at Twin Stars Day Care & After Care."
      />

      {/* Story */}
      <section className="section-padding">
        <div className="container-main grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative animate-fade-in-left">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-card">
              <img src="/images/logo.jpg" alt="Twin Stars" className="w-full max-h-96 object-contain bg-card p-8" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl border-4 border-primary/20 -z-10" />
          </div>
          <div className="animate-fade-in-right">
            <span className="inline-flex items-center gap-2 font-display font-bold text-primary text-sm mb-2"><BookMarked className="w-4 h-4" />Our Story</span>
            <h2 className="font-display font-black text-3xl text-foreground mb-6">Foundation is the Future</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Twin Stars Day Care & After Care was founded with a simple yet powerful belief: that every child deserves a nurturing environment where they can grow, learn, and shine.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              For over 10 years, we have been dedicated to providing exceptional early childhood care and education. Our team of qualified, passionate caregivers treats each child as an individual, fostering their unique talents and abilities.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Our motto, <strong className="text-primary">"Foundation is the Future,"</strong> reflects our commitment to building strong educational foundations that prepare children for a lifetime of success.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative" style={{ background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--coral-light)) 50%, hsl(var(--background)) 100%)' }}>
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 font-display font-bold text-primary text-sm mb-2"><Target className="w-4 h-4" />What We Stand For</span>
            <h2 className="font-display font-black text-3xl text-foreground">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc, color }, i) => (
              <div
                key={title}
                className="bg-card rounded-3xl p-7 border border-border hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
