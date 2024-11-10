import type { Metadata } from 'next'
import localFont from "next/font/local";
import { CustomProviders } from "./provider";
import SidebarDrawer from "./components/sidebar";
import BgDecoration from "../public/bg-decoration.png";
import Image from "next/image";
import LoadingScreen from "./components/LoadingScreen";
import { Suspense } from "react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'TicTacToe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CustomProviders>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Image
            src={BgDecoration}
            className="w-full absolute top-0 right-0 lg:min-h-screen -z-10 opacity-40"
            alt=""
          />
          <SidebarDrawer />
          <Suspense fallback={<LoadingScreen />}>
            <div className="pt-16 md:pl-64">
              <div className="container flex justify-center lg:py-6 lg:px-24 py-4 px-4">
                {children}
              </div>
            </div>
          </Suspense>
        </body>
      </html>
    </CustomProviders>
  );
}
