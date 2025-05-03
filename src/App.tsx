import Certifications from "./components/Certifications";
import HeroSection from "./components/HeroSection";
import HireMe from "./components/HireMe";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="h-full w-full dark:bg-[#000000] dark:text-[#FAF6F0]">
      <div className="h-12" />
      <NavBar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="certifications">
        <Certifications />
      </div>
      <div id="hireme">
        <HireMe />
      </div>
    </div>
  );
};

export default App;
