export function WavyDivider({ color = 'hsl(var(--background))', flip = false, className = '' }: { color?: string; flip?: boolean; className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[60px] lg:h-[80px]"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function CloudDivider({ color = 'hsl(var(--background))', className = '' }: { color?: string; className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-[50px] md:h-[70px] lg:h-[100px]"
      >
        <path
          d="M0,100 L0,60 Q120,20 240,50 Q360,80 480,40 Q600,0 720,30 Q840,60 960,25 Q1080,0 1200,40 Q1320,70 1440,50 L1440,100 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
