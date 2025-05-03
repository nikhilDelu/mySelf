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

interface Props {}

const NavBar = () => {
  const scrolled = useScrollTop(10);
  return (
    <div
      style={{ fontFamily: "Inconsolata, Comic+Relief" }}
      className={`${
        scrolled ? "border-b shadow-sm shadow-[#ECDBBA]" : ""
      } z-50 border-transparent backdrop-blur-sm p-4 flex justify-between items-center fixed top-0 w-full transition-all duration-700 ease-in-out`}
    >
      <img
        className="h-8 w-8 rounded-full bg-red-900 cursor-pointer"
        src="logo.png"
        alt="logo"
      />
      <div className="sm:flex flex-1 justify-between items-center hidden max-w-[450px] mx-20">
        <p className="cursor-pointer">Me</p>
        <p className="cursor-pointer">Skills</p>
        <p className="cursor-pointer">Work</p>
        <p className="cursor-pointer">Certifications</p>
        <p className="cursor-pointer">Hire Me</p>
      </div>
      <div className="flex flex-1 justify-between items-center sm:hidden  max-w-[180px]">
        <BadgeInfo size={18} className="cursor-pointer" />
        <Settings size={18} className="cursor-pointer" />
        <BriefcaseBusiness size={18} className="cursor-pointer" />
        <ShieldCheck size={18} className="cursor-pointer" />
        <UserRoundPen size={18} className="cursor-pointer" />
      </div>
      <div onClick={toggleDarkMode} className="cursor-pointer">
        <Sun className="dark:hidden" />
        <Moon className="hidden dark:block" />
      </div>
    </div>
  );
};

export default NavBar;
