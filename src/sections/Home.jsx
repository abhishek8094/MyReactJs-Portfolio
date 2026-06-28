import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto";
  }, []);

  return (
    <section
      className="relative bg-cover bg-center min-h-screen"
    
    >
      {/* Theme-aware text wrapper (Hero ke text ko bhi dark/light me readable banane ke liye) */}
      <div className={isDark ? "text-white" : "text-black"}>
        <Navbar />
        <Hero />
      </div>
    </section>
  );
};

export default Home;

