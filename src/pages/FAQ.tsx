import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';

const faqs = [
  {
    q: 'What are your operating hours?',
    a: 'Monday to Friday: 6:00 AM - 6:00 PM. Saturday: 6:30 AM - 6:00 PM. We are open January through December and closed on public holidays.',
  },
  {
    q: 'What age groups do you cater for?',
    a: 'Programs are designed for babies from 1 month through 12 months, toddlers (1-2 years), and preschoolers (2-4 years), as well as after care with homework support for school-age children.',
  },
  { q: 'What qualifications do your teachers have?', a: 'All our caregivers hold relevant qualifications in Early Childhood Development (ECD) and are regularly trained in first aid, child safety, and the latest educational methodologies.' },
  { q: 'Do you provide meals?', a: 'Yes, we provide a nutritious breakfast, lunch, and afternoon snack daily. Our menus are balanced and take allergies and dietary requirements into account.' },
  { q: 'How do I enroll my child?', a: "You can start by visiting our Contact page to schedule a tour. After the visit, we'll provide enrollment forms and guide you through the registration process." },
  { q: 'What is your discipline policy?', a: 'We practice positive discipline, focusing on guidance, redirection, and age-appropriate boundaries. Physical punishment is strictly prohibited.' },
  { q: 'Is the facility safe and secure?', a: 'Absolutely. We have secure perimeter fencing, CCTV monitoring, controlled access, and strict pick-up procedures. Safety is our top priority.' },
  { q: 'Do you offer holiday programs?', a: 'Yes, we run exciting holiday programs during school breaks with themed activities, arts & crafts, sports, and educational outings.' },
  { q: 'What curriculum do you follow?', a: 'We follow a play-based curriculum aligned with the South African National Curriculum Framework for early childhood development, complemented by creative arts, physical activity, and social skills development.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Twin Stars Day Care"
      />

      <section className="section-padding">
        <div className="container-main max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-card rounded-2xl border overflow-hidden animate-fade-in transition-all ${openIndex === i ? 'border-primary/30 shadow-md' : 'border-border'}`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                >
                  <span className={`font-display font-bold pr-4 transition-colors ${openIndex === i ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${openIndex === i ? 'bg-primary text-primary-foreground rotate-180' : 'bg-muted text-muted-foreground'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {openIndex === i && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 animate-fade-in">
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
