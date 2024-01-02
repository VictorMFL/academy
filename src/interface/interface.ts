import { StaticImageData } from "next/image";

export interface CardProps {
  image: StaticImageData;
  title: string;
  link?: string;
  subtitle?: string;
}

export interface BenefitsProps {
  number: number;
  title: string;
}
