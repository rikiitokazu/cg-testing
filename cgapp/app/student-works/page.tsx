'use client'
import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

// For right now, just using 3 images for demonstration, but will include more once we get them
import image1 from "../../public/slideshow/image (1).jpg"
import image2 from "../../public/slideshow/image4.png"
import image3 from "../../public/slideshow/image (3).jpg"

import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Stats, OrbitControls } from '@react-three/drei'
import { useRef } from 'react';
import * as THREE from 'three';
import { Mesh } from 'three';

function Box() {
    const boxRef = useRef<Mesh>(null!);

    useFrame(() => {
        boxRef.current.rotation.y += 0.01;
    })

    useThree(({ camera }) => {
        camera.rotation.set(THREE.MathUtils.degToRad(-8), 0, 0);
      });
    return (
        <mesh ref = {boxRef}>
            <boxGeometry args={[3,3,3]} />
            <meshStandardMaterial color="grey" />
        </mesh>
    );
}

const StudentWorks = () => {
  return (
    <div>
        <Navbar />
        <section className = "bg-neutral-800">
        <div className = " py-20 mt-18 text-header">
        <div className = "text-center pt-16 pb-8 md:pt-12 md:pb-10">
            <h1 className = "text-2xl">Class projects and student works</h1>
            <p className = "text-caption">Created using <span className = "text-cyan-100">Maya</span>.</p>
        </div>
        </div>
        </section>

        <section className = "bg-neutral-300">
         <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <Box />
                <OrbitControls />
        </Canvas>

        </section>


        <section className="w-full md:w-6/12 px-4 mx-auto">
        <div className="justify-center flex flex-wrap relative">
            <div className="my-4 w-full lg:w-6/12 px-4">
            <div className="bg-sky-500 shadow-lg rounded-lg text-center p-8">
                <Image
                src={image3}
                className = "border-black border-4 roudned-lg"
                alt="logo"
                />
            </div>
            <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
            <Image
                src={image3}
                className = "border-black border-4 roudned-lg"
                alt="logo"
                />
            </div>
            </div>
        
            <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
            <div className="bg-orange-500 shadow-lg rounded-lg text-center p-8">
            <Image
                src={image3}
                className = "border-black border-4 roudned-lg"
                alt="logo"
                />
            </div>
            <div className="bg-red-600 shadow-lg rounded-lg text-center p-8 mt-8">
            <Image
                src={image3}
                className = "border-black border-4 roudned-lg"
                alt="logo"
                />
            </div>
            </div>
        </div>
        </section>

        <Footer />
      
    </div>
  )
}

export default StudentWorks
