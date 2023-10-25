import React from "react";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { contactImg } from "../../assets/index";


const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Darshan Darekar</h3>
        <p className="text-lg font-normal text-gray-400">Big Data Engineer</p>
        <p className="text-base text-gray-400 tracking-wide">
        I’m a dedicated Big Data Engineer with a PG in Big Data Analytics from C-DAC, 
        seeking opportunities in Data Science. I bring a strong foundation in data engineering, AI/ML principles, 
        and programming languages.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9822032454</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">darshandarekar.1999@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/darshan-darekar-86532a237/">
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.discordapp.com/users/484915194481344560p">
              <FaDiscord />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.instagram.com/darshan_darekar/">
              <FiInstagram />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
