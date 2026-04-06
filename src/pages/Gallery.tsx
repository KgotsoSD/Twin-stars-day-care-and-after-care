import { useState } from 'react';
import { Camera, X } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';

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
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = active === 'All' ? photos : photos.filter(p => p.category === active);

  return (
    <>
      <PageHeader
        title="Moments to Remember"
        subtitle="A glimpse into the joy and learning at Twin Stars"
      />

      <section className="section-padding">
        <div className="container-main">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full font-display font-bold text-sm transition-all
                  ${active === cat
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'bg-card text-muted-foreground border border-border hover:border-primary hover:text-primary'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {filtered.map((photo, i) => (
              <button
                key={photo.alt + i}
                onClick={() => setLightbox(i)}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-border animate-scale-in focus:outline-none focus:ring-2 focus:ring-primary"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                  <Camera className="w-8 h-8 text-card opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/50 to-transparent">
                  <p className="text-card font-body font-bold text-sm">{photo.alt}</p>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body py-12">No photos in this category yet.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-card hover:text-primary transition-colors" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <img
            src={filtered[lightbox]?.src}
            alt={filtered[lightbox]?.alt}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
