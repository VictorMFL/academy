"use client";

import Image from "next/image";
import TeamTraining from "../../assets/bg-treino-equipe.jpg";
import ImageCredit from "../imageCredit/ImageCredit";
import { Open_Sans } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";

const openSans = Open_Sans({ weight: ["400"], subsets: ["latin"] });

const TalkExpert = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full tablet:flex tablet:flex-col tablet:items-center tablet:justify-center">
      <div className="w-full bg-newGray02">
        <div
          className="w-full h-[577px] z-10 pt-[30px] pl-[177px] tablet:pl-0 tablet:flex tablet:items-center tablet:justify-center relative"
          data-aos="fade-up"
        >
          <Image
            src={TeamTraining}
            width={819}
            alt="Treino em equipe"
            className="absolute bottom-[-250px] tablet:bottom-0 tablet:relative tablet:pt-16 z-10"
          />
        </div>
      </div>

      <div className="w-full h-[430px] bg-newBlack pb-[60px] relative">
        <div
          className="w-[497px] cel:w-full cel:right-0 bg-white p-[30px] flex flex-col gap-5 absolute -top-7 right-[232px] z-30"
          data-aos="flip-right"
        >
          <h1 className="text-newGray text-2xl font-normal cel:text-xl">
            Fale com um treinador especialista para construir um plano certo
            para você.
          </h1>

          <p
            className={`${openSans.className} text-lg text-newGray cel:text-base`}
          >
            Vamos te ajudar a alcançar seus objetivos de forma personalizada com
            a orientação de um profissional experiente.
          </p>

          <ImageCredit color="black" />

          <Link
            href="/contato"
            className="uppercase text-center text-white bg-newBlue font-bold py-[14px] px-[35px] max-w-[234px] hover:bg-black"
          >
            Comece agora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TalkExpert;
