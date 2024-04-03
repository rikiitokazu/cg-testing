'use client'

import React from 'react'

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Scroll, ScrollControls } from '@react-three/drei';

import Mouse from './Mouse';
import Computer from "./Computer"
const Models = () => {
  return (
    <div>
    <Canvas camera = {{
        fov: 10,
        position: [0,6,8]
        }}>
            <Suspense fallback = {null}>
            <ambientLight intensity={15} />
        <spotLight position={[0,10,0]} angle={0.15} penumbra={1} decay={0} intensity={15} />
        <pointLight position={[0,10,0]} decay={0} intensity={15} />
        <OrbitControls enableZoom = {false} />

                <ScrollControls pages={3} damping={0.1}>
                    <Scroll>
                    <Mouse />
                    <Computer />
                    </Scroll>


                </ScrollControls>
            </Suspense>
        </Canvas>


    </div>
  )
}

export default Models
