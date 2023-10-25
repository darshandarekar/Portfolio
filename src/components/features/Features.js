import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import {  FaGlobe } from "react-icons/fa";
import {  SiApacheairflow,SiTableau,SiTensorflow } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        
        {/* <Card
          title="Data Engineering"
          des="Create attractive and fully working websites using React "
          icon={<AiFillAppstore />}
        />
       
        
        <Card
          title="UI Design"
          des="Design the UI with CSS3 and libraries like MUI , Ant D , Bootstrap , etc"
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Deploy websites using veriouse hoisting servers like Netlify , versal , CloudFlare, etc"
          icon={<FaGlobe />}
        /> */}
        <Card
          title="Data Engineering"
          des="Design and maintain robust ETL data pipelines using Big Data tools like Hadoop, Spark, Kafka, etc."
          icon={<SiApacheairflow />}
        />
        <Card
          title="AI/ML Engineering"
          des="Develop and fine-tune AI/ML models using Python, TensorFlow, Keras, etc."
          icon={<SiTensorflow />}
        />
        <Card
          title="Data Analytics"
          des="Perform data analysis and visualization using tools like PowerBI, Tableau, Advanced Excel, etc."
          icon={<SiTableau />}
        />

      </div>
    </section>
  );
}

export default Features