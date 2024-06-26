"use client";

import Image from "next/image";
import Bg from "../../assets/bg-esteira.jpg";
import ImageCredit from "../imageCredit/ImageCredit";
import { Open_Sans } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import useMedia from "@/hooks/useMedia/useMedia";
import Link from "next/link";

const openSans = Open_Sans({ weight: ["400"], subsets: ["latin"] });

const TakeTraining = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const mobile = useMedia("(max-width: 768px)");

  return (
    <div className="h-[120vh] cel:h-screen cel:bg-newBlack w-full flex flex-col items-center justify-center text-white relative">
      {!mobile && (
        <Image
          src={Bg}
          alt="Imagem de um homem correndo na esteira"
          layout="fill"
        />
      )}

      <div className="flex flex-col items-center justify-center gap-[30px] mt-10 z-30 tablet:px-2">
        <h1
          className="font-normal text-5xl text-center tablet:text-4xl cel:text-3xl"
          data-aos="zoom-in"
        >
          Leve seu treinamento para o próximo nível
        </h1>

        <p
          className={`${openSans.className} text-2xl cel:text-xl max-w-[760px] text-center`}
          data-aos="zoom-in"
        >
          CrossFit é um movimento com mais de 5 milhões de atletas e mais de
          14.000 locais em todo o planeta.
        </p>

        <div className="flex items-center justify-center gap-5">
          <Link
            href="/contato"
            className="uppercase text-center text-white bg-newBlue font-bold py-[14px] px-[35px] max-w-[234px] hover:bg-black"
            data-aos="fade-right"
          >
            Comece agora
          </Link>

          <Link
            href="/contato"
            className="uppercase text-center text-white bg-transparent border-white border-[2px] font-bold py-[12px] px-[35px] max-w-[234px] hover:text-black hover:bg-white"
            data-aos="fade-left"
          >
            Comece agora
          </Link>
        </div>

        <ImageCredit color="white" />
      </div>
    </div>
  );
};

export default TakeTraining;
