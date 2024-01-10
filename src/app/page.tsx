import Benefits from "@/components/benefits/Benefits";
import GetStartedToday from "@/components/getStartedToday/GetStartedToday";
import Introduction from "@/components/introduction/Introduction";
import MembersSay from "@/components/membersSay/MembersSay";
import StartToday from "@/components/startToday/StartToday";
import TypesTraining from "@/components/typesTraining/TypesTraining";

const Home = () => {
  return (
    <main>
      <Introduction />

      <div className="w-full min-h-[262px] flex items-center justify-center gap-4">
        <Benefits
          number={1}
          title="Junte-se a uma comunidade de fitness comprometida com o seu sucesso."
        />
        <Benefits
          number={2}
          title="Obtenha um programa personalizado e adaptado às suas necessidades."
        />
        <Benefits
          number={3}
          title="Fique mais forte, mais saudável e mais feliz."
        />
      </div>

      <StartToday />

      <MembersSay />

      <TypesTraining />

      <GetStartedToday />
    </main>
  );
};

export default Home;
