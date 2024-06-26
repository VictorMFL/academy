"use client"

import Image from "next/image";
import bgTraining from "../../assets/bg-treino-solo.jpg";
import CardTypesTraining from "../cardTypesTraining/CardTypesTraining";
import photoCrossfit from "../../assets/crossfit.jpg";
import photoTraninig from '../../assets/treino-personalizado.jpg'
import photoFoundations from '../../assets/fundacoes.jpg'
import ImageCredit from "../imageCredit/ImageCredit";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TypesTraining = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div className="w-full cel:flex cel:flex-col cel:gap-2 bg-newGray02">
      <div className="h-[110vh] relative tablet:hidden" data-aos="fade-up">
        <Image
          src={bgTraining}
          alt="Imagem de um homem treinando"
          layout="fill"
        />
      </div>

      <div className="w-full h-[590px] tablet:min-h-[590px] flex flex-col items-center justify-center -mt-64 tablet:mt-0 relative">
        <div className="w-full flex tablet:flex-col justify-center items-center gap-5 tablet:gap-2 absolute" data-aos="fade-up">
          <CardTypesTraining
            image={photoCrossfit}
            title="CrossFit"
            description="Mais que treino, estilo de vida para força, resistência e agilidade em qualquer atividade."
          />

          <CardTypesTraining
            image={photoTraninig}
            title="Treino personalizado"
            description="Tenha um treino completamente voltado para as suas necessidades."
          />

          <CardTypesTraining
            image={photoFoundations}
            title="Fundações"
            description="Aprenda cada exercício com um dos nossos professores te auxiliando."
          />
        </div>
      </div>
      <div className="w-full p-[60px] tablet:p-4 flex items-center justify-center cel:hidden">
        <ImageCredit color="black" />
      </div>
    </div>
  );
};

export default TypesTraining;
