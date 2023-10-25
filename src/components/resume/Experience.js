import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
    
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Science Intern at The Sparks Foundation"
            subTitle="The Sparks Foundation (2022 - 2023)"
            result="Remote"
            des=""
          />
          {/* <ResumeCard
            title="Web Developer and Instructor"
            subTitle="FunctionUp (2022 - 2023)"
            result="Noida"
            des="Highly educated in web devlopment sector using libraries like react js and  framwork like Next js  ."
          /> */}
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
