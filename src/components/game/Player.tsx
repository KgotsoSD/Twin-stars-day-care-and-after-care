import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGameStore } from '@/stores/gameStore';
import * as THREE from 'three';

const LANE_WIDTH = 2.5;
const JUMP_HEIGHT = 2.5;
const JUMP_DURATION = 0.5;

export function Player() {
  const meshRef = useRef<THREE.Group>(null);
  const { currentLane, isJumping, land, gameState } = useGameStore();
  
  const jumpProgress = useRef(0);
  const targetX = useRef(0);
  const currentX = useRef(0);
  
  useEffect(() => {
    targetX.current = currentLane * LANE_WIDTH;
  }, [currentLane]);
  
  useFrame((_, delta) => {
    if (!meshRef.current || gameState !== 'playing') return;
    
    // Smooth lane transition
    currentX.current = THREE.MathUtils.lerp(currentX.current, targetX.current, 10 * delta);
    meshRef.current.position.x = currentX.current;
    
    // Jump animation
    if (isJumping) {
      jumpProgress.current += delta / JUMP_DURATION;
      
      if (jumpProgress.current >= 1) {
        jumpProgress.current = 0;
        meshRef.current.position.y = 0.5;
        land();
      } else {
        // Parabolic jump
        const height = Math.sin(jumpProgress.current * Math.PI) * JUMP_HEIGHT;
        meshRef.current.position.y = 0.5 + height;
      }
    }
    
    // Running animation (bobbing)
    const bob = Math.sin(Date.now() * 0.015) * 0.05;
    meshRef.current.rotation.z = bob * 0.2;
  });
  
  return (
    <group ref={meshRef} position={[0, 0.5, 0]}>
      {/* Body */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <boxGeometry args={[0.6, 0.8, 0.4]} />
        <meshStandardMaterial 
          color="#00ffff" 
          emissive="#00ffff"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1, 0]} castShadow>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial 
          color="#ff00ff" 
          emissive="#ff00ff"
          emissiveIntensity={0.5}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>
      
      {/* Visor */}
      <mesh position={[0, 1, 0.2]}>
        <boxGeometry args={[0.4, 0.12, 0.1]} />
        <meshStandardMaterial 
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={1}
        />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.15, -0.2, 0]} castShadow>
        <boxGeometry args={[0.2, 0.5, 0.25]} />
        <meshStandardMaterial color="#333" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0.15, -0.2, 0]} castShadow>
        <boxGeometry args={[0.2, 0.5, 0.25]} />
        <meshStandardMaterial color="#333" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Trail effect */}
      <pointLight position={[0, 0.3, -0.5]} color="#00ffff" intensity={2} distance={3} />
    </group>
  );
}
