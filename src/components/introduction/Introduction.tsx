import Image from "next/image";
import bgInitial from "../../assets/bg-inicial.jpg";
import iconBar from "../../assets/barra.png";
import iconStrong from "../../assets/musculacao.png";
import iconFitness from "../../assets/alongamento.png";
import iconCrossfit from "../../assets/peso.png";
import Card from "../card/Card";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ weight: ["600"], subsets: ["latin"] });

const Introduction = () => {
  return (
    <div className="w-full min-h-[105vh] relative">
      <Image
        src={bgInitial}
        alt="Imagem na academia"
        className="h-full absolute top-0 left-0 right-0 bottom-0 -z-10"
      />

      <div className="w-[45%] h-full flex justify-center flex-col gap-12 py-16 pl-[110px]">
        <h1 className="text-white text-5xl font-normal">
          Leve seu treinamento para o próximo nível
        </h1>

        <div className="w-full grid grid-cols-2 gap-4">
          <Card image={iconBar} title="exercícios" link="#" />
          <Card image={iconStrong} title="treinadores" link="#" />
          <Card image={iconFitness} title="fitness" link="#" />
          <Card image={iconCrossfit} title="Crossfit" link="#" />
        </div>

        <p className={`${openSans.className} text-white text-lg`}>
          Imagem do{" "}
          <a
            href="https://www.freepik.com/photos/woman"
            target="_blank"
            className="border-b-[1px] border-white hover:border-newBlue hover:text-slate-200"
          >
            Freepik
          </a>
        </p>
      </div>
    </div>
  );
};

export default Introduction;
