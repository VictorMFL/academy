import { CardProps } from "@/interface/interface";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

const openSans = Open_Sans({ weight: ["600"], subsets: ["latin"] });

const Card = ({ image, title, link, subtitle }: CardProps) => {
  return (
    <div
      className={`${
        subtitle && "items-center justify-center"
      } w-[246px] tablet:w-[200px] cel:max-w-[150px] min-h-[235px] bg-white p-[30px] cel:p-[10px] cel:items-center cel:justify-center flex flex-col gap-[15px] mr-4 relative`}
    >
      <span className="w-full h-[5px] bg-newBlue absolute top-0 left-0"></span>

      <Image
        src={image}
        alt={`Icone do ${title}`}
        height={70}
        width={70}
        className="animate-rotateImg"
      />

      <h1 className="font-bold text-2xl uppercase cel:text-lg text-center">{title}</h1>

      {subtitle && (
        <p
          className={`${openSans.className} text-newGray text-center cel:text-sm`}
        >
          {subtitle}
        </p>
      )}

      {link && (
        <Link
          href={link}
          className={`${openSans.className} w-[9.2ch] hover:text-newRed font-semibold text-newGray border-b-[1px] border-black cel:text-sm`}
        >
          Saiba mais
        </Link>
      )}
    </div>
  );
};

export default Card;
