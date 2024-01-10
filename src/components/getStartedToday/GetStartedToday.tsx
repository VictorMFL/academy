"use client";

import iconWeightLoss from "../../assets/cintura.png";
import iconStrong from "../../assets/super-forca.png";
import iconEnergy from "../../assets/energia.png";
import iconSmile from "../../assets/sorriso.png";
import Card from "../card/Card";
import { Open_Sans } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const openSans = Open_Sans({ weight: ["600"], subsets: ["latin"] });

const GetStartedToday = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full bg-newGray02 flex flex-col items-center justify-center gap-[30px] p-[60px]">
      <h1 className="text-5xl text-newGray font-normal" data-aos="zoom-in">
        Comece Hoje
      </h1>

      <p
        className={`${openSans.className} max-w-[730px] text-2xl text-center text-newGray`}
        data-aos="zoom-in"
      >
        Mude seu corpo, mude sua mentalidade. Nossa academia tem tudo que você
        precisa para obter resultados. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod.
      </p>

      <div className="grid grid-cols-4 gap-5 mt-5" data-aos="fade-up">
        <Card
          image={iconWeightLoss}
          title="perda de peso"
          subtitle="Texto de amostra. amostra amostra"
        />
        <Card
          image={iconStrong}
          title="corpo ideal"
          subtitle="Texto de amostra. amostra amostra"
        />
        <Card
          image={iconEnergy}
          title="mais energia"
          subtitle="Texto de amostra. amostra amostra"
        />
        <Card
          image={iconSmile}
          title="menos dor"
          subtitle="Texto de amostra. amostra amostra"
        />
      </div>
    </div>
  );
};

export default GetStartedToday;
