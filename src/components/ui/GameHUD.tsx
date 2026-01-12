import { useGameStore } from '@/stores/gameStore';
import { Coins } from 'lucide-react';

export function GameHUD() {
  const { score, coins, gameState } = useGameStore();
  
  if (gameState !== 'playing') return null;
  
  return (
    <div className="game-hud">
      <div className="flex flex-col gap-2">
        <div className="score-display">
          {score.toLocaleString()}
        </div>
        <div className="text-sm text-muted-foreground font-body uppercase tracking-wider">
          Distance
        </div>
      </div>
      
      <div className="flex flex-col items-end gap-2">
        <div className="coin-display flex items-center gap-2">
          <Coins className="w-6 h-6" />
          {coins}
        </div>
      </div>
    </div>
  );
}
