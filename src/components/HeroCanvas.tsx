"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

// Custom particles component representing orbiting keywords & traffic data
function Particles({ count = 120 }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate particle positions and random speed multipliers
  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Random coordinates in a sphere
      const r = 3 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      spd[i] = 0.2 + Math.random() * 0.8;
    }
    return [pos, spd];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Rotate particles sphere slightly
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = time * 0.02;

    const currentPositions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      // Add subtle breathing motion
      const offset = i * 3;
      const speed = speeds[i];
      currentPositions[offset + 1] += Math.sin(time * speed + i) * 0.002;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#4DA3FF"
        size={0.06}
        sizeAttenuation={true}
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Inter-connected Search Nodes forming a ranking graph
function SearchNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const [nodes, lines] = useMemo(() => {
    const list: THREE.Vector3[] = [];
    const count = 12;
    // Core nodes coordinates
    for (let i = 0; i < count; i++) {
      list.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 4
        )
      );
    }

    const linePoints: THREE.Vector3[] = [];
    // Link nodes that are close to each other
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (list[i].distanceTo(list[j]) < 3.5) {
          linePoints.push(list[i], list[j]);
        }
      }
    }

    return [list, linePoints];
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;
    
    // Smoothly tilt nodes layout based on user cursor position (parallax)
    const targetX = pointer.x * 0.4;
    const targetY = pointer.y * 0.4;
    groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.1;
    groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {/* Node Spheres */}
      {nodes.map((pos, idx) => (
        <mesh key={idx} position={pos}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial
            color={idx % 3 === 0 ? "#0066FF" : idx % 3 === 1 ? "#7DD3FC" : "#0F172A"}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}

      {/* Connection Links */}
      {lines.length > 0 && (
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array(lines.flatMap(p => [p.x, p.y, p.z])), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#0066FF" transparent opacity={0.25} linewidth={1} />
        </lineSegments>
      )}
    </group>
  );
}

export default function HeroCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Particles count={150} />
        <SearchNodes />
      </Canvas>
    </div>
  );
}
