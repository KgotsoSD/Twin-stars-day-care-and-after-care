import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What are your operating hours?',
    a: 'We are open Monday to Friday from 6:30 AM to 5:30 PM. We offer a 30-minute grace period for late pickups.',
  },
  {
    q: 'What age groups do you cater for?',
    a: 'We accept children from 6 weeks old up to 12 years. We have dedicated programs for Infants, Toddlers, Preschoolers, and After Care for school-age children.',
  },
  {
    q: 'What qualifications do your teachers have?',
    a: 'All our caregivers hold relevant qualifications in Early Childhood Development (ECD) and are regularly trained in first aid, child safety, and the latest educational methodologies.',
  },
  {
    q: 'Do you provide meals?',
    a: 'Yes, we provide a nutritious breakfast, lunch, and afternoon snack daily. Our menus are balanced and take allergies and dietary requirements into account.',
  },
  {
    q: 'How do I enroll my child?',
    a: 'You can start by visiting our Contact page to schedule a tour. After the visit, we\'ll provide enrollment forms and guide you through the registration process.',
  },
  {
    q: 'What is your discipline policy?',
    a: 'We practice positive discipline, focusing on guidance, redirection, and age-appropriate boundaries. Physical punishment is strictly prohibited.',
  },
  {
    q: 'Is the facility safe and secure?',
    a: 'Absolutely. We have secure perimeter fencing, CCTV monitoring, controlled access, and strict pick-up procedures. Safety is our top priority.',
  },
  {
    q: 'Do you offer holiday programs?',
    a: 'Yes, we run exciting holiday programs during school breaks with themed activities, arts & crafts, sports, and educational outings.',
  },
  {
    q: 'What curriculum do you follow?',
    a: 'We follow a play-based curriculum aligned with the South African National Curriculum Framework for early childhood development, complemented by creative arts, physical activity, and social skills development.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="container-main text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4 animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Find answers to common questions about Twin Stars Day Care
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl border border-border overflow-hidden animate-fade-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <span className="font-display font-bold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <p className="font-body text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
