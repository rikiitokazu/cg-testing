import Link from "next/link";
import Image from 'next/image'
import cover from "../public/cover.png"
import pfp from "../public/pfp.png"
import Navbar from "./components/navbar";
/* Navbar: Logo (Home) Register, Student Works, Free Teaching Materials, Installations, Login?
   Footer: Terms of Use (all the legal information), Refund/Return, Contact, Socials
*/

// Have Home page act as "About page"
export default function Home() {
  return (
    <main>
      <Navbar />
      {/*About/Introductory Component*/}
      <section className = "bg-gradient-to-b from-slate-400 to-white mx-auto py-20 mt-18">
        <div className = "grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
          <section>
            <h1 className = "text-6xl lg:text-7xl font-bold tracking-tight">
              CG-Online Academy
            </h1>

            <p className = "text-lg mt-4 text-slate-600 max-w-xl">
              Learn 3-D Modeling with Hiroki Itokazu
            </p>
          </section>

          <section>
          <Image
              src={cover}
              width={300}
              height={600}
              className = "border-black border-8"
              alt="logo"
            />
          </section>
        </div>
      </section>

    <section className = "flex flex-wrap justify-center py-6">
      <div className="w-full md:w-4/12 px-4 text-center ">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg md:-mt-32"> 
          <div className="px-4 pt-7 pb-5 flex-auto ">
            <h6 className="text-xl font-semibold">
              Lorem, ipsum.
              </h6>
            <p className="mt-2 mb-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid suscipit odio magni mollitia cum ut.
              </p>
          </div>
        </div>
      </div>
    </section>

    <section className = "mx-5">
        {/*<span className="flex items-center py-3 md:mx-72">
          <span className="h-px flex-1 w-0.5 bg-black"></span>
          <span className="shrink-0 px-6">Meet your instructor</span>
          <span className="h-px flex-1 bg-black"></span>
        </span>*/}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">

      <div className="rounded-lg bg-gray-200">
        <h1 className = "mx-4 pt-5 border-b-4 border-slate-900 xsm:text-xl md:text-3xl font-bold text-black">Hiroki Itokazu</h1>
          <div className = "flex justify-center py-5">
              <Image
                src={pfp}
                width = {500}
                height = {800}
                className = "border-black border-2"
                alt="logo"
              />

          </div>
      </div>

      <div className="rounded-lg bg-gray-200 lg:col-span-2">
        <div className = "mx-10 my-8">
        <h3 className="text-lg/tight font-medium text-gray-900">Title goes here</h3>

        <p className="mt-0.5 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
          nesciunt quas non animi.
        </p>
        </div>
      </div>
    </div>
    </section>

    <section>

        <p>slideshow of pictures</p>
    </section>


    </main>
  );
}
