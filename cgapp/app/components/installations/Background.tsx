'use client'

import React from 'react'

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Scroll, ScrollControls } from '@react-three/drei';

import Mouse from './models/Mouse';
import Computer from "./models/Computer"

import { TextOverlay } from './TextOverlay';
const Background = () => {
  return (
    <>
    <Canvas camera = {{
        fov: 30,
        position: [0,6,8]
        }}>
            <Suspense fallback = {null}>
            <ambientLight intensity={15} />
        <spotLight position={[0,10,0]} angle={0.15} penumbra={1} decay={0} intensity={15} />
        <pointLight position={[0,10,0]} decay={0} intensity={15} />
        <OrbitControls enableZoom = {false} />

                <ScrollControls pages={1.8} damping={0.1}>
                    <Scroll>
                      <group>
                        <Mouse />
                        <Computer />
                      </group>
                    </Scroll>

                    <Scroll html>
                      <TextOverlay />
                    </Scroll>


                </ScrollControls>
            </Suspense>
        </Canvas>


    </>
  )
}

export default Background;
