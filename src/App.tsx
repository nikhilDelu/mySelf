import Certifications from "./components/Certifications";
import HeroSection from "./components/HeroSection";
import HireMe from "./components/HireMe";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="h-full dark:bg-[#000000] dark:text-[#FAF6F0]">
      <div className="h-12" />

      <NavBar />
      <HeroSection />
      <Skills />
      <Work />
      <Certifications />
      <HireMe />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/jGhobd9nGoU"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div className="h-screen"></div>
    </div>
  );
};

export default App;
