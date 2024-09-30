'use client';

import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function NewModel() {
  const groupRef = useRef<THREE.Group | null>(null);

  // Carregar o novo modelo 3D
  const { scene } = useGLTF('models/smol_ame_in_an_upcycled_terrarium_hololiveen.glb');

  // Centralizar e ajustar escala do modelo ao carregar
  useEffect(() => {
    if (scene) {
      scene.scale.set(2, 2, 2);  // Ajustar a escala do novo modelo
      scene.position.set(0, -1.5, 0);  // Ajustar a posição mais próxima do chão
      scene.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = false;  // Desativar sombras projetadas
          node.receiveShadow = false;  // Desativar sombras recebidas
        }
      });
    }
  }, [scene]);

  // Rotacionar automaticamente o modelo
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;  // Rotaciona o modelo no eixo Y lentamente
    }
  });

  return <group ref={groupRef}><primitive object={scene} /></group>;
}

export default function NewModelScene() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Canvas do novo modelo 3D que será renderizado antes do Hero */}
      <div style={{ width: '100%', height: '50vh', position: 'relative', zIndex: 1 }}>
        <Canvas camera={{ fov: 50, near: 0.1, far: 100, position: [0, 0, 8] }}>
          {/* Luz ambiente suave para melhorar a visibilidade */}
          <ambientLight intensity={0.5} />

          {/* Plano que simula uma sombra sutil e fixa */}
          <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[1.5, 12]} />
            <meshBasicMaterial transparent opacity={0.3} color="black" />
          </mesh>

          <NewModel />  {/* Renderiza o novo modelo 3D */}
          
          <OrbitControls enableZoom={true} maxDistance={30} minDistance={10} /> 
        </Canvas>
      </div>
      
      {/* Hero Section, agora renderizada depois do modelo 3D */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Conteúdo do Hero */}
      </div>
    </div>
  );
}
