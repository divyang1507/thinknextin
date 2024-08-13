'use client'
import { motion, useScroll } from 'framer-motion';
import React from 'react'

export const Contact = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
         <motion.section style={{ scale: scrollYProgress }} id="contact" className='mx-16 mt-16'>
            <h2 className='text-center text-5xl mb-8 h-[100vh] bg-red-600'>
                Contact Us
            </h2>
            <div>

            </div>
         </motion.section>
    </>
  )
}
