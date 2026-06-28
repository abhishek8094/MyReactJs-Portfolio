import { useEffect, useState } from "react";
import "./index.css";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import About from "./sections/About";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
    
  }
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
