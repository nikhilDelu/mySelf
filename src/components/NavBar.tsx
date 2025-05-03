import {
  BadgeInfo,
  BriefcaseBusiness,
  Moon,
  Settings,
  ShieldCheck,
  Sun,
  UserRoundPen,
} from "lucide-react";
import toggleDarkMode from "../utils/toggleDarkMode";
import "../index.css";
import { useScrollTop } from "../utils/use-scroll-top";

const NavBar = () => {
  const scrolled = useScrollTop(10);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div
      style={{ fontFamily: "Inconsolata, Comic+Relief" }}
      className={`${
        scrolled ? "border-b shadow-sm shadow-[#ECDBBA]" : ""
      } z-50 border-transparent backdrop-blur-sm p-4 flex justify-between items-center fixed top-0 w-full max-w-full transition-all duration-700 ease-in-out `}
    >
      <img
        className="h-8 w-8 rounded-full bg-red-900 cursor-pointer"
        src="logo.png"
        alt="logo"
      />
      <div className="sm:flex flex-1 justify-between items-center hidden max-w-[450px] mx-20">
        <a className="cursor-pointer" onClick={() => scrollToSection("hero")}>
          Me
        </a>
        <a className="cursor-pointer" onClick={() => scrollToSection("skills")}>
          Skills
        </a>
        <a className="cursor-pointer" onClick={() => scrollToSection("work")}>
          Work
        </a>
        <a
          className="cursor-pointer"
          onClick={() => scrollToSection("certifications")}
        >
          Certifications
        </a>
        <a className="cursor-pointer" onClick={() => scrollToSection("hireme")}>
          Hire Me
        </a>
      </div>
      <div className="flex flex-1 justify-between items-center sm:hidden  max-w-[180px]">
        <BadgeInfo
          onClick={() => scrollToSection("hero")}
          size={18}
          className="cursor-pointer"
        />
        <Settings
          onClick={() => scrollToSection("skills")}
          size={18}
          className="cursor-pointer"
        />
        <BriefcaseBusiness
          onClick={() => scrollToSection("work")}
          size={18}
          className="cursor-pointer"
        />
        <ShieldCheck
          onClick={() => scrollToSection("certifications")}
          size={18}
          className="cursor-pointer"
        />
        <UserRoundPen
          onClick={() => scrollToSection("hireme")}
          size={18}
          className="cursor-pointer"
        />
      </div>
      <div onClick={toggleDarkMode} className="cursor-pointer">
        <Sun className="dark:hidden" />
        <Moon className="hidden dark:block" />
      </div>
    </div>
  );
};

export default NavBar;
