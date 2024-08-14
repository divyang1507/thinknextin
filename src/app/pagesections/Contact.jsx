"use client";
import { motion, useScroll } from "framer-motion";
import React from "react";

export const Contact = () => {
  return (
    <>
      <motion.section id="contact" className="md:mx-16 mx-4 mt-16">
        <h2 className="text-center text-5xl mb-8 ">Contact Us</h2>
        <div className="flex md:flex-row flex-col gap-16">
          <div className="text-justify bg-black text-white p-8 rounded-3xl flex-1">
            <h4 className="text-3xl mb-8">Get in Touch</h4>
            <p className="text-xl mt-4">Email: info@thinknextinnovation.com</p>
            <p className="text-xl mt-4">Phone: +91 999 999 999</p>
            <p className="text-xl mt-4">Location: Ahmedabad, Gujarat, India</p>
          </div>
          <div className="flex-1">
            <form action="" className="flex flex-col gap-7 ">
              <input className="border-b-2 border-black outline outline-0 focus:outline-0" type="text" />
              <input className="border-b-2 border-black outline outline-0 focus:outline-0" type="text" />
              <textarea className="border-b-2 border-black outline outline-0 focus:outline-0 h-24" type="text" />
              <button>Contact us</button>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
};
