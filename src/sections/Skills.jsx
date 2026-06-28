


import React from "react";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { isDark } = useTheme();

  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center min-h-screen overflow-hidden "
      style={{
        backgroundColor: isDark ? "#000" : "#f5f5f5",
        transition: "background-color 0.3s ease",
      }}
    >
      <h1 className="p-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-6xl font-bold  text-center">
        Skills
      </h1>
      <div className="skills pt-8 "
        style={{
          backgroundColor: isDark ? "#000" : "#f5f5f5",
          transition: "background-color 0.3s ease",
        }}
      >
        <link rel="stylesheet" href="/styles.css" />
        <div className="scroll" style={{ "--time": "20s" }}>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>Express</span>
            <span>Git</span>
            <span>Mongodb</span>
            <span>Material UI</span>
            <span>Bootstrap</span>
            <span>Node JS</span>
            <span>Java</span>
          </div>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>Express</span>
            <span>Git</span>
            <span>Mongodb</span>
            <span>Material UI</span>
            <span>Bootstrap</span>
            <span>Node JS</span>
            <span>Java</span>
          </div>
        </div>
        <div className="scroll" style={{ "--time": "30s" }}>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>Express</span>
            <span>Git</span>
            <span>Mongodb</span>
            <span>Material UI</span>
            <span>Bootstrap</span>
            <span>Node JS</span>
            <span>Java</span>
          </div>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>Express</span>
            <span>Git</span>
            <span>Mongodb</span>
            <span>Material UI</span>
            <span>Bootstrap</span>
            <span>Node JS</span>
            <span>Java</span>
          </div>
        </div>
        <div className="scroll" style={{ "--time": "25s" }}>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>Express</span>
            <span>Git</span>
            <span>Mongodb</span>
            <span>Material UI</span>
            <span>Bootstrap</span>
            <span>Node JS</span>
            <span>Java</span>
          </div>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>Express</span>
            <span>Git</span>
            <span>Mongodb</span>
            <span>Material UI</span>
            <span>Bootstrap</span>
            <span>Node JS</span>
            <span>Java</span>
          </div>
        </div>
        <div className="scroll" style={{ "--time": "40s" }}>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>Express</span>
            <span>Git</span>
            <span>Mongodb</span>
            <span>Material UI</span>
            <span>Bootstrap</span>
            <span>Node JS</span>
            <span>Java</span>
          </div>
          <div>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>ReactJS</span>
            <span>Express</span>
            <span>Git</span>
            <span>Mongodb</span>
            <span>Material UI</span>
            <span>Bootstrap</span>
            <span>Node JS</span>
            <span>Java</span>
          </div>
        </div>

        <div className="scroll imgBox" style={{ "--time": "25s" }}>
          <div>
            <img src="./skillsicon/html.png" alt="HTML" />
            <img src="./skillsicon/css-3.png" alt="CSS" />
            <img src="./skillsicon/js.png" alt="JavaScript" />
            <img src="./skillsicon/react.png" alt="ReactJS" />
            <img src="./skillsicon/bootstrap.png" alt="Bootstrap" />
            <img src="./skillsicon/express.png" alt="Express" />
            <img src="./skillsicon/git.png" alt="Git" />
          </div>
          <div>
            <img src="./skillsicon/html.png" alt="HTML" />
            <img src="./skillsicon/css-3.png" alt="CSS" />
            <img src="./skillsicon/js.png" alt="JavaScript" />
            <img src="./skillsicon/react.png" alt="ReactJS" />
            <img src="./skillsicon/bootstrap.png" alt="Bootstrap" />
            <img src="./skillsicon/express.png" alt="Express" />
            <img src="./skillsicon/mongodb.png" alt="mongodb" />
          </div>
        </div>

        <div className="scroll imgBox" style={{ "--time": "25s" }}>
          <div>
            <img src="./skillsicon/git.png" alt="Git" />
            <img src="./skillsicon/mui.png" alt="Material UI" />
            <img src="./skillsicon/tailwind.png" alt="Tailwind" />
            <img src="./skillsicon/mongodb.png" alt="Mongodb" />
            <img src="./skillsicon/cpp.png" alt="Tailwind" />
          </div>
          <div>
            <img src="./skillsicon/mongodb.png" alt="Git" />
            <img src="./skillsicon/mui.png" alt="Material UI" />
            <img src="./skillsicon/tailwind.png" alt="Tailwind" />
            <img src="./skillsicon/git.png" alt="Mongodb" />
            <img src="./skillsicon/c.png" alt="Material UI" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
