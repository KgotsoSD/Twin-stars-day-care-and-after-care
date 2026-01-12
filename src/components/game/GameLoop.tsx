import { useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGameStore } from '@/stores/gameStore';

export function GameLoop() {
  const { gameState, updateDistance, increaseSpeed, distance } = useGameStore();
  
  // Increase speed over time
  useEffect(() => {
    if (gameState !== 'playing') return;
    
    const interval = setInterval(() => {
      increaseSpeed();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [gameState, increaseSpeed]);
  
  // Update distance/score
  useFrame((_, delta) => {
    if (gameState !== 'playing') return;
    updateDistance(delta);
  });
  
  return null;
}
