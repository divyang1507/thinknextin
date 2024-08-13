"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const AboutValues = ({ title, description }) => {
  const boxref = useRef();
  const textref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const tl = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    // tl.current.from(
    //   textref.current,
    //   {
    //     y: -25,
    //     display: "none",
    //     opacity: 0,
    //   },
    //   "a"
    // );
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // tl.current.play();
    console.log("mouseenter");
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // tl.current.reverse();
    console.log("mouseleave");
  };

  return (
    <>
      <div
        ref={boxref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="aboutBox flex w-full justify-between py-6 border-b-2 border-black"
      >
        <div className="flex flex-col">
          <h3 className="text-2xl  ">{title}</h3>
          <p className='' ref={textref} >
            {description}
          </p>
        </div>

        <div className="arrow border-black border-2 h-12 w-12 flex justify-center items-center p-4 rounded-full">
          <FaArrowRight />
        </div>
      </div>
    </>
  );
};
