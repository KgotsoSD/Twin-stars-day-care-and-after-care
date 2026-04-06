import { Quote, MessageCircleHeart } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'Twin Stars has been a blessing for our family. The teachers are so caring and my daughter has blossomed since enrolling.',
    rating: 5,
    role: 'Parent of a 3-year-old',
  },
  {
    name: 'Thabo K.',
    text: 'Professional, safe, and the children absolutely love going there every day. Highly recommended for any parent.',
    rating: 5,
    role: 'Parent of a 5-year-old',
  },
  {
    name: 'Priya N.',
    text: 'The after-care program is outstanding. My son gets his homework done and has fun too. The best of both worlds!',
    rating: 5,
    role: 'Parent of an 8-year-old',
  },
];

export function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--teal-light)) 50%, hsl(var(--background)) 100%)' }}>
      {/* Decorative */}
      <div className="absolute top-10 left-8 w-4 h-4 rounded-full bg-primary/20 animate-float" />
      <div className="absolute bottom-10 right-12 w-5 h-5 rounded-full bg-sunshine/25 animate-bounce-gentle" />

      <div className="container-main">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 font-display font-bold text-secondary text-sm mb-2 animate-fade-in">
            <MessageCircleHeart className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            What Parents Say
          </h2>
          <p className="font-body text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: '0.15s' }}>
            Hear from families who trust us with their little stars
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-card rounded-3xl p-8 shadow-sm border border-border hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <p className="font-body text-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div className="border-t border-border pt-4">
                <span className="font-display font-bold text-foreground block">{t.name}</span>
                <span className="font-body text-muted-foreground text-sm">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
