import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Expic from "../../public/cover.png";

import styles from "./Registration.module.css"

// For right now, don't focus on add to cart feature, just add a register button
// fix background
const Registration = () => {
  return (
    <div className = "bg-neutral-900">
      <Navbar />
        <section className = "bg-neutral-800 py-20 mt-18">
          <div className = "mt-10 text-center">
            <h1 className = "text-header text-md lg:text-lg">Register for a course</h1>
            <p className = "text-header font-bold text-xl md:text-3xl">Choose from <span className = "text-cyan-100">6</span> available.</p>
            <p className = "text-subtext text-md lg:text-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quis.</p>
          </div>
        </section>


      <div className = "text-white flex justify-center ">
        <section className = {`bg-slate-600 grid grid-cols-3 w-4/6 ${styles.borderEdge} rounded-lg border-blue-900`}>
          <div className = "p-3">
          <Image
              src={Expic}
              width={330}
              height={330}
              className = "border-black border-2 roudned-lg"
              alt="logo"
            />
          </div>
          <div className = "relative col-span-2">
            <div className = "flex justify-between p-3">
              <h1 className = "font-bold text-header text-lg lg:text-2xl border-b-2 border-neutral-400">Course 1: Lorem ipsum dolor sit.</h1>
              <h1 className = "text-green-300  text-md lg:text-xl tracking-wider">Price: $100.00</h1>
            </div>
            <ul className = "list-disc li ps-6">
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
            </ul>
            <div className = {styles.register}>
               <button className="btn btn-neutral btn-sm lg:btn-md text-header">Register</button>
            </div>
            
          </div>
          <div>
            
          </div>
        </section>
      </div>


      <Footer />
    </div>
  )
}

export default Registration
