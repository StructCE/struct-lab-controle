import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "@/trpc/react";

import { AuthProvider } from "@/components/auth/authProvider";
import { NavBar } from "./_components/navBar";

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <AuthProvider>
          <NavBar />
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
