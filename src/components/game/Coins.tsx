import { useRef, useState, useEffect, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGameStore } from '@/stores/gameStore';
import * as THREE from 'three';

const LANE_WIDTH = 2.5;
const SPAWN_DISTANCE = -80;
const DESPAWN_DISTANCE = 5;

interface Coin {
  id: number;
  lane: number;
  position: number;
  height: number;
  collected: boolean;
}

export function Coins() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const { gameState, speed, currentLane, isJumping, addCoin, distance } = useGameStore();
  const lastSpawnDistance = useRef(0);
  const coinId = useRef(0);
  
  const spawnCoins = useCallback(() => {
    const lanes = [-1, 0, 1];
    const selectedLane = lanes[Math.floor(Math.random() * lanes.length)];
    const coinCount = Math.floor(Math.random() * 3) + 1;
    const isFloating = Math.random() > 0.7;
    
    const newCoins: Coin[] = [];
    for (let i = 0; i < coinCount; i++) {
      newCoins.push({
        id: coinId.current++,
        lane: selectedLane,
        position: SPAWN_DISTANCE - i * 2,
        height: isFloating ? 2 : 1,
        collected: false,
      });
    }
    
    setCoins(prev => [...prev, ...newCoins]);
  }, []);
  
  // Reset coins when game starts
  useEffect(() => {
    if (gameState === 'playing') {
      setCoins([]);
      lastSpawnDistance.current = 0;
      coinId.current = 0;
    }
  }, [gameState]);
  
  useFrame((_, delta) => {
    if (gameState !== 'playing') return;
    
    // Spawn new coins
    if (distance - lastSpawnDistance.current > 15) {
      spawnCoins();
      lastSpawnDistance.current = distance;
    }
    
    // Update coin positions and check collection
    setCoins(prev => {
      return prev.map(coin => {
        const newPosition = coin.position + speed * delta;
        
        // Collection detection
        if (!coin.collected && newPosition > -1.5 && newPosition < 1 && coin.lane === currentLane) {
          const canCollect = coin.height < 1.5 || isJumping;
          if (canCollect) {
            addCoin();
            return { ...coin, position: newPosition, collected: true };
          }
        }
        
        return { ...coin, position: newPosition };
      }).filter(coin => coin.position < DESPAWN_DISTANCE && !coin.collected);
    });
  });
  
  return (
    <group>
      {coins.map(coin => (
        <CoinMesh key={coin.id} coin={coin} />
      ))}
    </group>
  );
}

function CoinMesh({ coin }: { coin: Coin }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.05;
    }
  });
  
  const x = coin.lane * LANE_WIDTH;
  
  return (
    <group position={[x, coin.height, coin.position]}>
      <mesh ref={meshRef} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.1, 16]} />
        <meshStandardMaterial 
          color="#ffdd00"
          emissive="#ffaa00"
          emissiveIntensity={0.8}
          metalness={1}
          roughness={0.1}
        />
      </mesh>
      <pointLight color="#ffdd00" intensity={1.5} distance={3} />
    </group>
  );
}
