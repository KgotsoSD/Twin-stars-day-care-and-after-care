import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const fees = [
  {
    title: 'Infants',
    age: '6 weeks – 12 months',
    price: 'R3,500',
    period: '/month',
    features: ['Full day care (6:30am–5:30pm)', 'Meals & snacks included', 'Individual care plans', 'Daily reports', 'Sensory activities'],
    color: 'border-pink/30',
    badge: '',
  },
  {
    title: 'Toddlers',
    age: '1 – 2 years',
    price: 'R3,000',
    period: '/month',
    features: ['Full day care (6:30am–5:30pm)', 'Meals & snacks included', 'Play-based learning', 'Social development', 'Creative exploration'],
    color: 'border-primary/30',
    badge: '',
  },
  {
    title: 'Preschool',
    age: '3 – 5 years',
    price: 'R2,800',
    period: '/month',
    features: ['Full day care (6:30am–5:30pm)', 'Meals & snacks included', 'School readiness program', 'Literacy & numeracy', 'Creative arts & sports'],
    color: 'border-leaf',
    badge: 'Most Popular',
  },
  {
    title: 'After Care',
    age: '6 – 12 years',
    price: 'R1,500',
    period: '/month',
    features: ['Afternoon care (1:30pm–5:30pm)', 'Afternoon snack', 'Homework supervision', 'Enrichment activities', 'Safe pickup service'],
    color: 'border-secondary/30',
    badge: '',
  },
];

const Fees = () => {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-sunshine/10 to-secondary/10">
        <div className="container-main text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4 animate-fade-in">
            Fees & Pricing
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Affordable, transparent pricing for quality childcare
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fees.map((plan, i) => (
              <div
                key={plan.title}
                className={`relative bg-card rounded-2xl border-2 ${plan.color} p-6 hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-leaf text-white text-xs font-display font-bold rounded-full">
                    {plan.badge}
                  </span>
                )}
                <h3 className="font-display font-extrabold text-xl text-foreground mb-1">{plan.title}</h3>
                <p className="font-body text-sm text-primary font-semibold mb-4">{plan.age}</p>
                <div className="mb-6">
                  <span className="font-display font-black text-3xl text-foreground">{plan.price}</span>
                  <span className="font-body text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                      <Check className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block text-center px-4 py-3 bg-primary/10 text-primary rounded-xl font-display font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-muted rounded-2xl p-8 text-center">
            <h3 className="font-display font-bold text-lg text-foreground mb-2">Registration Fee</h3>
            <p className="font-body text-muted-foreground">
              A once-off registration fee of <strong className="text-foreground">R500</strong> applies for all new enrollments. This includes a welcome pack, stationery, and admin costs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fees;
