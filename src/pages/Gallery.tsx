import { useState } from 'react';
import { Camera } from 'lucide-react';

const categories = ['All', 'Classrooms', 'Outdoor', 'Events', 'Activities'];

const photos = [
  { src: 'https://images.unsplash.com/photo-1587654780251-5fe13ada3cba?w=600&h=400&fit=crop', alt: 'Children playing', category: 'Outdoor' },
  { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop', alt: 'Classroom learning', category: 'Classrooms' },
  { src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=400&fit=crop', alt: 'Arts and crafts', category: 'Activities' },
  { src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&h=400&fit=crop', alt: 'Story time', category: 'Classrooms' },
  { src: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=600&h=400&fit=crop', alt: 'Outdoor playground', category: 'Outdoor' },
  { src: 'https://images.unsplash.com/photo-1484820540004-14229fe36ca4?w=600&h=400&fit=crop', alt: 'Painting activity', category: 'Activities' },
  { src: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=600&h=400&fit=crop', alt: 'Concert event', category: 'Events' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop', alt: 'Group activity', category: 'Activities' },
  { src: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=600&h=400&fit=crop', alt: 'Sports day', category: 'Events' },
];

const Gallery = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? photos : photos.filter(p => p.category === active);

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-pink/10 to-lavender/10">
        <div className="container-main text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl text-foreground mb-4 animate-fade-in">
            Gallery
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            A glimpse into the joy and learning at Twin Stars
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full font-display font-bold text-sm transition-all
                  ${active === cat
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((photo, i) => (
              <div
                key={photo.alt + i}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-border animate-scale-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                  <Camera className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/60 to-transparent">
                  <p className="text-background font-body font-semibold text-sm">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body py-12">No photos in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;
