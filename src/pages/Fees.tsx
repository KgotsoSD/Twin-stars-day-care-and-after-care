import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '@/components/shared/PageHeader';

const fees = [
  {
    title: 'Beginnings',
    subtitle: 'Infant Care',
    age: '6 weeks – 12 months',
    price: 'R3,500',
    period: '/month',
    features: ['Full day care (6:30am–5:30pm)', 'Meals & snacks included', 'Individual care plans', 'Daily reports', 'Sensory activities'],
    borderColor: 'border-pink/30',
    iconBg: 'bg-pink/10',
    badge: '',
  },
  {
    title: 'Sprouts',
    subtitle: 'Toddler Program',
    age: '1 – 2 years',
    price: 'R3,000',
    period: '/month',
    features: ['Full day care (6:30am–5:30pm)', 'Meals & snacks included', 'Play-based learning', 'Social development', 'Creative exploration'],
    borderColor: 'border-secondary/30',
    iconBg: 'bg-secondary/10',
    badge: '',
  },
  {
    title: 'Pathways',
    subtitle: 'Preschool',
    age: '3 – 5 years',
    price: 'R2,800',
    period: '/month',
    features: ['Full day care (6:30am–5:30pm)', 'Meals & snacks included', 'School readiness program', 'Literacy & numeracy', 'Creative arts & sports'],
    borderColor: 'border-primary',
    iconBg: 'bg-primary/10',
    badge: 'Most Popular',
  },
  {
    title: 'Achievers',
    subtitle: 'After Care',
    age: '6 – 12 years',
    price: 'R1,500',
    period: '/month',
    features: ['Afternoon care (1:30pm–5:30pm)', 'Afternoon snack', 'Homework supervision', 'Enrichment activities', 'Safe pickup service'],
    borderColor: 'border-leaf/30',
    iconBg: 'bg-leaf/10',
    badge: '',
  },
];

const Fees = () => {
  return (
    <>
      <PageHeader
        title="Fees & Pricing"
        subtitle="Affordable, transparent pricing for quality childcare"
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fees.map((plan, i) => (
              <div
                key={plan.title}
                className={`relative bg-card rounded-3xl border-2 ${plan.borderColor} p-7 hover:shadow-xl transition-all hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-display font-bold rounded-full shadow-md">
                    {plan.badge}
                  </span>
                )}
                <h3 className="font-display font-black text-xl text-foreground mb-0.5">{plan.title}</h3>
                <p className="font-body text-muted-foreground text-xs font-semibold mb-1">{plan.subtitle}</p>
                <p className="font-body text-sm text-primary font-bold mb-5">{plan.age}</p>
                <div className="mb-6">
                  <span className="font-display font-black text-3xl text-foreground">{plan.price}</span>
                  <span className="font-body text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-7">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-body text-muted-foreground">
                      <div className="w-4 h-4 rounded-full bg-leaf/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-leaf" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block text-center px-4 py-3 bg-primary/10 text-primary rounded-xl font-display font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-14 bg-card rounded-3xl p-8 md:p-10 text-center border border-border shadow-sm">
            <h3 className="font-display font-bold text-lg text-foreground mb-3">Registration Fee</h3>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              A once-off registration fee of <strong className="text-foreground">R500</strong> applies for all new enrollments. This includes a welcome pack, stationery, and admin costs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fees;
