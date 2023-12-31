import { CardProps } from "@/interface/interface";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ weight: ["600"], subsets: ["latin"] });

const Card = ({ image, title, link }: CardProps) => {
  return (
    <div className="w-[246px] min-h-[235px] bg-white p-[30px] flex flex-col gap-[15px] relative">
      <span className="w-full h-[5px] bg-newBlue absolute top-0 left-0"></span>

      <Image src={image} alt={`Icone do ${title}`} height={70} width={70} />

      <h1 className="font-bold text-2xl uppercase">{title}</h1>

      {link && (
        <a
          href={link}
          className={`${openSans.className} w-[9.2ch] hover:text-newRed font-semibold text-newGray border-b-[1px] border-black`}
        >
          Saiba mais
        </a>
      )}
    </div>
  );
};

export default Card;
