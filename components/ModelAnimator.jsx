import { useUI } from '@/components/UIContext';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect, useRef } from 'react';
import { AnimationMixer, LoopOnce } from 'three';

export const ModelAnimator = () => {
  const { spin, animate, setAnimate } = useUI();
  const gltf = useLoader(GLTFLoader, '/model/scene.gltf');
  const modelRef = useRef(null);
  const mixerRef = useRef(null);

  useEffect(() => {
    if (gltf.animations.length > 0) {
      mixerRef.current = new AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => {
        let animationAction = mixerRef.current.clipAction(clip);
        animationAction.loop = LoopOnce; // Set animation to play only once
        animationAction.clampWhenFinished = true; // Stop the animation when it finishes
        animationAction.play();
      });
    }
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [gltf]);

  useFrame((state, delta) => {
    if (mixerRef.current && animate) {
      mixerRef.current.update(delta / 2);
      // Check if the animation is finished
      const actions = mixerRef.current._actions;
      if (actions.every((action) => action.paused)) {
        setAnimate(false);
        actions.forEach((action) => action.reset());
      }
    }
    if (modelRef.current && spin) {
      modelRef.current.rotation.y += delta / 20;
    }
  });

  const light1 = '#48cc90';
  const light2 = '#36e2e2';
  return (
    <>
      {/*
      <pointLight position={[10, 10, 10]} color="#ffffff" intensity={2500} />
*/}
      <pointLight position={[-10, -10, -10]} color="#ffffff" intensity={1200} />
      <ambientLight intensity={0.05} />
      <directionalLight
        position={[50, 100, 7.5]}
        intensity={4}
        castShadow={true}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      >
        {/*<orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />*/}
      </directionalLight>
      <primitive object={gltf.scene} ref={modelRef} />
    </>
  );
};
