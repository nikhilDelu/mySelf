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
    </div>
  );
};

export default App;
