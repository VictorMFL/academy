import { CardTrainingProps } from "@/interface/interface";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import useMedia from "@/hooks/useMedia/useMedia";

const openSans = Open_Sans({ weight: ["400"], subsets: ["latin"] });

const CardTypesTraining = ({
  image,
  description,
  title,
}: CardTrainingProps) => {
  const tablet = useMedia("(max-width: 992px)");
  const cel = useMedia("(max-width: 687px)");

  return (
    <div className="bg-white p-[30px] w-[300px] h-[500px] tablet:h-auto tablet:w-full tablet:p-2 tablet:flex-row flex flex-col gap-5">
      {cel ? (
        <span></span>
      ) : (
        <Image
          src={image}
          alt={`imagem de ${title}`}
          width={tablet ? 150 : 240}
          height={tablet ? 150 : 240}
        />
      )}

      <div className="flex flex-col">
        <h1 className="text-2xl cel:text-lg">{title}</h1>

        <p className={`${openSans.className} mb-5 text-lg cel:text-sm cel:mb-0`}>{description}</p>
      </div>
    </div>
  );
};

export default CardTypesTraining;
