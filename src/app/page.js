import Image from "next/image";
import { About } from "./components/pages/About";
import { Services } from "./components/pages/Services";
import { Contact } from "./components/pages/Contact";

export default function Home() {
  return (
    <>
      <section id="home" className="h-[100vh] mx-auto flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl">Think IT, Think Next</h1>
          <h2 className="text-3xl md:text-5xl">Expert in IT Solutions</h2>
          <p className="text-center">
            At Think Next Innovation, Transforming ideas into innovative
            solutions. Partner with us to bring your visions to life and stay
            ahead in the digital landscape.
          </p>
        </div>
      </section>
      <Services/>
      <About/>
      <Contact/>
    </>
  );
}
