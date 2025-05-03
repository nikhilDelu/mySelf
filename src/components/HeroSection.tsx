import { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "🚀 Full Stack Web Developer",
        "Crafting Magic with Code",
        "Building the Future with Tech",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen px-6 md:px-20">
      <img
        src="logo.png"
        alt="Yash Bishnoi"
        className="w-40 h-40 md:w-60 md:h-60 rounded-full border-4 border-gray-700 shadow-lg"
      />

      <div className="mt-6 md:mt-0 md:ml-10">
        <h1 className="text-4xl md:text-6xl font-bold  bg-gradient-to-tr from-[#FF0080] to-[#FF8C00] bg-clip-text text-transparent">
          Yash Bishnoi
        </h1>
        {/* <p className="text-lg md:text-2xl font-medium mt-2">
          🚀 Full Stack Web Developer | Crafting Magic with Code
        </p> */}
        <span
          className="text-2xl font-mono transition-all duration-1000"
          ref={typedRef}
        ></span>
        <p className="mt-4">
          Turning ideas into reality, one **line of code** at a time. Whether
          it’s sleek UI, robust backend systems, or crazy innovative
          projects—I'm here to build the future.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
