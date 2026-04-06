export function FloatingShapes() {
  return (
    <>
      {/* Hot air balloon */}
      <div className="absolute top-16 left-8 w-16 h-16 md:w-20 md:h-20 animate-float opacity-60 pointer-events-none" style={{ animationDelay: '0s' }}>
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="32" cy="22" rx="16" ry="18" fill="hsl(var(--teal))" opacity="0.5" />
          <ellipse cx="32" cy="22" rx="10" ry="14" fill="hsl(var(--teal))" opacity="0.3" />
          <line x1="24" y1="38" x2="28" y2="50" stroke="hsl(var(--foreground))" strokeWidth="1" opacity="0.3" />
          <line x1="40" y1="38" x2="36" y2="50" stroke="hsl(var(--foreground))" strokeWidth="1" opacity="0.3" />
          <rect x="27" y="49" width="10" height="6" rx="2" fill="hsl(var(--sunshine))" opacity="0.5" />
        </svg>
      </div>

      {/* Star */}
      <div className="absolute top-1/3 right-12 md:right-24 animate-wiggle opacity-40 pointer-events-none">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="hsl(var(--sunshine))">
          <path d="M16 0l4.9 11.1L32 12.4l-8 7.8 1.9 11L16 25.8 6.1 31.2l1.9-11-8-7.8 11.1-1.3z" />
        </svg>
      </div>

      {/* Bee */}
      <div className="absolute bottom-32 right-8 md:right-16 w-12 h-12 animate-bounce-gentle opacity-50 pointer-events-none" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 48 48" fill="none">
          <ellipse cx="24" cy="28" rx="10" ry="12" fill="hsl(var(--sunshine))" opacity="0.6" />
          <ellipse cx="24" cy="28" rx="10" ry="12" stroke="hsl(var(--foreground))" strokeWidth="1" opacity="0.2" />
          <line x1="14" y1="25" x2="34" y2="25" stroke="hsl(var(--foreground))" strokeWidth="1.5" opacity="0.2" />
          <line x1="14" y1="31" x2="34" y2="31" stroke="hsl(var(--foreground))" strokeWidth="1.5" opacity="0.2" />
          <ellipse cx="20" cy="18" rx="6" ry="4" fill="hsl(var(--teal-light))" opacity="0.4" transform="rotate(-20 20 18)" />
          <ellipse cx="28" cy="18" rx="6" ry="4" fill="hsl(var(--teal-light))" opacity="0.4" transform="rotate(20 28 18)" />
        </svg>
      </div>

      {/* Book */}
      <div className="absolute top-20 right-1/3 hidden md:block animate-float opacity-30 pointer-events-none" style={{ animationDelay: '2s' }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="6" y="8" width="28" height="24" rx="2" fill="hsl(var(--teal))" opacity="0.4" />
          <rect x="8" y="10" width="24" height="20" rx="1" fill="hsl(var(--card))" opacity="0.6" />
          <line x1="20" y1="10" x2="20" y2="30" stroke="hsl(var(--teal))" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      {/* Pencil */}
      <div className="absolute bottom-20 left-1/4 hidden md:block animate-wiggle opacity-30 pointer-events-none" style={{ animationDelay: '0.5s' }}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" transform="rotate(-45)">
          <rect x="14" y="4" width="8" height="24" rx="1" fill="hsl(var(--coral))" opacity="0.4" />
          <polygon points="14,28 22,28 18,36" fill="hsl(var(--sunshine))" opacity="0.5" />
          <rect x="14" y="4" width="8" height="4" fill="hsl(var(--primary))" opacity="0.3" />
        </svg>
      </div>

      {/* Circle dot */}
      <div className="absolute top-1/2 left-16 w-4 h-4 rounded-full bg-primary/20 animate-bounce-gentle pointer-events-none" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-24 left-1/2 w-3 h-3 rounded-full bg-sunshine/30 animate-float pointer-events-none" style={{ animationDelay: '0.8s' }} />
    </>
  );
}
