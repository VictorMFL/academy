import GoogleMap from "@/components/map/GoogleMap";
import { Open_Sans, Montserrat } from "next/font/google";

const openSans = Open_Sans({ weight: ["700", "600", "500"], subsets: ["latin"] });

const montserrat = Montserrat({
  weight: ["500", "600"],
  subsets: ["latin"],
});

const About = () => {
  return (
    <div
      className={`${montserrat.className} min-h-[80vh] flex flex-col items-center justify-center`}
    >
      <h1
        className={`${openSans.className} my-4 text-4xl font-bold cel:text-2xl text-center`}
      >
        SOBRE
      </h1>

      <h2
        className={`${openSans.className} font-semibold text-2xl cel:text-xl mb-2 text-center`}
      >
        Localização privilegiada
      </h2>

      <p className="px-8 cel:px-4">
        Situada no coração do bairro nobre de{" "}
        <span className="text-newBlue">Alphaville</span>, em São Paulo, a{" "}
        <span className="text-newBlue">Academia Fitness Center</span> oferece
        fácil acesso e comodidade para seus alunos. Com amplo estacionamento e
        segurança 24 horas, você pode se exercitar com tranquilidade e conforto.
      </p>

      <GoogleMap />

      <h2
        className={`${openSans.className} font-semibold text-2xl cel:text-xl mt-6 mb-2 text-center`}
      >
        Nosso espaço moderno e bem equipado conta com:
      </h2>

      <ul className="list-disc px-8">
        <li className="text-left">
          <span className="text-newBlue font-semibold">
            Sala de musculação:
          </span>{" "}
          Equipamentos de última geração para todos os grupos musculares,
          incluindo pesos livres, máquinas guiadas e aparelhos cardiovasculares.
        </li>

        <li className="text-left">
          <span className="text-newBlue font-semibold">
            Salas de ginástica:
          </span>{" "}
          Aulas coletivas para todos os gostos e níveis, como Zumba, Pilates,
          Yoga e Spinning.
        </li>

        <li className="text-left">
          <span className="text-newBlue font-semibold">Piscina:</span> Piscina
          aquecida e coberta para natação, hidroginástica e relaxamento.
        </li>

        <li className="text-left">
          <span className="text-newBlue font-semibold">Sauna:</span> Para
          relaxar e desintoxicar após os treinos.
        </li>

        <li className="text-left">
          <span className="text-newBlue font-semibold">Vestiários:</span> Amplos
          e confortáveis, com chuveiros individuais e armários.
        </li>
      </ul>

      <h2
        className={`${openSans.className} font-semibold text-2xl cel:text-xl mt-6 mb-2 text-center`}
      >
        Equipe qualificada
      </h2>

      <p className="px-8 cel:px-4">
        Nossa equipe de profissionais altamente qualificados está sempre à
        disposição para orientar e motivar você durante seus treinos. Nossos
        instrutores são formados em educação física e possuem vasta experiência
        em treinamento personalizado.
      </p>

      <h2
        className={`${openSans.className} font-semibold text-2xl cel:text-xl mt-6 mb-2 text-center`}
      >
        Atendimento personalizado
      </h2>

      <p className="px-8 cel:px-4">
        Acreditamos que cada aluno é único. Por isso, oferecemos planos de
        treinamento individualizados, elaborados de acordo com seus objetivos e
        necessidades específicas.
      </p>

      <p className="my-8 font-semibold px-8 cel:px-4">
        Venha conhecer a{" "}
        <span className="text-newBlue">
          Academia Fitness Center
        </span>{" "}
        e experimente o prazer de se exercitar em um ambiente moderno, seguro e
        acolhedor. Agende uma visita hoje mesmo e dê o primeiro passo em direção
        a uma vida mais saudável e ativa!
      </p>
    </div>
  );
};

export default About;
