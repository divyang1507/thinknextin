'use client'
import { Homesection } from "./pagesections/Homesection";
import { About } from "./pagesections/About";
import { Services } from "./pagesections/Services";
import { Contact } from "./pagesections/Contact";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function Home() {
  const ref = useRef()
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <>
      <div className="h-fit" ref={ref}>
        <Homesection scrollYProgress={scrollYProgress}/>
        <Services />
        <About />
        <Contact />
      </div>
    </>
  );
}
