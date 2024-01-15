import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const roboto = Roboto({
  weight: ["400", "700", "500", "400", "300"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Home of my website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
