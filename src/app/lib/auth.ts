import CredentialsProvider from "next-auth/providers/credentials";
import { AuthDataValidator } from "@telegram-auth/server";
import { objectToAuthDataMap } from "@telegram-auth/server/utils";
import NextAuth from "next-auth";

export type User = {
  id: string;
  name: string;
  image: string;
};

declare module "next-auth" {
  interface Session {
    user: User;
  }
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "telegram-login",
      name: "Telegram Login",
      credentials: {},
      async authorize(credentials, req) {
        const validator = new AuthDataValidator({
          botToken: `${process.env.BOT_TOKEN}`,
        });

        const data = objectToAuthDataMap(req.query || {});
        const user = await validator.validate(data);
        console.log(user);
        if (user.id && user.first_name) {
          console.log(user.first_name);
          return {
            id: user.id.toString(),
            name: [user.first_name, user.last_name || ""].join(" "),
            image: user.photo_url,
          };
        }
        return null;
      },
    }),
  ],
};
export default NextAuth(authOptions);
