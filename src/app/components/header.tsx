"use client";

import { useSession } from "next-auth/react";
import { navPages } from "../lib/navPages";
import NavLinks from "./navLinks";
import UserSignPart from "./userSignPart";
import { User } from "../lib/auth";
import LogInModal from "./logInModal";

export default function Header() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  const user = session?.user as User;

  return (
    <>
      <div className="h-20 px-5 py-3 flex items-center justify-between bg-dark-bg text-light-text">
        {/* <LogoItem /> */}
        <div className="mx-auto">
          <NavLinks
            navPages={navPages}
            // admin={admin}
          />
        </div>

        <div className="flex gap-4 items-center">
          <UserSignPart user={user} />
        </div>
        <LogInModal botUsername={`${process.env.BOT_USERNAME}`} />
      </div>
      <hr className=" border-solid border-transparent dark:border-slate-600" />
    </>
  );
}
