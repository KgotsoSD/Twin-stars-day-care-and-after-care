import { Link } from 'react-router-dom';
import { Baby, Puzzle, GraduationCap, BookOpen, ClipboardList } from 'lucide-react';

const programs = [
  {
    icon: Baby,
    title: 'Twin Stars Beginnings',
    subtitle: 'Infant Care',
    age: '1 month - 12 months',
    desc: 'Tender loving care with focus on sensory development, bonding, and meeting individual needs.',
    gradient: 'from-pink-light to-card',
    iconBg: 'bg-pink/15 text-pink',
    borderColor: 'border-pink/20',
    img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=600&fit=crop',
  },
  {
    icon: Puzzle,
    title: 'Twin Stars Sprouts',
    subtitle: 'Toddler Program',
    age: '1 - 2 years',
    desc: 'Interactive play-based learning supporting language, motor skills, and social interaction.',
    gradient: 'from-teal-light to-card',
    iconBg: 'bg-secondary/15 text-secondary',
    borderColor: 'border-secondary/20',
    img: 'https://images.unsplash.com/photo-1544773088-d142e38f5793?auto=format&fit=crop&w=800&h=600&q=80',
  },
  {
    icon: GraduationCap,
    title: 'Twin Stars Pathways',
    subtitle: 'Preschool Program',
    age: '2 - 4 years',
    desc: 'Structured curriculum preparing children for school with literacy, numeracy, and creative arts.',
    gradient: 'from-sunshine-light to-card',
    iconBg: 'bg-sunshine/15 text-accent-foreground',
    borderColor: 'border-sunshine/20',
    img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop',
  },
  {
    icon: BookOpen,
    title: 'Twin Stars Achievers',
    subtitle: 'After Care & Holiday Program',
    age: 'School age',
    desc: 'Homework support, enrichment, computer class (ages 3-15), and a safe space after school, including optional night sleepover where offered.',
    gradient: 'from-leaf-light to-card',
    iconBg: 'bg-leaf/15 text-leaf',
    borderColor: 'border-leaf/20',
    img: 'https://images.unsplash.com/photo-1588072432904-843af37f03ed?auto=format&fit=crop&w=800&h=600&q=80',
  },
];

export function ProgramsPreview() {
  return (
    <section className="section-padding relative">
      {/* Decorative */}
      <div className="absolute top-8 right-12 w-5 h-5 rounded-full bg-primary/15 animate-bounce-gentle" />
      <div className="absolute bottom-16 left-8 w-4 h-4 rounded-full bg-sunshine/20 animate-float" />

      <div className="container-main">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 font-display font-bold text-primary text-sm mb-2 animate-fade-in">
            <ClipboardList className="w-4 h-4" />
            Our Programs
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Programs Designed for Growth
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg animate-fade-in" style={{ animationDelay: '0.15s' }}>
            Age-appropriate learning experiences tailored to each developmental stage
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <Link
              to="/programs"
              key={prog.title}
              className={`group rounded-2xl bg-gradient-to-b ${prog.gradient} border ${prog.borderColor} overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={prog.img}
                  alt={prog.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className={`w-11 h-11 rounded-xl ${prog.iconBg} flex items-center justify-center mb-3 -mt-10 relative z-10 shadow-md border-2 border-card`}>
                  <prog.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-extrabold text-base text-foreground mb-0.5">{prog.title}</h3>
                <p className="text-xs font-body font-semibold text-muted-foreground mb-2">{prog.subtitle}</p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{prog.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-full font-display font-bold hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            View All Programs →
          </Link>
        </div>
      </div>
    </section>
  );
}
