import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["400"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="w-full min-h-[240px] bg-bgFooter flex flex-col items-center justify-center text-white">
      <p className={`${openSans.className} text-sm`}>Texto de Amostra. Aqui ficará os dados do footer do seu site.</p>

      <div className={`${openSans.className} flex items-center gap-[1ch] mt-10 text-xs`}>
        <a href="https://nicepage.com/website-templates" target="_blank" className="text-footerLink underline">Modelos de sites</a>

        <p>criados com</p>

        <a href="https://nicepage.com/website-templates" target="_blank" className="text-footerLink underline">software Website Builder.</a>
      </div>
    </footer>
  );
};

export default Footer;
