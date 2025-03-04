import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';

const ModelViewer = ({ modelUrl }) => {
  const { scene } = useGLTF(modelUrl);
  const [zoom, setZoom] = useState(1);

  return (
    <Canvas camera={{ position: [0, 0, zoom], fov: 50 }}>
      <ambientLight />
      <spotLight position={[10, 10, 10]} />
      <OrbitControls />
      <primitive object={scene} />
    </Canvas>
  );
};

export default ModelViewer;
