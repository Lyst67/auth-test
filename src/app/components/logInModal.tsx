"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import TelegramAccountButton from "./telegramSignForm";

export default function LogInModal({ botUsername }: { botUsername: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const login = searchParams.get("login");

  useEffect(() => {
    const isModalOpen = () => {
      if (login) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };
    isModalOpen();
  });

  return (
    <>
      {login && (
        <div className="z-20 fixed top-0 left-0 w-screen h-screen bg-drop-bg grid place-items-center">
          <div className="relative z-20 p-5 pt-7 sm:p-7 lg:p-10 w-11/12 sm:w-5/6 md:w-2/3 lg:w-3/5 h-content overflow-hidden rounded-xl bg-light-text dark:bg-dark-bg">
            <button
              className="absolute ml-auto top-3 right-3 focus:scale-110 hover:scale-110 duration-300"
              type="button"
              onClick={router.back}
            >
              <RxCross2 className="w-7 h-7" />
            </button>

            <div className="w-full flex flex-col gap-5">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-center">
                Log In, Please.
              </h2>
              <TelegramAccountButton botUsername={botUsername} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
