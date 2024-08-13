"use client";
import React from "react";
import { AboutValues } from "../AboutValues";
import { motion, useScroll } from "framer-motion";

export const About = () => {
  const box = [
    {
      title: "Innovation",
      description:
        "Pioneering the latest technologies to create superior solutions.",
    },
    {
      title: "Reliability",
      description: "Consistently meeting deadlines and project goals.",
    },
    {
      title: "Quality",
      description: "Upholding the highest standards in every project.",
    },
    {
      title: "Partnership",
      description:
        "Collaborating closely with clients to understand and achieve their goals.",
    },
  ];
  return (
    <>
      <motion.section id="about" className="mx-16 mt-16">
        <div>
          <h2 className="text-center text-5xl mb-8">About us</h2>
          <div className="flex flex-col md:flex-row justify-center gap-16 mt-10 ">
            <p className="text-justify text-2xl flex-1 bg-black text-white p-8 rounded-3xl">
              At Think Next Innovation, we are passionate about providing
              top-tier IT solutions that drive success for our clients. Our team
              of skilled professionals is dedicated to delivering projects on
              time, every time. With a commitment to excellence and innovation,
              we ensure that your technology needs are met with the highest
              standards of quality and reliability.
            </p>
            <div className="flex-1">
              {box.map((e) => {
                return (
                  <AboutValues
                    key={e.title}
                    title={e.title}
                    description={e.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};
