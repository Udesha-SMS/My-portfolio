"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center place-self-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-5xl lg:leading-snug">
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, #8B5CF6, #06B6D4)",
              }}
            >
              Hello, I&apos;m{" "}
            </span>
            <br />
            <span className="text-white">
              <TypeAnimation
                sequence={[
                  "Udesha",
                  1000,
                  "Web Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-sm sm:text-base mb-4 lg:text-lg">
            I'm a undergraduate software engineer with experience in UiPath, 
            DevOps and expertise in frameworks like React and Node.js. 
            Also I have experience with JavaScript, React and C++. 
            I'm a quick learner and I am always looking for opportunities
            to learn and grow as a developer, and I am excited to use my
            skills to make a positive impact and continue my career in 
            the field of Information Technology.
          </p>
          <div>
            <Link
              href="/#contact"
              className="inline-block w-full px-6 py-3 mr-4 text-white transition duration-300 rounded-full sm:w-fit hover:opacity-90"
              style={{
                backgroundImage: "linear-gradient(to right, #8B5CF6, #06B6D4)",
              }}
            >
              Hire Me
            </Link>
            <a href="/Udesha_CV.pdf"
              download
              className="inline-block w-full px-1 py-1 mt-3 text-white transition duration-300 rounded-full sm:w-fit hover:opacity-90"
              style={{
                backgroundImage: "linear-gradient(to right, #8B5CF6, #06B6D4)",
              }}
            >
              <span className="block bg-[#8B5CF6] rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 place-self-center lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/main-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
