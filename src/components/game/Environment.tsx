import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Environment() {
  const starsRef = useRef<THREE.Points>(null);
  
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0002;
    }
  });
  
  // Generate stars
  const starCount = 500;
  const starPositions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    starPositions[i * 3] = (Math.random() - 0.5) * 200;
    starPositions[i * 3 + 1] = Math.random() * 100 + 20;
    starPositions[i * 3 + 2] = (Math.random() - 0.5) * 200 - 50;
  }
  
  return (
    <group>
      {/* Stars */}
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={starCount}
            array={starPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.5} color="#ffffff" transparent opacity={0.8} />
      </points>
      
      {/* Distant buildings/city silhouette */}
      <group position={[0, 0, -80]}>
        {/* Left side buildings */}
        {[-30, -25, -20, -15].map((x, i) => (
          <mesh key={`l-${i}`} position={[x, (i + 1) * 3, 0]}>
            <boxGeometry args={[4, (i + 1) * 6, 4]} />
            <meshStandardMaterial 
              color="#0a0a15"
              emissive={i % 2 === 0 ? "#00ffff" : "#ff00ff"}
              emissiveIntensity={0.05}
            />
          </mesh>
        ))}
        
        {/* Right side buildings */}
        {[30, 25, 20, 15].map((x, i) => (
          <mesh key={`r-${i}`} position={[x, (i + 1) * 3.5, 0]}>
            <boxGeometry args={[4, (i + 1) * 7, 4]} />
            <meshStandardMaterial 
              color="#0a0a15"
              emissive={i % 2 === 0 ? "#ff00ff" : "#00ffff"}
              emissiveIntensity={0.05}
            />
          </mesh>
        ))}
      </group>
      
      {/* Neon signs in distance */}
      <pointLight position={[-25, 15, -60]} color="#ff00ff" intensity={10} distance={50} />
      <pointLight position={[25, 20, -70]} color="#00ffff" intensity={10} distance={50} />
      <pointLight position={[0, 25, -90]} color="#ffdd00" intensity={8} distance={40} />
    </group>
  );
}
