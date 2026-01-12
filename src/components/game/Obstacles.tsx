import { useRef, useState, useEffect, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGameStore } from '@/stores/gameStore';
import * as THREE from 'three';

const LANE_WIDTH = 2.5;
const SPAWN_DISTANCE = -100;
const DESPAWN_DISTANCE = 10;

interface Obstacle {
  id: number;
  lane: number;
  position: number;
  type: 'barrier' | 'spike' | 'wall';
}

export function Obstacles() {
  const groupRef = useRef<THREE.Group>(null);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const { gameState, speed, currentLane, isJumping, endGame, distance } = useGameStore();
  const lastSpawnDistance = useRef(0);
  const obstacleId = useRef(0);
  
  const spawnObstacle = useCallback(() => {
    const lanes = [-1, 0, 1];
    const numObstacles = Math.random() > 0.7 ? 2 : 1;
    const selectedLanes = lanes.sort(() => Math.random() - 0.5).slice(0, numObstacles);
    
    const types: Array<'barrier' | 'spike' | 'wall'> = ['barrier', 'spike', 'wall'];
    
    const newObstacles: Obstacle[] = selectedLanes.map(lane => ({
      id: obstacleId.current++,
      lane,
      position: SPAWN_DISTANCE,
      type: types[Math.floor(Math.random() * types.length)],
    }));
    
    setObstacles(prev => [...prev, ...newObstacles]);
  }, []);
  
  // Reset obstacles when game starts
  useEffect(() => {
    if (gameState === 'playing') {
      setObstacles([]);
      lastSpawnDistance.current = 0;
      obstacleId.current = 0;
    }
  }, [gameState]);
  
  useFrame((_, delta) => {
    if (gameState !== 'playing') return;
    
    // Spawn new obstacles based on distance
    if (distance - lastSpawnDistance.current > 20) {
      spawnObstacle();
      lastSpawnDistance.current = distance;
    }
    
    // Update obstacle positions and check collisions
    setObstacles(prev => {
      const updated = prev.map(obs => ({
        ...obs,
        position: obs.position + speed * delta,
      })).filter(obs => obs.position < DESPAWN_DISTANCE);
      
      // Collision detection
      for (const obs of updated) {
        if (obs.position > -2 && obs.position < 1 && obs.lane === currentLane) {
          // Can jump over barriers
          if (obs.type === 'barrier' && isJumping) continue;
          
          endGame();
          break;
        }
      }
      
      return updated;
    });
  });
  
  return (
    <group ref={groupRef}>
      {obstacles.map(obs => (
        <ObstacleMesh key={obs.id} obstacle={obs} />
      ))}
    </group>
  );
}

function ObstacleMesh({ obstacle }: { obstacle: Obstacle }) {
  const x = obstacle.lane * LANE_WIDTH;
  
  if (obstacle.type === 'barrier') {
    return (
      <group position={[x, 0.4, obstacle.position]}>
        <mesh castShadow>
          <boxGeometry args={[1.8, 0.8, 0.5]} />
          <meshStandardMaterial 
            color="#ff3333"
            emissive="#ff0000"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <pointLight color="#ff0000" intensity={2} distance={4} />
      </group>
    );
  }
  
  if (obstacle.type === 'spike') {
    return (
      <group position={[x, 0, obstacle.position]}>
        <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[0.5, 1.5, 4]} />
          <meshStandardMaterial 
            color="#ff6600"
            emissive="#ff3300"
            emissiveIntensity={0.6}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        <pointLight position={[0, 1, 0]} color="#ff6600" intensity={2} distance={3} />
      </group>
    );
  }
  
  // Wall obstacle
  return (
    <group position={[x, 1, obstacle.position]}>
      <mesh castShadow>
        <boxGeometry args={[2, 2, 0.3]} />
        <meshStandardMaterial 
          color="#8800ff"
          emissive="#6600cc"
          emissiveIntensity={0.4}
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
      <pointLight color="#8800ff" intensity={2} distance={4} />
    </group>
  );
}
