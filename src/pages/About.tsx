import { BookOpen, Users, Sparkles, Heart, Shield, Award } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Safety', desc: 'A secure, supervised environment where children are protected at all times.' },
  { icon: Heart, title: 'Respect', desc: 'Every child, family, and staff member is treated with dignity and kindness.' },
  { icon: Sparkles, title: 'Creativity', desc: 'We foster imagination through art, music, play, and exploration.' },
  { icon: Users, title: 'Inclusivity', desc: 'We welcome families from all backgrounds and cultures.' },
  { icon: BookOpen, title: 'Learning', desc: 'Play-based education that builds a strong foundation for lifelong learning.' },
  { icon: Award, title: 'Excellence', desc: 'We strive for the highest standards in everything we do.' },
];

const About = () => {
  return (
    <>
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container-main text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4 animate-fade-in">
            About Us
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Learn about our journey, mission, and the passionate team behind Twin Stars Day Care & After Care.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-main grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <img src="/images/logo.jpg" alt="Twin Stars" className="w-full max-w-sm mx-auto drop-shadow-xl" />
          </div>
          <div className="animate-fade-in-right">
            <h2 className="font-display font-extrabold text-3xl text-foreground mb-6">Our Story</h2>
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
      <section className="section-padding bg-card">
        <div className="container-main">
          <h2 className="font-display font-extrabold text-3xl text-foreground text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
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
