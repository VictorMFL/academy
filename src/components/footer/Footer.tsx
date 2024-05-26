import { Open_Sans } from "next/font/google";
import Image from "next/image";
import IconWhatsapp from "@/assets/icon-whatsapp.png";
import logo from "@/assets/logo.png";
import SocialMedia from "@/components/socialMedia/SocialMedia";

const openSans = Open_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer
      className={`${openSans.className} w-full min-h-[240px] bg-bgFooter flex flex-col items-center justify-center text-white p-4 cel:p-2`}
    >
      <a
        href="https://api.whatsapp.com/send?phone=5511999999999"
        target="_blank"
        className="fixed bottom-4 right-4 animate-bottom z-50"
      >
        <Image src={IconWhatsapp} alt="Icone do whatsapp" />
      </a>

      <div className="grid grid-cols-4 cel:grid-cols-2 text-center p-8 tablet:p-2 cel:p-0 border-b-[1px] boder-white">
        <div>
          <h1 className="font-semibold text-2xl cel:text-lg mb-2 text-center">
            ENDEREÇO
          </h1>
          <p className="cel:text-sm">Aqui fica seu endereço por completo.</p>
        </div>

        <div>
          <h1 className="font-semibold text-2xl cel:text-lg mb-2 text-center">
            CNPJ
          </h1>
          <p className="cel:text-sm">Nº 99.999.999.9999-00</p>
        </div>

        <div>
          <h1 className="font-semibold text-2xl cel:text-lg mb-2 cel:mt-6 text-center">
            CONTATOS
          </h1>

          <p className="cel:text-sm">Tel: +55 99999-9999</p>

          <div className="flex items-center justify-center gap-4 mt-2">
            <SocialMedia />
          </div>
        </div>

        <div className="flex items-center justify-center mt-4 cel:mt-6">
          <Image src={logo} alt="logo da empresa" width={70} height={70} />
        </div>
      </div>

      <p className="text-sm text-center mt-6">© 2024 - Nome da sua empresa</p>

      <div className="flex items-center gap-[1ch] mt-10 text-xs">
        <a
          href="https://nicepage.com/website-templates"
          target="_blank"
          className="text-footerLink underline"
        >
          Site
        </a>

        <p>criado com</p>

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
