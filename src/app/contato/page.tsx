import ContactUs from "@/components/contactUs/ContactUs";
import { metadata } from "../layout";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ weight: ["700", "400"], subsets: ["latin"] });

const contato = () => {
  const head = metadata;
  head.title = "Contato";
  head.description = "Page of contact";

  return (
    <div
      className={`${openSans.className} min-h-[70vh] flex flex-col items-center justify-center`}
    >
      <h1 className="my-4 text-center text-4xl font-bold cel:text-2xl">CONTATO</h1>
      <p className="mb-4 text-center font-normal">
        Tire sua dúvida pelo{" "}
        <a
          href="https://api.whatsapp.com/send?phone=5511999999999"
          className="text-newBlue "
        >
          whatsapp!
        </a>{" "}
        Clique no icone ou no número destacado para ser redirecionado.
      </p>
      <ContactUs />
    </div>
  );
};

export default contato;
