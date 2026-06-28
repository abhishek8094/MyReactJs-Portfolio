import { Button } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
import { useTheme } from "../context/ThemeContext";

const ProjectCard = ({ data }) => {
  const { isDark } = useTheme();

  return (
    <div>
      <link rel="stylesheet" href="/project.css" />
      <div 
        className="project-card-sm"
        style={{
          backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
        }}
      >
        <div className="card-border-gradient"></div>
        <div 
          className="card-container flex flex-col gap-3"
          style={{
            backgroundColor: isDark ? "hsl(0, 0%, 10%)" : "#ffffff",
            color: isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)",
          }}
        >
          <div className="wrapper  flex gap-4 sm:flex-row flex-col-reverse ">
            <div className="flex flex-col sm:w-[35%]">
              <h1 
                className="text-2xl font-bold  mb-2"
                style={{ color: isDark ? "#fff" : "#000" }}
              >
                {data.name}
              </h1>
              <p style={{ color: isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)" }}>
                {data.content}
              </p>
            </div>
            <div className="sm:w-[65%]">
              <img className="" src={data.img} alt="" />
            </div>
          </div>
          <div className="sm:flex w-full  sm:justify-between ">
            <div className="tech-stack flex flex-wrap gap-4 sm:mt-4 justify-center ">
              {data.icons.map((e, i) => {
                return (
                  <div key={i}> 
                  <img src={e} alt="Tech 1" className="w-8 h-8 object-contain" />
                  </div>
                );
              })}
            </div>
            <div className="tech-stack flex flex-wrap gap-2 mt-4 justify-center sm:mt-3  ">
              <div className="hidden sm:flex items-center">
                <a 
                  title="Github" 
                  href={data.git}
                  style={{ color: isDark ? "#fff" : "#000" }}
                >
                  <FaGithub className="h-8 w-8" />
                </a>
              </div>
              <div className="hidden sm:flex items-center">
                <a 
                  title="Live Link" 
                  href={data.link}
                  style={{ color: isDark ? "#fff" : "#000" }}
                >
                  <TbLogin2 className="h-8 w-8" />
                </a>
              </div>
              <div className="flex sm:hidden items-center">
                <Button 
                  variant="outlined" 
                  href={data.git}
                  sx={{
                    color: isDark ? "#fff" : "#000",
                    borderColor: isDark ? "#fff" : "#000",
                    "&:hover": {
                      borderColor: isDark ? "#fff" : "#000",
                      backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                    }
                  }}
                >
                  Github
                </Button>
                <Button 
                  variant="outlined" 
                  href={data.link}
                  sx={{
                    color: isDark ? "#fff" : "#000",
                    borderColor: isDark ? "#fff" : "#000",
                    "&:hover": {
                      borderColor: isDark ? "#fff" : "#000",
                      backgroundColor: isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                    }
                  }}
                >
                  Hosted Live
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
