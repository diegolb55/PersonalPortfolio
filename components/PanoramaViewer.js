// PanoramaViewer.js
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';

const PanoramaViewer = () => {
  const containerRef = useRef();
  const [textureLoaded, setTextureLoaded] = useState(false);

  useEffect(() => {
    const loadTexture = () => {
      const textureUrl = '/images/beachy.jpg'; // Replace with your own image URL
      const texture = new TextureLoader().load(textureUrl);
      setTextureLoaded(texture);
    };

    if (containerRef.current) {
      loadTexture();
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100vh' }}>
      {textureLoaded && (
        <Canvas style={{ width: '100%', height: '100%' }}>
          <mesh>
            <sphereGeometry args={[500, 60, 40]} />
            <meshBasicMaterial map={textureLoaded} side={2} />
          </mesh>
          <OrbitControls />
        </Canvas>
      )}
    </div>
  );
};

export default PanoramaViewer;
