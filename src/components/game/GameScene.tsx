import { Canvas } from '@react-three/fiber';
import { Player } from './Player';
import { Track } from './Track';
import { Obstacles } from './Obstacles';
import { Coins } from './Coins';
import { Environment } from './Environment';
import { GameLoop } from './GameLoop';
import { useGameStore } from '@/stores/gameStore';

export function GameScene() {
  const { gameState } = useGameStore();
  
  return (
    <Canvas
      shadows
      camera={{ position: [0, 5, 8], fov: 60 }}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%',
        touchAction: 'none',
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      
      {/* Fog for depth */}
      <fog attach="fog" args={['#0a0a15', 30, 100]} />
      
      {/* Game Elements */}
      <Environment />
      <Track />
      
      {gameState !== 'menu' && (
        <>
          <Player />
          <Obstacles />
          <Coins />
          <GameLoop />
        </>
      )}
    </Canvas>
  );
}
