"use client";
import React, { useRef } from "react";
import { ServiceCard } from "../components/ServiceCard";
import { BsStack } from "react-icons/bs";
import { GrOptimize } from "react-icons/gr";
import { FaLaptopCode, FaHeadSideVirus } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";
import { motion, useScroll, useTransform } from "framer-motion";

export const Services = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);


  const box = [
    {
      Icon: BsStack,
      title: "Web Design and Devlopment",
      description:
        "Custom Website Design & Development: Crafting unique, responsive websites tailored to your brand, including e-commerce with secure payment gateways. CMS & Maintenance: Building on platforms like WordPress, with ongoing support to ensure seamless performance and easy content updates.",
    },
    {
      Icon: GrOptimize,
      title: "Search Engine Optimization (SEO)",
      description:
        "SEO & PPC Advertising: Boosting your website's search engine rankings and managing paid campaigns on platforms like Google Ads to drive targeted traffic. Social Media & Content Marketing: Engaging your audience on platforms like Facebook and Instagram, creating valuable content and Email Marketing & Software Development",
    },
    {
      Icon: FaLaptopCode,
      title: "Custom Software Developement",
      description:
        "Building software solutions tailored to your specific business needs. Software Testing and Quality Assurance: Ensuring your software is bug-free and performs optimally through rigorous testing. Mobile Application Development",
    },
    {
      Icon: MdDevices,
      title: "IOS App Developement",
      description:
        "Developing mobile applications for Apple's iOS platform. Android App Development: Creating mobile applications for the Android platform. Cross-Platform App Development: Building mobile applications that work seamlessly on both iOS and Android devices. IT Consulting",
    },

    {
      Icon: FaHeadSideVirus,
      title: "IT Strategy and Planning",
      description:
        "Helping businesses develop effective IT strategies to achieve their goals. Technology Assessment: Evaluating current technology systems and recommending improvements. Digital Transformation Consulting: Assisting businesses in adopting digital technologies to enhance operations and customer experience.",
    },
  ];

  return (
    <>
      <motion.section style={{scale}}  ref={ref} id="serivce" className="md:mx-16 mx-4 mt-16">
        <div>
          <h2 className="text-5xl text-center mb-8">Services</h2>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
            {box.map((e) => {
              return (
                <ServiceCard
                  key={e.title}
                  title={e.title}
                  description={e.description}
                  Icon={e.Icon}
                />
              );
            })}
          </div>
        </div>
      </motion.section>
    </>
  );
};
