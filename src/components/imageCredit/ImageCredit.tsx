import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ weight: ["600"], subsets: ["latin"] });

const ImageCredit = ({ color }: { color: string }) => {
  return (
    <p className={`${openSans.className} ${color === 'white' ? "text-white": "text-newGray"} text-lg animate-bottom`}>
      Imagem do{" "}
      <a
        href="https://www.freepik.com/"
        target="_blank"
        className="border-b-[1px] border-white hover:border-newBlue hover:text-slate-200"
      >
        Freepik
      </a>
    </p>
  );
};

export default ImageCredit;
