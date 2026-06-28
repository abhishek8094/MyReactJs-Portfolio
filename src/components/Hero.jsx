import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="sm:p-40 relative bg-cover bg-center flex justify-center gap-2 items-center">
      <div className="flex flex-col-reverse md:flex-row justify-center md:justify-center gap-0 sm:gap-24 items-center w-full px-4 py-20 md:py-16">
        {/* First column */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1200"

          className="w-full md:w-1/2 mt-8 md:mt-0 md:mb-0"
        >
          <h1 className="text-4xl mb-2 md:text-6xl sm:mb-5 font-bold leading-normal">
            Hi,
          </h1>
          <h1 className="text-4xl md:text-6xl mb-2 sm:mb-5 font-bold leading-normal">
            I&apos;m <span className="text-red-500">Abhishek Singh</span>
          </h1>
          <p className="mb-2 text-xl sm:text-3xl">
            <TypeAnimation
              sequence={[
                "I\u0027m a <FullStack Developer/>",
                1000,
                "I\u0027m a <Frontend Developer/>",
                1000,
                "I\u0027m a <Backend Developer/>",
                1000,
                "I\u0027m a <DSA Enthusiast/>",
                1000,
                "I\u0027m a <Competitive Programmer/>",
                1000,
              ]}

              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
          <p className="mb-6 text-md sm:text-lg">
            A proud graduate of Dr. Ram Manohar Lohia Avadh University, Ayodhya, with a B.Tech in Computer Science Engineering.
          </p>
          <div className="flex space-x-4">
            <a
              href="/#contact"
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full w-40 text-center"
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1su4vs8HlUXlvqa6QAcxbWcpZngA-IC_E/view?usp=drive_link"
              className="bg-white text-black hover:bg-gray-300 font-semibold py-2 px-6 rounded-full w-40 border border-grey-500 text-center"
            >
              Resume
            </a>
          </div>
        </div>
        {/* Second column */}

        <img
          data-aos="flip-left"
          data-aos-delay="400"
          data-aos-duration="1200"
          src="/Abhishek.jpg"
          alt="Your Image"
          className="rounded-full sm:h-96 sm:w-96 md:h-96 md:w-96 h-60 w-60 object-scale-down"
        />
      </div>
    </div>
  );
};

export default Hero;
