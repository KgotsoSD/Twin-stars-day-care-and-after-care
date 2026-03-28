import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    title: 'Open Day',
    date: 'April 15, 2026',
    time: '9:00 AM – 12:00 PM',
    location: 'Twin Stars Campus',
    desc: 'Come tour our facilities, meet the teachers, and learn about our programs. Light refreshments provided.',
    badge: 'Upcoming',
    badgeColor: 'bg-leaf/10 text-leaf',
  },
  {
    title: 'Easter Egg Hunt',
    date: 'April 5, 2026',
    time: '10:00 AM – 1:00 PM',
    location: 'Twin Stars Garden',
    desc: 'A fun morning of egg hunting, face painting, and Easter crafts for all enrolled children.',
    badge: 'Upcoming',
    badgeColor: 'bg-primary/10 text-primary',
  },
  {
    title: 'Parent Information Evening',
    date: 'May 10, 2026',
    time: '6:00 PM – 7:30 PM',
    location: 'Twin Stars Hall',
    desc: 'An evening to discuss curriculum updates, school readiness, and parenting tips with our education team.',
    badge: 'Upcoming',
    badgeColor: 'bg-secondary/10 text-secondary',
  },
  {
    title: 'Sports Day',
    date: 'June 21, 2026',
    time: '8:30 AM – 12:00 PM',
    location: 'Local Sports Field',
    desc: 'Fun-filled sports activities for all age groups. Parents welcome to cheer and participate!',
    badge: 'Save the Date',
    badgeColor: 'bg-sunshine/10 text-sunshine',
  },
  {
    title: 'Winter Concert',
    date: 'July 18, 2026',
    time: '5:00 PM – 6:30 PM',
    location: 'Twin Stars Hall',
    desc: 'Our children showcase their talents in singing, dancing, and performing arts. A magical evening for the whole family.',
    badge: 'Save the Date',
    badgeColor: 'bg-lavender/10 text-lavender',
  },
];

const Events = () => {
  return (
    <>
      <section className="section-padding bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="container-main text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4 animate-fade-in">
            Events
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Stay up to date with our exciting events and activities
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main space-y-6">
          {events.map((event, i) => (
            <div
              key={event.title}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold font-display ${event.badgeColor}`}>
                      {event.badge}
                    </span>
                  </div>
                  <h2 className="font-display font-extrabold text-xl text-foreground mb-3">{event.title}</h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-4">{event.desc}</p>
                  <div className="flex flex-wrap gap-4 text-sm font-body text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{event.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{event.time}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Events;
