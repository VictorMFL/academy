"use client";

import { useEffect } from 'react';
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Modal = () => {
  const pathname = usePathname();
  const router = useRouter();

  function closeModal(event: any) {
    event.preventDefault();
    router.push("/");
  }

  useEffect(() => {
    // Quando o modal é aberto, desabilita o scroll
    document.body.style.overflow = "hidden";

    return () => {
      // Quando o modal é fechado, habilita o scroll
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="w-full h-screen absolute top-0 z-50">
      <div
        className="w-full h-full bg-black opacity-90"
        onClick={closeModal}
      ></div>

      <div className="h-full absolute top-0 left-0 bg-black animate-left2 p-5">
        <h1
          className="font-light text-4xl text-white w-full text-right mb-4 cursor-pointer"
          onClick={closeModal}
        >
          x
        </h1>

        <ul className="flex flex-col items-center justify-center gap-3">
          <li>
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "text-newBlue"
                  : "hover:text-newRed text-white"
              }`}
            >
              Página Inicial
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className={`${
                pathname === "/sobre"
                  ? "text-newBlue"
                  : "hover:text-newRed text-white"
              }`}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className={`${
                pathname === "/contato"
                  ? "text-newBlue"
                  : "hover:text-newRed text-white"
              }`}
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
