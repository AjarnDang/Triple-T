"use client";

import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import GamesIcon from "@mui/icons-material/Games";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { grey } from "@mui/material/colors";

export default function SidebarDrawer() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false); // Track sidebar open/close

  const Menu = [
    {
      name: "Home",
      link: "/",
      icon: HomeIcon,
    },
    {
      name: "Play",
      link: "/game",
      icon: GamesIcon,
    },
  ];

  // Handle sidebar toggle
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Check if the current route is active
  const isActive = (link: string) =>
    router.pathname === link ? "bg-gray-200 dark:bg-gray-700" : "";

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={toggleSidebar}
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <MenuIcon />
              </button>
              <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Flowbite
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-2 ms-3">
                {session ? (
                  <>
                    <p className="px-2 py-[0.375rem] border rounded border-gray-600 items-center hover:bg-slate-800 transition lg:flex sm:hidden hidden">
                      {session.user?.email}
                    </p>
                    <button
                      onClick={() => signOut()}
                      className="btn border border-gray-600 items-center hover:bg-slate-800 transition lg:flex"
                    >
                     <span className="lg:flex sm:hidden hidden">Sign out </span>&nbsp;<LogoutIcon sx={{ color: grey[50] }} />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => signIn()}
                    className="btn border border-gray-600 lg:flex items-center hover:bg-slate-800 transition"
                  >
                    <span className="lg:flex sm:hidden hidden">Sign in</span>&nbsp;<LoginIcon sx={{ color: grey[50] }} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {Menu.map((text, index) => (
              <li key={index}>
                <a
                  onClick={() => router.push(text.link)}
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer ${isActive(
                    text.link
                  )}`}
                >
                  <text.icon />
                  <span className="ms-3">{text.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}