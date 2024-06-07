'use client';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';

export function Preload() {
  useLoader(GLTFLoader, '/model/scene.gltf');
  return null;
}
