import { Baby, Puzzle, GraduationCap, BookOpen, Sun, Check } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';

const programs = [
  {
    icon: Baby,
    title: 'Twin Stars Beginnings',
    subtitle: 'Infant Care',
    age: '1 month - 12 months',
    desc: 'Tender loving care with focus on sensory development, bonding, and meeting individual needs in a calm, nurturing environment.',
    features: ['Individual care plans', 'Sensory activities', 'Daily reports', 'Flexible feeding schedules'],
    gradient: 'from-pink-light to-card',
    iconBg: 'bg-pink/15 text-pink',
    borderColor: 'border-pink/20',
  },
  {
    icon: Puzzle,
    title: 'Twin Stars Sprouts',
    subtitle: 'Toddler Program',
    age: '1 - 2 years',
    desc: 'Interactive play-based learning supporting language development, motor skills, and social interaction through guided activities.',
    features: ['Language development', 'Motor skill activities', 'Social play', 'Creative exploration'],
    gradient: 'from-teal-light to-card',
    iconBg: 'bg-secondary/15 text-secondary',
    borderColor: 'border-secondary/20',
  },
  {
    icon: GraduationCap,
    title: 'Twin Stars Pathways',
    subtitle: 'Preschool Program',
    age: '2 - 4 years',
    desc: 'Structured curriculum preparing children for school with literacy, numeracy, and creative arts in a stimulating environment.',
    features: ['School readiness', 'Literacy & numeracy', 'Creative arts', 'Physical development'],
    gradient: 'from-sunshine-light to-card',
    iconBg: 'bg-sunshine/15 text-accent-foreground',
    borderColor: 'border-sunshine/20',
  },
  {
    icon: BookOpen,
    title: 'Twin Stars Achievers',
    subtitle: 'After Care',
    age: 'School age (after care)',
    desc: 'Homework assistance, enrichment, and supervised care after school, including computer class for ages 3-15 and night sleepover options where available.',
    features: ['Homework assistance', 'Computer class (ages 3-15 years)', 'Enrichment activities', 'Night sleepover (where offered)', 'Safe, nurturing environment'],
    gradient: 'from-leaf-light to-card',
    iconBg: 'bg-leaf/15 text-leaf',
    borderColor: 'border-leaf/20',
  },
  {
    icon: Sun,
    title: 'Twin Stars Adventures',
    subtitle: 'Holiday Program',
    age: 'All ages',
    desc: 'Fun-filled holiday activities including arts & crafts, sports, educational excursions, and themed weeks.',
    features: ['Arts & crafts', 'Sports & games', 'Educational outings', 'Themed activities'],
    gradient: 'from-coral-light to-card',
    iconBg: 'bg-primary/15 text-primary',
    borderColor: 'border-primary/20',
  },
];

const Programs = () => {
  return (
    <>
      <PageHeader
        title="Our Programs"
        subtitle="Age-appropriate learning experiences tailored to each developmental stage"
      />

      <section className="section-padding">
        <div className="container-main space-y-8">
          {programs.map((prog, i) => (
            <div
              key={prog.title}
              className={`rounded-3xl bg-gradient-to-r ${prog.gradient} border ${prog.borderColor} p-8 md:p-10 animate-fade-in hover:shadow-lg transition-all`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${prog.iconBg} flex items-center justify-center mb-4`}>
                    <prog.icon className="w-7 h-7" />
                  </div>
                  <h2 className="font-display font-black text-2xl text-foreground mb-0.5">{prog.title}</h2>
                  <p className="font-body font-bold text-sm text-muted-foreground mb-1">{prog.subtitle}</p>
                  <p className="font-body font-semibold text-primary text-sm mb-4">{prog.age}</p>
                  <p className="font-body text-muted-foreground leading-relaxed">{prog.desc}</p>
                </div>
                <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                  <h3 className="font-display font-bold text-xs uppercase tracking-wider text-muted-foreground mb-4">What is included</h3>
                  <ul className="space-y-3">
                    {prog.features.map(f => (
                      <li key={f} className="flex items-center gap-3 font-body text-foreground">
                        <div className="w-5 h-5 rounded-full bg-leaf/15 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-leaf" />
                        </div>
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
