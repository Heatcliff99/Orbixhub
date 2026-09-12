'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function InteractiveMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Gentle floating rotation
    meshRef.current.rotation.x += 0.002;
    meshRef.current.rotation.y += 0.003;

    // Mouse-follow parallax effect
    const mouseX = state.mouse.x * 0.5;
    const mouseY = state.mouse.y * 0.5;
    
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x,
      mouseX,
      0.05
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y,
      mouseY,
      0.05
    );

    // Scale on hover
    const targetScale = hovered ? 1.2 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        {/* Icosahedron for modern geometric look */}
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={hovered ? '#6366f1' : '#3b82f6'}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#ff6b6b" />
      <Environment preset="city" />
    </>
  );
}

interface Scene3DProps {
  className?: string;
}

export default function Scene3D({ className }: Scene3DProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      className={className}
      dpr={[1, 2]}
    >
      <SceneLighting />
      <InteractiveMesh />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}
