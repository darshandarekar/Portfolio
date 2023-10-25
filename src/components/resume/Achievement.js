import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-4xl font-bold">Project Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="A Vehicle Entry-Exit Management System Using Automatic Number Plate Recognition."
            subTitle="PGDBDA project."
            result="Success"
            des="This project is an Automatic Number Plate Recognition system that uses YOLOv5 
            for license plate detection, Paddle OCR for text extraction, 
            and a MySQL database for tracking authorized vehicle movements. "
          />
          {/* <ResumeCard
            title="E-commerce Web."
            subTitle="Micro
            Frontend Architecture Project."
            result="Success"
            des="Created grocery store website by using MFE, a design approach
            that breaks a web application into smaller, more
            manageable components that can be developed
            and deployed independently.
            "
          /> */}
          <ResumeCard
            title="Design & Development of Intelligent Reverse Breaking System"
            subTitle="B.E. Mech. final year project."
            result="Success"
            des="This project introduces a reverse braking system using ultrasonic sensors and 
            ATmega32 microcontroller, implemented in embedded C, 
            to emit warnings and automatically apply brakes when objects are detected within specific ranges "
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Science Intern"
            subTitle="The Sparks Foundation."
            result="Success"
            des="I have Complete 4 months Intenship at The Sparks Foundation as a Data Science Intern "
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
