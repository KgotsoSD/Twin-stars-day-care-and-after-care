import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'Twin Stars has been a blessing for our family. The teachers are so caring and my daughter has blossomed since enrolling.',
    rating: 5,
  },
  {
    name: 'Thabo K.',
    text: 'Professional, safe, and the children absolutely love going there every day. Highly recommended for any parent.',
    rating: 5,
  },
  {
    name: 'Priya N.',
    text: 'The after-care program is outstanding. My son gets his homework done and has fun too. The best of both worlds!',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-4">
            What Parents Say
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Hear from families who trust us with their little stars
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="font-body text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-foreground">{t.name}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-sunshine" fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
