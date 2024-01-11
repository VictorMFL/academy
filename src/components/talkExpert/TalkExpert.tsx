"use client";

import Image from "next/image";
import TeamTraining from "../../assets/bg-treino-equipe.jpg";
import ImageCredit from "../imageCredit/ImageCredit";
import { Open_Sans } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const openSans = Open_Sans({ weight: ["400"], subsets: ["latin"] });

const TalkExpert = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full">
      <div className="w-full bg-newGray02">
        <div className="w-full h-[577px] z-10 pt-[30px] pl-[177px] relative" data-aos="fade-up">
          <Image
            src={TeamTraining}
            width={819}
            alt="Treino em equipe"
            className="absolute bottom-[-250px] z-10"
          />
        </div>
      </div>

      <div className="w-full h-[430px] bg-newBlack pb-[60px] relative">
        <div className="w-[497px] bg-white p-[30px] flex flex-col gap-5 absolute -top-7 right-[232px] z-30" data-aos="flip-right">
          <h1 className="text-newGray text-2xl font-normal">
            Fale com um treinador especialista para construir um plano certo
            para você.
          </h1>

          <p className={`${openSans.className} text-lg text-newGray`}>
            Malesuada bibendum arcu vitae elementum curabitur. Faucibus turpis
            in eu mi. Tortor consequat id porta nibh venenatis cras sed felis.
            Pellentesque habitant morbi tristique senectus et netus et.
          </p>

          <ImageCredit color="black" />

          <button className="uppercase text-center text-white bg-newBlue font-bold py-[14px] px-[35px] max-w-[234px] hover:bg-black">
            Comece agora
          </button>
        </div>
      </div>
    </div>
  );
};

export default TalkExpert;
