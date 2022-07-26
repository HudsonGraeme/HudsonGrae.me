import React, { useState, useEffect, useRef } from 'react';
import { extend, Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Text } from 'troika-three-text';
import * as THREE from 'three';

extend({ Text });

const AnimateCamera = ({ textRef }) => {
  useFrame((state) => {
    state.camera.lookAt(textRef.current?.position || [0, 0, 0]);
    state.camera.position.lerp(new THREE.Vector3(0, 20, 15), 0.1);
    state.camera.updateProjectionMatrix();
  });
  return null;
};

const FirstPage = () => {
  const [isDashVisible, setDashVisible] = useState(false);
  const textRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setDashVisible(!isDashVisible);
    }, 750);
  }, [isDashVisible]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'black',
        position: 'absolute',
        top: 0,
      }}
    >
      <Canvas>
        <AnimateCamera textRef={textRef} />
        <OrbitControls />
        <mesh receiveShadow position={[0, -1, -5]}>
          <planeBufferGeometry attach="geometry" args={[500, 500]} />
          <meshStandardMaterial attach="material" color="white" />
        </mesh>
        <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
          <planeBufferGeometry attach="geometry" args={[500, 500]} />
          <meshPhongMaterial
            attach="material"
            color="white"
            emissive="blue"
            emissiveIntensity={0.02}
            shininess={150}
          />
        </mesh>
        <text
          position={[0, 3, -4.9]}
          text={'HudsonGraeme' + (isDashVisible ? '_' : '')}
          font={'/FiraCode-Bold.woff'}
          fontSize={3}
          anchorX="center"
          anchorY="middle"
          ref={textRef}
        ></text>
        <pointLight
          width={1}
          height={3}
          color={'#6f42f5'}
          intensity={0.2}
          position={[15, 5, 5]}
          lookAt={[0, 0, 0]}
          penumbra={1}
          castShadow
        />
        <pointLight
          width={1}
          height={2}
          color={'#f58442'}
          intensity={0.5}
          position={[-15, 5, 5]}
          lookAt={[0, 0, 0]}
          penumbra={1}
          castShadow
        />
      </Canvas>
    </div>
  );
};

export default FirstPage;
