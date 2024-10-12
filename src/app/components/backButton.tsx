"use client";

import { useRouter } from "next/navigation";
import { buttonStyle } from "../lib/utils/styleTemplates";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function BackButton({ children }: ButtonProps) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={router.back}
      className={`${buttonStyle} px-3`}
    >
      {children}
    </button>
  );
}
