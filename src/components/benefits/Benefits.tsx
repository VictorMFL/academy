"use client";

import { BenefitsProps } from "@/interface/interface";
import { Open_Sans } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const openSans = Open_Sans({ weight: ["400"], subsets: ["latin"] });

const Benefits = ({ number, title }: BenefitsProps) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-[380px] flex justify-center gap-8 tablet:flex-col tablet:items-center" data-aos="zoom-in">
      <div className="rounded-[50%] numbers bg-newBlue flex items-center justify-center">
        <p className="text-5xl text-white">{number}</p>
      </div>
      <p className={`${openSans.className} text-black text-xl tablet:text-center tablet:text-base`}>{title}</p>
    </div>
  );
};

export default Benefits;
