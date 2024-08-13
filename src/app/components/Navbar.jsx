"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { easeIn } from "framer-motion";

export const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [isOpen, setisOpen] = useState(false);
  const navRef = useRef(null);
  const tl = useRef();

  //nav menu open close
  useGSAP(
    () => {
      gsap.set(".navmenu", { y: -100, opacity: 0, display: "hidden" });
      gsap.set(".navLink", { x: -100, opacity: 0 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".navmenu", {
          display: "flex",
          opacity: 1,
          y: 0,
          duration: 0.1,
          ease: easeIn,
        })
        .to(".navLink", { x: 0, opacity: 1, duration: 0.1, stagger: 0.3 });
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

  const toggleMenu = () => {
    setisOpen(!isOpen);
    console.log("after click" + isOpen);
  };
  //navturns black
  useGSAP(
    () => {
      let mm = gsap.matchMedia();
      mm.add("(min-width: 800px)", () => {
        const tl = gsap.timeline();
        tl.from("", {
          duration: 0.5,
          color: "black",
          y: -100,
          ease: "power1.out",
          stagger: 0.2,
          delay: 1,
        });
      });
    },
    { scope: navRef }
  );
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
