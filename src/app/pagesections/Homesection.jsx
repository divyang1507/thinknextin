'use client'
import {motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const Homesection = ({scrollYProgress}) => {
  // const ref = useRef()
  // const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <>
      <motion.section
        id="home"
        style={{scale}}
        className="h-[100vh] mx-auto flex justify-center items-center text-white -z-0"
      >
        <Image
          className="brightness-50 w-screen h-screen absolute -z-10"
          src="/ITimage.jpg"
          fill={true}
          alt="heroimage"
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-6xl">Think IT, Think Next</h1>
          <h2 className="text-3xl md:text-5xl">Expert in IT Solutions</h2>
          <p className="text-center">
            At Think Next Innovation, Transforming ideas into innovative
            solutions. Partner with us to bring your visions to life and stay
            ahead in the digital landscape.
          </p>
        </div>
      </motion.section>
    </>
  );
};
