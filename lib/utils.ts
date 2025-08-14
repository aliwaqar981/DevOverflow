import { techMap } from "@/constants/techmap";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDevIconName = (techName: string) => {
  // Remove spaces and dots, convert to lowercase
  const normalizedName = techName.replace(/[ .]/g, "").toLowerCase();

  return techMap[normalizedName]
    ? `${techMap[normalizedName]} colored`
    : `devicon-devicon-plain`;
};
