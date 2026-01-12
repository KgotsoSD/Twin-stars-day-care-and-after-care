import { useGameStore } from '@/stores/gameStore';
import { Play, Trophy, Volume2 } from 'lucide-react';

export function MainMenu() {
  const { gameState, startGame, highScore } = useGameStore();
  
  if (gameState !== 'menu') return null;
  
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="font-display text-5xl md:text-7xl font-black text-primary text-glow-cyan mb-2 animate-pulse-glow">
          NEON
        </h1>
        <h2 className="font-display text-4xl md:text-6xl font-black text-secondary text-glow-magenta mb-8">
          RUNNER
        </h2>
        
        {/* Subtitle */}
        <p className="font-body text-lg text-muted-foreground mb-12 max-w-xs">
          Swipe to dodge obstacles.<br />Collect coins. Run forever.
        </p>
        
        {/* Play Button */}
        <button
          onClick={startGame}
          className="btn-neon flex items-center gap-3 mb-8"
        >
          <Play className="w-6 h-6" fill="currentColor" />
          PLAY
        </button>
        
        {/* High Score */}
        {highScore > 0 && (
          <div className="flex items-center gap-2 text-accent font-display text-xl">
            <Trophy className="w-5 h-5" />
            <span className="text-glow-yellow">{highScore.toLocaleString()}</span>
          </div>
        )}
        
        {/* Controls hint */}
        <div className="mt-12 text-muted-foreground text-sm font-body">
          <p className="mb-1">📱 Swipe left/right to move</p>
          <p>📱 Swipe up to jump</p>
          <p className="mt-3 opacity-60">⌨️ Arrow keys or WASD</p>
        </div>
      </div>
    </div>
  );
}
