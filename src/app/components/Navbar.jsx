"use client"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export const Navbar = () => {
  // const [scrollY, setScrollY] = useState(0);
  // const controls = useAnimation();
  
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 300], // Change the 300 value to match your page's scroll range
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']
  );
  const textColor = useTransform(
    scrollY,
    [0, 150], // Same range as background color
    ['rgba(0 , 0, 0, 1)', 'rgba(255, 255, 255, 1)'] // Both white, but you can adjust this
  );
  return (
    <>
      <motion.nav  style={{ backgroundColor }} className="flex fixed items-center justify-between w-full px-8 py-6 backdrop-blur-sm">
        <Link href={'#'} >
          <motion.h1 style={{color: textColor}} >Think Next Innovation</motion.h1>
        </Link>
        <motion.div className="flex justify-between items-center gap-10 text-black" style={{color: textColor}} >
            <Link href={'#'} >Home</Link>
            <Link href={'#'} >Service</Link>
            <Link href={'#'} >About</Link>
            <Link href={'#'} >Contact</Link>
        </motion.div>
      </motion.nav>
    </>
  );
};
