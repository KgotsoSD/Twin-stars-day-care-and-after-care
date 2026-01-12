import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGameStore } from '@/stores/gameStore';
import * as THREE from 'three';

const TRACK_LENGTH = 200;
const LANE_WIDTH = 2.5;

export function Track() {
  const trackRef = useRef<THREE.Group>(null);
  const { gameState, speed } = useGameStore();
  
  // Create grid lines for the track
  const gridLines = useMemo(() => {
    const lines: JSX.Element[] = [];
    
    // Horizontal lines (across the track)
    for (let i = 0; i < TRACK_LENGTH / 4; i++) {
      lines.push(
        <mesh key={`h-${i}`} position={[0, 0.01, -i * 4]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[8, 0.1]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.3} />
        </mesh>
      );
    }
    
    // Lane dividers
    for (let lane = -1; lane <= 1; lane += 2) {
      for (let i = 0; i < TRACK_LENGTH / 2; i++) {
        lines.push(
          <mesh key={`v-${lane}-${i}`} position={[lane * LANE_WIDTH / 2 + LANE_WIDTH / 4, 0.01, -i * 2 - 1]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.1, 1]} />
            <meshBasicMaterial color="#ff00ff" transparent opacity={0.4} />
          </mesh>
        );
      }
    }
    
    return lines;
  }, []);
  
  useFrame((_, delta) => {
    if (!trackRef.current || gameState !== 'playing') return;
    
    // Move grid lines towards player
    trackRef.current.children.forEach((child) => {
      child.position.z += speed * delta;
      if (child.position.z > 10) {
        child.position.z -= TRACK_LENGTH;
      }
    });
  });
  
  return (
    <group>
      {/* Main track floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -TRACK_LENGTH / 2]} receiveShadow>
        <planeGeometry args={[8, TRACK_LENGTH]} />
        <meshStandardMaterial 
          color="#0a0a15"
          metalness={0.9}
          roughness={0.4}
        />
      </mesh>
      
      {/* Side walls */}
      <mesh position={[-4.2, 2, -TRACK_LENGTH / 2]}>
        <boxGeometry args={[0.4, 4, TRACK_LENGTH]} />
        <meshStandardMaterial 
          color="#1a1a2e"
          emissive="#ff00ff"
          emissiveIntensity={0.1}
        />
      </mesh>
      <mesh position={[4.2, 2, -TRACK_LENGTH / 2]}>
        <boxGeometry args={[0.4, 4, TRACK_LENGTH]} />
        <meshStandardMaterial 
          color="#1a1a2e"
          emissive="#00ffff"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Animated grid */}
      <group ref={trackRef}>
        {gridLines}
      </group>
      
      {/* Ambient track lights */}
      <pointLight position={[-4, 3, -20]} color="#ff00ff" intensity={3} distance={15} />
      <pointLight position={[4, 3, -40]} color="#00ffff" intensity={3} distance={15} />
      <pointLight position={[-4, 3, -60]} color="#ff00ff" intensity={3} distance={15} />
      <pointLight position={[4, 3, -80]} color="#00ffff" intensity={3} distance={15} />
    </group>
  );
}
