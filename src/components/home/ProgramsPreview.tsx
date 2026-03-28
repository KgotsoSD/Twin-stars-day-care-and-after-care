import { Link } from 'react-router-dom';
import { Baby, Puzzle, GraduationCap, BookOpen } from 'lucide-react';

const programs = [
  {
    icon: Baby,
    title: 'Infants',
    age: '6 weeks – 12 months',
    desc: 'Tender loving care with focus on sensory development, bonding, and meeting individual needs.',
    color: 'from-pink/20 to-pink/5',
    iconColor: 'text-pink bg-pink/10',
  },
  {
    icon: Puzzle,
    title: 'Toddlers',
    age: '1 – 2 years',
    desc: 'Interactive play-based learning supporting language development, motor skills, and social interaction.',
    color: 'from-primary/20 to-primary/5',
    iconColor: 'text-primary bg-primary/10',
  },
  {
    icon: GraduationCap,
    title: 'Preschool',
    age: '3 – 5 years',
    desc: 'Structured curriculum preparing children for school with literacy, numeracy, and creative arts.',
    color: 'from-leaf/20 to-leaf/5',
    iconColor: 'text-leaf bg-leaf/10',
  },
  {
    icon: BookOpen,
    title: 'After Care',
    age: '6 – 12 years',
    desc: 'Supervised homework time, enrichment activities, and safe environment for school-age children.',
    color: 'from-secondary/20 to-secondary/5',
    iconColor: 'text-secondary bg-secondary/10',
  },
];

export function ProgramsPreview() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-4">
            Our Programs
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Age-appropriate learning experiences tailored to each developmental stage
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <div
              key={prog.title}
              className={`rounded-2xl bg-gradient-to-b ${prog.color} p-6 border border-border hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${prog.iconColor} flex items-center justify-center mb-4`}>
                <prog.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-1">{prog.title}</h3>
              <p className="text-sm font-body font-semibold text-primary mb-3">{prog.age}</p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{prog.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/programs"
            className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-full font-display font-bold hover:opacity-90 transition-opacity"
          >
            View All Programs →
          </Link>
        </div>
      </div>
    </section>
  );
}
