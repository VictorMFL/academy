"use client";

import Image from "next/image";
import bgMusculacao from "../../assets/bg-musculacao.jpg";
import iconChecked from "../../assets/verificado.png";
import ImageCredit from "../imageCredit/ImageCredit";

import { Open_Sans } from "next/font/google";
import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const openSans = Open_Sans({ weight: ["400", "700"], subsets: ["latin"] });

const StartToday = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="w-full min-h-[90vh] py-[70px] pl-24 flex flex-col gap-8 relative">
        <Image
          src={bgMusculacao}
          alt="Imagem de um homem fazendo musculação"
          className="h-full absolute top-0 left-0 right-0 bottom-0 -z-10"
        />

        <h1 className="text-white font-normal text-6xl" data-aos="fade-right">
          Comece hoje
        </h1>

        <ul
          className={`${openSans.className} flex flex-col gap-4`}
          data-aos="fade-right"
        >
          <li className="flex items-center gap-4">
            <Image
              src={iconChecked}
              alt="icone de verificado"
              height={24}
              width={24}
            />
            <p className="text-white text-2xl font-normal">
              Melhora a saúde cardiovascular
            </p>
          </li>

          <li className="flex items-center gap-4">
            <Image
              src={iconChecked}
              alt="icone de verificado"
              height={24}
              width={24}
            />
            <p className="text-white text-2xl font-normal">
              Reduz o estresse diário
            </p>
          </li>

          <li className="flex items-center gap-4">
            <Image
              src={iconChecked}
              alt="icone de verificado"
              height={24}
              width={24}
            />
            <p className="text-white text-2xl font-normal">
              Aumenta a força muscular
            </p>
          </li>
        </ul>

        <Link
          className={`${openSans.className} max-w-[234px] text-white bg-newBlue px-[35px] py-[14px] text-center font-bold uppercase hover:text-black hover:bg-white`}
          href="/contato"
          data-aos="fade-right"
        >
          Comece agora
        </Link>

        <ImageCredit color="white" />
      </div>

      <div className="py-14 px-24 bg-newGray02 flex items-center overflow-hidden">
        <div
          className="w-2/3 h-[223px] bg-white p-[30px]"
          data-aos="fade-right"
        >
          <h1 className="text-5xl">Comece Hoje</h1>
          <p className={`${openSans.className} text-2xl my-5 text-newGray`}>
            Agende uma introdução gratuita com um de nossos treinadores.
          </p>
        </div>

        <div
          className="w-1/3 h-[223px] bg-white p-[30px] flex items-center justify-center"
          data-aos="fade-left"
        >
          <Link
            className={`${openSans.className} max-w-[234px] text-white bg-newBlue px-[35px] py-[14px] text-center font-bold uppercase hover:text-white hover:bg-black`}
            href="/contato"
          >
            Comece agora
          </Link>
        </div>
      </div>
    </>
  );
};

export default StartToday;
