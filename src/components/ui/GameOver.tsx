import { useGameStore } from '@/stores/gameStore';
import { RotateCcw, Home, Trophy, Coins } from 'lucide-react';

export function GameOver() {
  const { gameState, startGame, goToMenu, score, coins, highScore } = useGameStore();
  
  if (gameState !== 'gameOver') return null;
  
  const isNewHighScore = score === highScore && score > 0;
  
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-6">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center animate-slide-up">
        {/* Game Over Title */}
        <h1 className="font-display text-4xl md:text-6xl font-black text-destructive mb-8">
          GAME OVER
        </h1>
        
        {/* New High Score Badge */}
        {isNewHighScore && (
          <div className="bg-accent/20 border border-accent rounded-lg px-4 py-2 mb-6 animate-pulse-neon">
            <span className="font-display text-accent text-glow-yellow">
              🎉 NEW HIGH SCORE! 🎉
            </span>
          </div>
        )}
        
        {/* Stats */}
        <div className="bg-card/80 rounded-xl p-6 mb-8 min-w-[280px]">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-border">
            <span className="font-body text-muted-foreground">Distance</span>
            <span className="font-display text-3xl text-primary text-glow-cyan">
              {score.toLocaleString()}
            </span>
          </div>
          
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-border">
            <span className="font-body text-muted-foreground flex items-center gap-2">
              <Coins className="w-4 h-4 text-accent" />
              Coins
            </span>
            <span className="font-display text-2xl text-accent text-glow-yellow">
              {coins}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-body text-muted-foreground flex items-center gap-2">
              <Trophy className="w-4 h-4 text-secondary" />
              Best
            </span>
            <span className="font-display text-2xl text-secondary text-glow-magenta">
              {highScore.toLocaleString()}
            </span>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={startGame}
            className="btn-neon flex items-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            RETRY
          </button>
          
          <button
            onClick={goToMenu}
            className="btn-neon-secondary flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            MENU
          </button>
        </div>
      </div>
    </div>
  );
}
