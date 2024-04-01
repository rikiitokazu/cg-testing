'use client'
import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

import { Canvas } from "@react-three/fiber";
import { ScrollControls } from '@react-three/drei'
import { TestBox } from '../components/student-works/TestBox';
import { Overlay } from '../components/student-works/Overlay';


const StudentWorks = () => {
  return (
    <div>
        <Navbar />

        <section className = "bg-neutral-800">
            <div className = " pt-10 mt-18 text-header">
            <div className = "text-center pt-16 pb-8 md:pt-12 md:pb-10">
                <h1 className = "text-2xl">Class projects and student works</h1>
                <p className = "text-caption">Created using <span className = "text-cyan-100">Maya</span>.</p>
            </div>
            </div>
        </section>

        <section className = "bg-neutral-300 h-screen">
         <Canvas camera = {{
            fov: 75,
            position: [0,4,6]
         }}>
            {/* Lighting Conrols */}
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

            {/* Components affected by scrolling */}
            <ScrollControls pages={3} damping={0.1}>
                <Overlay />
                <TestBox  />
            </ScrollControls>
        </Canvas>
        </section>


      {/* MAY USE LATER <section className="w-full md:w-6/12 px-4 mx-auto">
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
        </section> */}

        <Footer />
      
    </div>
  )
}

export default StudentWorks
