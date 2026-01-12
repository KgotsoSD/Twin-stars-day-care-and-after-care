import { GameScene } from '@/components/game/GameScene';
import { GameHUD } from '@/components/ui/GameHUD';
import { MainMenu } from '@/components/ui/MainMenu';
import { GameOver } from '@/components/ui/GameOver';
import { useGameControls } from '@/hooks/useGameControls';

const Index = () => {
  useGameControls();
  
  return (
    <div className="fixed inset-0 overflow-hidden bg-background">
      {/* 3D Game Scene */}
      <GameScene />
      
      {/* UI Overlays */}
      <GameHUD />
      <MainMenu />
      <GameOver />
    </div>
  );
};

export default Index;
