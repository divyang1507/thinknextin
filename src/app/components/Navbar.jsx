"use client";
import { animate, motion, scroll, stagger } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";


export const Navbar = () => {
  const links = [
    { herf: "#home", link: "Home" },
    { herf: "#service", link: "Service" },
    { herf: "#about", link: "About" },
    { herf: "#contact", link: "Contact" },
  ];


  const [isScroll, setisScroll] = useState(false);

  useEffect(() => {
    scroll((progress) => setisScroll(progress));
  });

  const variants = {
    open: {
      display: "flex ",
      color: "#ffffff",
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 0.3 },
    },
    closed: {
      display: "none",
      color: "#000000",
      opacity: 0,
      y: "-100%",
      transition: { ease: "easeInOut", duration: 0.3 },
    },
  };


  const navref = useRef();
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen(!isOpen);
    console.log("after click" + isOpen);
  };

  return (
    <>
      <motion.nav
        ref={navref}
        initial={{
          display: "hidden",
          backgroundColor: "rgba(0, 0, 0, 0)",
          backdropFilter: "blur(10px)",
          color: "#ffffff",
        }}
        animate={{
          display: "flex",
          backgroundColor: isScroll ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
          backdropFilter: isScroll ? "blur(0px)" : "blur(10px)",
          color: isScroll || isOpen ? "#ffffff" : "#ffffff",
          transition: { ease: "easeInOut", duration: 0.3 },
        }}
        className={`backdrop-blur-md flex fixed items-center justify-between w-full z-50 px-4 md:px-8 py-3 `}
      >
        <Link 
          scroll={true}
          className="z-50 flex items-center justify-center gap-2"
          href={"#home"}
          onClick={toggleMenu}
        >
      <Image src='/NextLogo.png' height={52} width={52} alt="logo"/>
          <h1 className="text-2xl">Think Next Innovation</h1>
        </Link>

        <div
          className={`md:flex hidden  bg-transparent md:flex-row md:relative md:justify-between bg-black items-center gap-10`}
        >
          {links.map((e, id) => {
            return (
              <Link
                key={id}
                scroll={true}
                className="navLink"
                onClick={toggleMenu}
                href={e.herf}
              >
                {e.link}
              </Link>
            );
          })}
        </div>
        {/* mobileNavMenu */}

        <button onClick={toggleMenu} className=" sm:block md:hidden z-50">
          <FaBars />
        </button>
        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className={`p-40 md:p-0 hidden md:hidden absolute top-0 h-[100vh] left-0 right-0  flex-col  bg-black items-center gap-10`}
        >
          {links.map((e, id) => {
            return (
              <Link
                key={id}
                scroll={true}
                className="navLink"
                onClick={toggleMenu}
                href={e.herf}
              >
                {e.link}
              </Link>
            );
          })}
        </motion.div>
      </motion.nav>
    </>
  );
};
