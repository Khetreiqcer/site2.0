'use client'
import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function NewModel() {
  const groupRef = useRef<THREE.Group | null>(null);

  // Carregar o novo modelo 3D
  const { scene } = useGLTF('/models/hollow_knight.glb');  // Atualize o caminho para o modelo

  // Centralizar e ajustar escala do modelo ao carregar
  useEffect(() => {
    if (scene) {
      scene.scale.set(5, 5, 5);  // Ajustar a escala para reduzir o tamanho do modelo
      scene.position.set(0, -1.5, 0);  // Ajustar a posição para centralizar melhor
      scene.traverse((node) => {
        if ((node as THREE.Mesh).isMesh) {
          const mesh = node as THREE.Mesh; // Fazer o type assertion para Mesh
          mesh.castShadow = true;  // Ativar sombras projetadas
          mesh.receiveShadow = true;  // Ativar sombras recebidas
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
    <div style={{ position: 'relative'}}>
      {/* Canvas do novo modelo 3D */}
      <div style={{ width: '100%', height: '50vh', position: 'relative', zIndex: 1 }}>
        <Canvas shadows camera={{ fov: 50, near: 0.1, far: 100, position: [0, 0, 4] }}>
          {/* Luzes para o modelo */}
          <ambientLight intensity={0.5} />  {/* Luz ambiente suave */}
          <directionalLight
            position={[5, 10, 5]}
            intensity={0.6}
            castShadow
          />
          <spotLight
            position={[-10, 20, 20]}
            intensity={0.5}
            angle={0.3}
            penumbra={0.5}
            castShadow
          />
          
          <NewModel />  {/* Renderiza o novo modelo 3D */}
          
          <OrbitControls enableZoom={true} maxDistance={30} minDistance={7} /> 
        </Canvas>
      </div>
    </div>
  );
}
