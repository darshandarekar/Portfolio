import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaSkype } from "react-icons/fa";
import { SiApacheairflow, SiApachespark, SiPython, SiMysql } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Big Data Engineer.", "AI / ML Engineer.", "Data Analyst."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Darshan Darekar</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Unleashing the Power of Data Science to Simplify Experiences and Guide Every Interaction. 
        Not Just Sprucing Up Data, But Transforming It in Ways That Matter.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href='https://github.com/darshandarekar'> <BsGithub /></a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/darshan-darekar-86532a237/'><FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon">
              <a href='live:darshandarekar.505'><FaSkype /></a>
            </span>
            
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
            <SiMysql />
              
            </span>
            <span className="bannerIcon">
            <SiApachespark />
            </span>
            <span className="bannerIcon">
              <SiApacheairflow />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner