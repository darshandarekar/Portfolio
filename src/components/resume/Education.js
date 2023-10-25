import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Mechanical Engineering"
            subTitle="Savitribai Phule Pune University (2016 - 2022)"
            result="7.87 CGPA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Jr. College - Science "
            subTitle="KK Wagh College (2014 - 2016)"
            result="54.80 %"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="C D O MERI Highschool (2012 - 2014)"
            result="75.20 %"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - </p>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Training and Certification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         
          <ResumeCard
            title="PG Diploma in Big Data Analytics"
            subTitle="C-DAC - (2022 - 2023)"
            result="Thiruvananthapuram"
            des="A renowned scientific society under the Ministry of Electronics and IT, India, also houses the Advanced Computing Training School (ACTS), 
            offering various high-end courses in IT and associated areas"
          />
          {/* <ResumeCard
            title="Front-end Developer"
            subTitle="React Developer - (2022 - 2023)"
            result="Nashik"
            des="by using verious tech-stacks like js , recoil , MFE , MUI , Bootstrap , CSS3 created 4 big projects and many small projects"
          /> */}
        </div>
      </div>
    </motion.div>
  );
}

export default Education