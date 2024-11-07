"use client";

import localFont from "next/font/local";
import SidebarDrawer from "./components/sidebar";
import NotLogin from "./pages/home";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
// import { CustomProviders } from "./provider";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
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

function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return session ? 
  (
    <>
      <SidebarDrawer>{children}</SidebarDrawer>
    </>
  )
  : 
  <NotLogin />;
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <AuthWrapper>
            <html lang="en">
              <body>{children}</body>
            </html>
          </AuthWrapper>
        </SessionProvider>
      </body>
    </html>
  );
}
