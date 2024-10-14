import Image from "next/image";
import LogOut from "./logOut";
import SignButton from "./signButton";
import { User } from "../lib/auth";
import Link from "next/link";

type Props = {
  user: User;
};

export default function UserSignPart({ user }: Props) {
  const userName: string | null | undefined = user?.name;
  const userImage: string | null | undefined = user?.image;
  return (
    <>
      {!user ? (
        <div className="flex gap-1 lg:flex-col xl:flex-row xl:gap-2">
          <Link href={"?login=true"}>
            <SignButton type="button">Log In</SignButton>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <p className="ml-auto">{userName}</p>
          <div className="flex gap-2">
            <div className="w-8 h-8 ml-5 rounded-full overflow-hidden">
              {userName && userImage && (
                <Image
                  className="w-8 h-8"
                  src={userImage}
                  alt={userName}
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              )}
            </div>
            <div className="w-fit ml-auto">
              <LogOut />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
