import Image from "next/image";
import bgInitial from "../../assets/bg-inicial.jpg";
import iconBar from "../../assets/barra.png";
import iconStrong from "../../assets/musculacao.png";
import iconFitness from "../../assets/alongamento.png";
import iconCrossfit from "../../assets/peso.png";
import Card from "../card/Card";
import ImageCredit from "../imageCredit/ImageCredit";

const Introduction = () => {
  return (
    <div className="w-full min-h-[105vh] cel:min-h-[70vh] relative">
      <div className="background-initial"></div>

      <div className="w-[48%] desktop:w-[60%] tablet:w-[70%] tablet:p-[20px] cel:p-1 cel:min-w-full h-full flex justify-center flex-col gap-12 py-16 pl-[110px]">
        <h1 className="text-white text-5xl tablet:text-3xl font-normal animate-left">
          Leve seu treinamento para o próximo nível
        </h1>

        <div
          className={`grid-cel w-full grid grid-cols-2 tablet:grid-cols-tablet gap-4 cel:gap-1 animate-bottom`}
        >
          <Card image={iconBar} title="exercícios" link="#" />
          <Card image={iconStrong} title="treinadores" link="#" />
          <Card image={iconFitness} title="fitness" link="#" />
          <Card image={iconCrossfit} title="Crossfit" link="#" />
        </div>

        <ImageCredit color="white" />
      </div>
    </div>
  );
};

export default Introduction;
