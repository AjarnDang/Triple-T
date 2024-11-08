import localFont from "next/font/local";
import { CustomProviders } from "./provider";
import SidebarDrawer from "./components/sidebar";
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
          <SidebarDrawer />
          <div className="container mx-auto sm:mx-64 p-4">
            {children}
          </div>
        </body>
      </html>
    </CustomProviders>
  );
}
