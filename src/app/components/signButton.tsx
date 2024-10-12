"use client";

import { buttonStyle } from "../lib/utils/styleTemplates";
import { LoginButton } from "@telegram-auth/react";
import { signIn } from "next-auth/react";

// type SignButtonProps = {
//   children: React.ReactNode;
//   onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
//   type?: "submit" | "reset" | "button" | undefined;
// };

export default function SignButton({ botUsername }: { botUsername: string }) {
  return (
    <>
      <button
        className={`${buttonStyle} px-3 border-2 dark:border text-theme-green dark:text-light-text font-medium dark:font-normal bg-transparent border-theme-green hover:text-light-text`}
      >
        <LoginButton
          botUsername={botUsername}
          onAuthCallback={(data) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            signIn("telegram-login", { callbackUrl: "/" }, data as any);
          }}
        />
      </button>

      {/* <button
      type={type}
      onClick={onClick}
      className={`${buttonStyle} px-3 border-2 dark:border text-theme-green dark:text-light-text font-medium dark:font-normal bg-transparent border-theme-green hover:text-light-text`}
    >
      {children}
    </button> */}
    </>
  );
}
