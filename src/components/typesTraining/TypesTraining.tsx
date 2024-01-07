import Image from "next/image";
import bgTraining from "../../assets/bg-treino-solo.jpg";
import CardTypesTraining from "../cardTypesTraining/CardTypesTraining";
import photoCrossfit from "../../assets/crossfit.jpg";
import ImageCredit from "../imageCredit/ImageCredit";

const TypesTraining = () => {
  return (
    <div className="w-full bg-newGray02">
      <div className="h-[110vh] relative">
        <Image
          src={bgTraining}
          alt="Imagem de um homem treinando"
          layout="fill"
        />
      </div>

      <div className="w-full h-[590px] flex flex-col items-center justify-center -translate-y-64">
        <div className="w-full flex justify-center items-center gap-5">
          <CardTypesTraining
            image={photoCrossfit}
            title="CrossFit"
            description="Aptidão funcional que combina treinamento com kettlebell, levantamento de peso olímpico, ginástica, lançamento de bola medicinal, treinamento com halteres, pliometria, levantamento de peso, remo, corrida e pular corda."
          />

          <CardTypesTraining
            image={photoCrossfit}
            title="CrossFit"
            description="Aptidão funcional que combina treinamento com kettlebell, levantamento de peso olímpico, ginástica, lançamento de bola medicinal, treinamento com halteres, pliometria, levantamento de peso, remo, corrida e pular corda."
          />

          <CardTypesTraining
            image={photoCrossfit}
            title="CrossFit"
            description="Aptidão funcional que combina treinamento com kettlebell, levantamento de peso olímpico, ginástica, lançamento de bola medicinal, treinamento com halteres, pliometria, levantamento de peso, remo, corrida e pular corda."
          />
        </div>

        <ImageCredit color="black" />

      </div>
        <p>Testetetetetetetetetete</p>
    </div>
  );
};

export default TypesTraining;
