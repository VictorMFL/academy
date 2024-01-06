"use client";

import Comment from "../comment/Comment";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MembersSay = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full bg-newBlue flex flex-col items-center justify-center py-[60px]">
      <h1 className="font-normal text-4xl text-white" data-aos="zoom-in">
        Veja o que nossos membros têm a dizer:
      </h1>

      <div className="w-full flex items-center justify-center px-28 mt-20">
        <div className="w-full grid grid-cols-3 gap-12 place-items-center justify-center">
          <Comment
            comment="Texto de amostra. Aqui que ficará o comentário dos membros."
            name="Victor Manoel"
          />
          <Comment
            comment="Texto de amostra. Aqui que ficará o comentário dos membros."
            name="Victor Manoel"
          />
          <Comment
            comment="Texto de amostra. Aqui que ficará o comentário dos membros."
            name="Victor Manoel"
          />
          <Comment
            comment="Texto de amostra. Aqui que ficará o comentário dos membros."
            name="Victor Manoel"
          />
          <Comment
            comment="Texto de amostra. Aqui que ficará o comentário dos membros."
            name="Victor Manoel"
          />
          <Comment
            comment="Texto de amostra. Aqui que ficará o comentário dos membros."
            name="Victor Manoel"
          />
        </div>
      </div>
    </div>
  );
};

export default MembersSay;
