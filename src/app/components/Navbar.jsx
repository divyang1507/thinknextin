"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { easeIn } from "framer-motion";
export const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [isOpen, setisOpen] = useState(false);
  const navRef = useRef(null);
  const tl = useRef();
  const { contextSafe } = useGSAP({ scope: navRef });

  useGSAP(
    () => {
      gsap.set(".navmenu", { y: -75, display: "hidden" });
      tl.current = gsap.timeline({ paused: true }).to(".navmenu", {
        display: "flex",
        y: 0,
        duration: 0.5,
        ease: easeIn,
      });
    },
    { scope: navRef }
  );

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);

  // useEffect(() => {

  //   gsap.to('nav', {
  //     backgroundColor: '#000000',
  //     color: 'white',
  //     duration: 0.5,
  //     scrollTrigger: {
  //       trigger: 'nav',
  //       start: "top -10%",
  //       end: "top -11%",
  //       scrub: true,
  //       markers: true // Uncomment this line to see the scroll triggers
  //     },
  //   });
  // }, []);

  // const animate = contextSafe(() => {
  //   let narrownav = gsap.matchMedia();
  //   narrownav.add("(max-width: 800px)", () => {
  //     if (isOpen == true) {
  //       console.log('close')
  //       gsap.timeline().to(".navLink", {
  //           x: -100,
  //           opacity: 0,
  //           delay: 0.2,
  //           color: "#ffffff",
  //           stagger: 0.3,
  //         })
  //         .to(".navmenu", {
  //           opacity: 0, // Fade out
  //           duration: 0.3,
  //           y: -100,
  //           display: "none",
  //           //   onComplete: () => navMenu.style.display = 'none'
  //         });
  //     } else {
  //       console.log('open')
  //       // Show the menu
  //       gsap.timeline().set(".navmenu", { display: "flex" }) .to(".navmenu", {
  //           opacity: 1, // Fade in
  //           backgroundColor: "#000000",
  //           color: "#ffffff",
  //           duration: 0.3,
  //           y: 0,
  //         })
  //         .to(".navLink", {
  //           x: 0,
  //           opacity: 1,
  //           delay: 0.2,
  //           color: "#ffffff",
  //           stagger: 0.3,
  //         });
  //     }
  //   });
  // });

  const toggleMenu = () => {
    setisOpen(!isOpen);
    console.log("after click" + isOpen);
    // animate()
  };

  return (
    <>
      <nav
        ref={navRef}
        className="flex fixed items-center justify-between w-full text-red-500 px-4 md:px-8 py-6 backdrop-blur-sm"
      >
        <Link className="z-50" href={"#"}>
          <h1>Think Next Innovation</h1>
        </Link>
        <div onClick={toggleMenu} className=" sm:block md:hidden z-50">
          <FaBars />
        </div>
        <div
          className={`navmenu hidden p-40 md:p-0 md:flex absolute top-0 h-[100vh] md:h-auto left-0 right-0 md:bg-transparent flex-col md:flex-row md:relative md:justify-between bg-black items-center gap-10`}
        >
          <Link className="navLink" onClick={toggleMenu} href={"#"}>
            Home
          </Link>
          <Link className="navLink" onClick={toggleMenu} href={"#"}>
            Service
          </Link>
          <Link className="navLink" onClick={toggleMenu} href={"#"}>
            About
          </Link>
          <Link className="navLink" onClick={toggleMenu} href={"#"}>
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};
