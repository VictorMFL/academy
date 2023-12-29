"use client";

import { Open_Sans } from "next/font/google";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const openSans = Open_Sans({ weight: ["400"], subsets: ["latin"] });

const Header = () => {
  const pathname = usePathname();
  return (
    <header
      className={`${openSans.className} flex items-center justify-between py-5 pl-24 pr-36`}
    >
      <Image src={require("../../assets/logo.png")} alt="Logo" />

      <nav>
        <ul className="flex gap-10">
          <li>
            <Link href="/" className={`${pathname === "/" ? "text-newBlue" : "hover:text-newRed"}`}>
              Página Inicial
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className={`${pathname === "/sobre" ? "text-newBlue" : "hover:text-newRed"}`}
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              href="/contato"
              className={`${pathname === "/contato" ? "text-newBlue" : "hover:text-newRed"}`}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
