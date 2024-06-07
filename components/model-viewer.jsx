'use client';

import {Canvas, useFrame, useLoader} from '@react-three/fiber';
import {useRef, useEffect} from 'react';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from '@react-three/drei';
import {AnimationMixer} from 'three';

import {useUI} from '@/components/UIContext';

export const ModelViewer = () => {
    return (
        <Canvas
            style={{height: '100%', width: '100%'}}
            camera={{position: [0, 5, 10], rotation: [-0.25, 0, 0], fov: 45, zoom: 2}}
        >
            <EthereumModel/>
            <OrbitControls/>
        </Canvas>
    );
};

export const EthereumModel = () => {
    const {spin, animate, setAnimate} = useUI();
    const myModel = useLoader(GLTFLoader, '/model/scene.gltf');
    const modelRef = useRef(null);
    const mixerRef = useRef(null);

    useEffect(() => {
        if (myModel.animations.length > 0) {
            mixerRef.current = new AnimationMixer(myModel.scene);
            myModel.animations.forEach((clip) => {
                let animationAction = mixerRef.current.clipAction(clip);
                animationAction.repetitions = 1;
                animationAction.play();
            });
        }
    }, [myModel]);

    useEffect(() => {
        if (mixerRef.current && animate) {
            mixerRef.current.time = 0;
            setTimeout(() => {
                setAnimate(false)
            }, 10000)
        }
    }, [animate]);
    useFrame((state, delta) => {
        if (mixerRef.current && animate) {
            mixerRef.current.update(delta / 2.5);
            console.log(mixerRef.current._actions)
        }
        if (modelRef.current && spin) {
            modelRef.current.rotation.y += delta / 8;
        }
    });

    return (
        <>
            <pointLight position={[-10, -10, -10]} color="#48cc90" intensity={5000}/>
            <pointLight position={[10, 10, 10]} color="#36e2e2" intensity={5000}/>
            <primitive object={myModel.scene} ref={modelRef}/>
        </>
    );
};
