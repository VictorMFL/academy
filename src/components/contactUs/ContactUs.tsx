"use client";

import { Montserrat, Open_Sans } from "next/font/google";
import ImageCredit from "../imageCredit/ImageCredit";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
});

const openSans = Open_Sans({
  weight: ["700"],
  subsets: ["latin"],
});

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-fulll flex items-center justify-center" data-aos="zoom-in">
      <div className="max-w-[50%] flex flex-col gap-5 p-[60px]">
        <h1 className="text-newGray font-normal text-2xl">
          Quer receber e-mails sobre eventos ou novidades?
        </h1>

        <p className={`${montserrat.className} text-newGray text-lg`}>
          Quer ser o primeiro a ler nossas novidades? Inscreva-se no boletim
          informativo para se manter atualizado sobre todos os eventos.
        </p>

        <form className="w-full flex items-center justify-center gap-[15px]">
          <input
            type="email"
            placeholder="Digite um endereço de e-mail válido"
            className="w-full py-[10px] px-3 bg-newGray02 text-newBlack outline-none"
          />

          <button
            type="submit"
            className="uppercase bg-newBlue text-white text-center py-[10px] px-[30px] hover:bg-black"
          >
            Enviar
          </button>
        </form>
      </div>

      <div className="max-w-[50%] flex flex-col gap-5 p-[60px]">
        <h1 className="text-newGray font-normal text-5xl">
          Reserve seu treino
        </h1>

        <ImageCredit color="black" />

        <a
          href="https://api.whatsapp.com/send?phone=5511999999999"
          target="_blank"
          className={`${openSans.className} text-newBlue text-xl cursor-pointer`}
        >
          +55 11 99999-9999
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
