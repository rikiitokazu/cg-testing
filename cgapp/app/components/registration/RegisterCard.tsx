import React from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from "../../registration/Registration.module.css"

interface RegisterCard {
    borderColor: string;
    picture: StaticImageData;
    courseHeader: string;
    price: string;
    courseDescription:string[];

}
const RegisterCard = ({borderColor, picture, courseHeader, price, courseDescription } : RegisterCard) => {
  return (
    <div className = "text-white flex justify-center py-10">
        <section className = {`bg-gradient-to-br shadow-md shadow-gray-900 from-slate-600 to-slate-900 grid grid-cols-3 w-4/6 ${styles.borderEdge} rounded-lg ${borderColor}`}>
          <div className = "p-3">
          <Image
              src={picture}
              width={330}
              height={330}
              className = "border-black border-2 roudned-lg"
              alt="logo"
            />
          </div>
          <div className = "relative col-span-2">
            <div className = "flex justify-between pt-3 ps-3 pe-3 pb-1">
              <h1 className = "font-bold text-header text-lg lg:text-2xl border-b-2 border-neutral-400">{courseHeader}</h1>
              <h1 className = "text-green-300  text-md lg:text-xl tracking-wider">Price: {price}</h1>
            </div>
            <p className = "text-header text-md font-bold ps-3">Duration: XX - XX</p>
            <ul className = "list-disc li ps-6">
            {courseDescription && courseDescription.map((item: string, index: number) => (
                <li key={index}>
                    {item}
                </li>
                ))}
            </ul>
            <div className = "flex justify-end items-end">
              <div className = "p-5">
                <button className="btn btn-neutral border-cyan-100 btn-xsm sm:btn-sm lg:btn-md text-header">Register</button>
              </div>
            </div>
            
          </div>
          <div>
            
          </div>
        </section>
      </div>
  )
}

export default RegisterCard
