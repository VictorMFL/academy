import { Open_Sans } from "next/font/google";
import Image from "next/image";
import iconWhatsapp from "@/assets/icon-whatsapp.png";

const openSans = Open_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="w-full min-h-[240px] bg-bgFooter flex flex-col items-center justify-center text-white p-4">
      <a
        href="https://api.whatsapp.com/send?phone=5511999999999"
        target="_blank"
        className="fixed bottom-4 right-4 animate-bottom"
      >
        <Image src={iconWhatsapp} alt="Icone do whatsapp" />
      </a>

      <p className={`${openSans.className} text-sm text-center`}>
        Texto de Amostra. Aqui ficará os dados do footer do seu site.
      </p>

      <div
        className={`${openSans.className} flex items-center gap-[1ch] mt-10 text-xs`}
      >
        <a
          href="https://nicepage.com/website-templates"
          target="_blank"
          className="text-footerLink underline"
        >
          Modelos de sites
        </a>

        <p>criados com</p>

        <a
          href="https://nicepage.com/website-templates"
          target="_blank"
          className="text-footerLink underline"
        >
          software Website Builder.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
