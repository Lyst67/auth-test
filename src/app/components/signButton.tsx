"use client";

import { buttonStyle } from "../lib/utils/styleTemplates";

type SignButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "submit" | "reset" | "button" | undefined;
};

export default function SignButton({
  children,
  onClick,
  type,
}: SignButtonProps) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`${buttonStyle} px-3 border-2 dark:border text-theme-green dark:text-light-text font-medium dark:font-normal bg-transparent border-theme-green hover:text-light-text`}
      >
        {children}
      </button>
    </>
  );
}
