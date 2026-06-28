import React, { useEffect } from "react";
import hello from "../../hello.json";
import Lottie from "lottie-react";
import AOS from "aos";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section 
      id="about" 
      className="pt-8"
      style={{
        backgroundColor: isDark ? "#000" : "#f5f5f5",
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        data-aos="fade" // Apply AOS fade-in animation
        data-aos-delay="400" // Optional delay
        data-aos-duration="1200"
        className="flex flex-col items-center justify-center min-h-screen  px-4 sm:px-0"
      >
        {" "}
        {/* Added px-4 sm:px-0 */}
        <h1 className="p-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-6xl font-bold text-center">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <Lottie animationData={hello} />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <p 
              className="text-md sm:text-lg mx-5"
              style={{
                color: isDark ? "#cbd5e1" : "#475569",
              }}
            >
              <span className="first-letter text-6xl text-blue-500">I </span>
              am a passionate and dedicated Computer Science enthusiast at Dr.
              Ram Manohar Lohia Avadh University, Ayodhya. My journey involves
              navigating through the realms of frontend magic and creating
              seamless experiences for users.
            </p>
            <br />
            <p 
              className="mx-5 text-md sm:text-lg"
              style={{
                color: isDark ? "#cbd5e1" : "#475569",
              }}
            >
              I'm constantly seeking opportunities to expand my knowledge and
              skills in the fields of Frontend Developer or ReactJs Developer, I
              am a fitness enthusiast and an avid learner, constantly striving
              for self-improvement in both my professional and personal
              pursuits.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up" // Apply AOS fade-in animation
          data-aos-delay="400" // Optional delay
          data-aos-duration="1200"
          style={{
            backgroundColor: isDark ? "#1e293b" : "#2caed8",
            color: isDark ? "#fff" : "#000",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
          className="flex flex-col items-center justify-center w-full max-w-6xl rounded-lg mx-2 md:mx-4 lg:mx-10 mt-8"
        >
          <h1 className="text-2xl mb-4 font-bold">Core Fundamentals</h1>
          <div className="flex flex-wrap justify-center w-3/4">
            <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
              <ul className="list-disc pl-4">
                <li className="text-md sm:text-lg whitespace-nowrap">DBMS</li>
                <li className="text-md sm:text-lg whitespace-nowrap">
                  Software Engineering
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
              <ul className="list-disc pl-4">
                <li className="text-md sm:text-lg whitespace-nowrap">
                  Computer Networks
                </li>
                <li className="text-md sm:text-lg whitespace-nowrap">OOPS</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
              <ul className="list-disc pl-4">
                <li className="text-md sm:text-lg whitespace-nowrap">
                  Artificial Intelligence
                </li>
                <li className="text-md sm:text-lg whitespace-nowrap">
                  Machine Learning
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
              <ul className="list-disc pl-4">
                <li className="text-md sm:text-lg whitespace-nowrap">
                  Operating System
                </li>
                <li className="text-md sm:text-lg whitespace-nowrap">DSA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
