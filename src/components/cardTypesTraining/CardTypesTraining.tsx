import { CardTrainingProps } from "@/interface/interface";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ weight: ["400"], subsets: ["latin"] });

const CardTypesTraining = ({
  image,
  description,
  title,
}: CardTrainingProps) => {
  return (
    <div className="bg-white p-[30px] w-[300px] flex flex-col gap-5">
      <Image src={image} alt={`imagem de ${title}`} width={240} height={240} />

      <h1 className="text-2xl">{title}</h1>

      <p className={`${openSans.className} mb-5 text-lg`}>{description}</p>
    </div>
  );
};

export default CardTypesTraining;
