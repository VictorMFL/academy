"use client"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const GridImages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-newBlack h-[374px] flex items-center justify-center gap-[26px]">
      <div className="bg-exemple1 relative top-16" data-aos="fade-up"></div>
      <div className="bg-exemple2 relative top-40" data-aos="fade-down"></div>
      <div className="bg-exemple3 relative top-16" data-aos="fade-up"></div>
      <div className="bg-exemple4 relative top-40" data-aos="fade-down"></div>
    </div>
  );
};

export default GridImages;
