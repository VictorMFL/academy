"use client";

import { CommentsProps } from "@/interface/interface";
import Image from "next/image";
import iconMarks from "../../assets/aspas.png";
import { Open_Sans } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const openSans = Open_Sans({
  weight: ["400"],
  subsets: ["latin"],
  style: ["italic"],
});

const Comment = ({ comment, name }: CommentsProps) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="flex flex-col gap-5 max-w-[30ch]"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
    >
      <Image src={iconMarks} alt="Icone de aspas" width={64} height={64} />

      <p className={`${openSans.className} text-lg text-white`}>{comment}</p>

      <p className="uppercase text-xl font-semibold text-white">{name}</p>
    </div>
  );
};

export default Comment;
