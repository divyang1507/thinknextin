"use client";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { easeInOut, motion } from "framer-motion";

export const AboutValues = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);
  const handleClick = () => setIsVisible(!isVisible);

  return (
    <>
      <motion.div
        //   className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        // initial={{ y: 0 }}
        // animate={{ y: isVisible ? -10 : 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        layout
        className="flex w-full justify-between py-6 border-b-2 border-black"
      >
        <div className="flex flex-col">
          <h3 className="text-2xl  ">{title}</h3>
          {isVisible && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: easeInOut }}
            >
              {description}
            </motion.p>
          )}
        </div>

        <motion.div
          animate={{
            rotate: isVisible ? 135 : 0,
            backgroundColor: isVisible ? "#000" : "#fff",
            color: isVisible ? "#fff" : "#000",
          }}
          transition={{ duration: 0.3 }}
          className="border-black border-2 h-12 w-12 flex justify-center items-center p-4 rounded-full"
        >
          <FaArrowRight />
        </motion.div>
      </motion.div>
    </>
  );
};
