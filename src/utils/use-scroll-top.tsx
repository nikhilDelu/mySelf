import React, { useEffect } from "react";

export const useScrollTop = (threshold: number = 10) => {
  const [scrolled, setScrolled] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(() => {
        const isScrolled = window.scrollY > threshold;
        console.log("Updating scrolled:", isScrolled);
        return isScrolled;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
};
