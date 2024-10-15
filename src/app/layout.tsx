import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./components/auth-provider";
import "./globals.css";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mustage Test",
  description: "My app with telegram auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthProvider>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            <main>{children}</main>
            <script
              async
              src="https://telegram.org/js/telegram-widget.js?22"
              data-telegram-login="MHLoginBot"
              data-size="large"
              data-auth-url="https://telegram-auth-rho.vercel.app/"
            ></script>
          </body>
        </html>
      </AuthProvider>
    </>
  );
}
