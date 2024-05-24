"use client";

import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Modal from "../modal/Modal";

const openSans = Open_Sans({ weight: ["400"], subsets: ["latin"] });

const Header = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  function openModal(event: any) {
    event.preventDefault();
    router.push("?modal=open");
  }

  const modal = searchParams.get("modal");

  return (
    <>
      <header
        className={`${openSans.className} flex items-center justify-between py-5 pl-24 pr-36 cel:px-4 border-b-2 boder-newGray`}
      >
        <Link href="/">
          <Image src={require("../../assets/logo.png")} alt="Logo" />
        </Link>

        <nav>
          <div
            className="space-y-2 cursor-pointer hidden tablet:block"
            onClick={openModal}
          >
            <div className="w-8 h-0.5 bg-black"></div>
            <div className="w-8 h-0.5 bg-black"></div>
            <div className="w-8 h-0.5 bg-black"></div>
          </div>

          <ul className="flex gap-10 tablet:hidden">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "text-newBlue" : "hover:text-newRed"
                }`}
              >
                Página Inicial
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className={`${
                  pathname === "/sobre" ? "text-newBlue" : "hover:text-newRed"
                }`}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className={`${
                  pathname === "/contato" ? "text-newBlue" : "hover:text-newRed"
                }`}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {modal && <Modal />}
    </>
  );
};

export default Header;
