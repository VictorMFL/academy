import { BenefitsProps } from "@/interface/interface";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ weight: ["400"], subsets: ["latin"] });

const Benefits = ({ number, title }: BenefitsProps) => {
  return (
    <div className="w-[380px] flex justify-center gap-8">
      <div className="min-w-[76px] h-[76px] rounded-full bg-newBlue flex items-center justify-center">
        <p className="text-5xl text-white">{number}</p>
      </div>
      <p className={`${openSans.className} text-black text-xl`}>{title}</p>
    </div>
  );
};

export default Benefits;
