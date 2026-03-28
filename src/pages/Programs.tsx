import { Baby, Puzzle, GraduationCap, BookOpen, Sun, Check } from 'lucide-react';

const programs = [
  {
    icon: Baby,
    title: 'Infants',
    age: '6 weeks – 12 months',
    desc: 'Tender loving care with focus on sensory development, bonding, and meeting individual needs in a calm, nurturing environment.',
    features: ['Individual care plans', 'Sensory activities', 'Daily reports', 'Flexible feeding schedules'],
    color: 'from-pink/20 to-pink/5 border-pink/30',
    iconBg: 'bg-pink/10 text-pink',
  },
  {
    icon: Puzzle,
    title: 'Toddlers',
    age: '1 – 2 years',
    desc: 'Interactive play-based learning supporting language development, motor skills, and social interaction through guided activities.',
    features: ['Language development', 'Motor skill activities', 'Social play', 'Creative exploration'],
    color: 'from-primary/20 to-primary/5 border-primary/30',
    iconBg: 'bg-primary/10 text-primary',
  },
  {
    icon: GraduationCap,
    title: 'Preschool',
    age: '3 – 5 years',
    desc: 'Structured curriculum preparing children for school with literacy, numeracy, and creative arts in a stimulating environment.',
    features: ['School readiness', 'Literacy & numeracy', 'Creative arts', 'Physical development'],
    color: 'from-leaf/20 to-leaf/5 border-leaf/30',
    iconBg: 'bg-leaf/10 text-leaf',
  },
  {
    icon: BookOpen,
    title: 'After Care',
    age: '6 – 12 years',
    desc: 'Supervised homework time, enrichment activities, and a safe environment for school-age children in the afternoons.',
    features: ['Homework supervision', 'Enrichment activities', 'Safe environment', 'Nutritious snacks'],
    color: 'from-secondary/20 to-secondary/5 border-secondary/30',
    iconBg: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Sun,
    title: 'Holiday Program',
    age: 'All ages',
    desc: 'Fun-filled holiday activities including arts & crafts, sports, educational excursions, and themed weeks.',
    features: ['Arts & crafts', 'Sports & games', 'Educational outings', 'Themed activities'],
    color: 'from-sunshine/20 to-sunshine/5 border-sunshine/30',
    iconBg: 'bg-sunshine/10 text-sunshine',
  },
];

const Programs = () => {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container-main text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4 animate-fade-in">
            Our Programs
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Age-appropriate learning experiences tailored to each developmental stage
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main space-y-8">
          {programs.map((prog, i) => (
            <div
              key={prog.title}
              className={`rounded-2xl bg-gradient-to-r ${prog.color} border p-8 md:p-10 animate-fade-in`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${prog.iconBg} flex items-center justify-center mb-4`}>
                    <prog.icon className="w-7 h-7" />
                  </div>
                  <h2 className="font-display font-extrabold text-2xl text-foreground mb-1">{prog.title}</h2>
                  <p className="font-body font-semibold text-primary mb-4">{prog.age}</p>
                  <p className="font-body text-muted-foreground leading-relaxed">{prog.desc}</p>
                </div>
                <div className="bg-card/80 rounded-xl p-6">
                  <h3 className="font-display font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">What's included</h3>
                  <ul className="space-y-3">
                    {prog.features.map(f => (
                      <li key={f} className="flex items-center gap-3 font-body text-foreground">
                        <Check className="w-5 h-5 text-leaf shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Programs;
