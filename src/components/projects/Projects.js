import React from 'react'
import Title from '../layouts/Title'
import { pdfai ,GDoc, realtime, ocr, nlp, sales } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="PDF_AI"
          des=" PDF_AI is a powerful tool for processing and extracting information from PDF documents using state-of-the-art 
          natural language processing (LLM) techniques."
          src={pdfai}
          link='https://github.com/darshandarekar/PDF_AI'
        />
        <ProjectsCard
          title="Real Time Sales Dashboard with Apache Spark and Kafka"
          des=" This project implements a real-time sales dashboard using Apache Spark and 
          Kafka, providing instantaneous insights into sales trends. 
          It incorporates an efficient data pipeline, enhancing data visualization for quick decision-making.
          "
          src={realtime}
          link='https://github.com/darshandarekar/Real-Time-Sales-Dashboard-with-Apache-Spark-and-Kafka'
        />
        <ProjectsCard
          title="Automatic Number Plate Recognition System"
          des="This project is an Optical Character Recognition (OCR) and Automatic Number Plate Recognition (ANPR) system. 
          It detects license plates in images and videos, extracts the text from the plates, and stores the data in a MySQL database.
          "
          src={ocr}
          link='https://github.com/darshandarekar/A-Vehicle-Entry-Exit-Management-System-using-Automatic-Number-Plate-Recognition'
          
        />
        <ProjectsCard
          title="Textual Data Extraction and NLP Analysis"
          des="This project involves web scraping and text analysis to extract valuable insights from web content. 
          The process includes fetching webpage content, extracting titles and text, processing and analyzing the text, 
          and calculating various text properties."
          src={nlp}
          link='https://github.com/darshandarekar/Textual-Data-Extraction-and-NLP-Analysis'
        />
        <ProjectsCard
          title="Walmart Sales Prediction"
          des="Walmart Sales Prediction using Data Analytics and Machine learning"
          src={sales}
          link='https://github.com/darshandarekar/Walmart_Sales_Prediction'
        />

        
        
      </div>
    </section>
  );
}

export default Projects