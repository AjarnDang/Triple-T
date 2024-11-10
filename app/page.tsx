"use client";

import React from "react";
import { grey } from "@mui/material/colors";
import { useSession, signIn } from "next-auth/react";
import LoginIcon from "@mui/icons-material/Login";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";

export default function Page() {
  const { data: session } = useSession();
  return (
    <div className="dashboard text-white lg:w-[40%]">
      <h1 className="text-2xl font-bold mb-4">Welcome to the TicTacToe</h1>

      <p className="mb-4">
        This project is provided as Proof of Concept (POC) using Next.js. The
        game allows two players to play the classic Tic-Tac-Toe game on a 3x3
        grid. You also can choose a difficulty levels for more fun!
      </p>

      <p className="mb-8">
        You can get a Username and password by clicking "Get username" button
        below or click on this{" "}
        <a
          target="_blank"
          href="https://melivecode.com/"
          className="text-blue-500"
        >
          link
        </a>{" "}
        at <b>"USER AUTHORIZATION"</b> section. You can also choose any username from
        <b> "USERS"</b> section. And the password is the same for every username.
      </p>

      {!session ? (
        <>
          <p className="mb-4">
            Sign in to play the game and explore the features!
          </p>
          <button
            onClick={() => signIn()}
            className="btn border rounded-lg border-gray-800 hover:bg-slate-800 transition px-4 py-2 flex items-center mr-2 mb-2"
          >
            <LoginIcon sx={{ color: grey[50] }} />
            <span> Sign in </span>
          </button>
        </>
      ) : (
        <></>
      )}

      <a
        href="https://melivecode.com/"
        target="_blank"
        className="btn border rounded-lg border-gray-800 hover:bg-slate-800 transition px-4 py-2 flex items-center mr-2 mb-2"
      >
        <PersonIcon sx={{ color: grey[50] }} />
        <span> Get username </span>
      </a>
      <a
        href="/doc"
        className="btn border rounded-lg border-gray-800 hover:bg-slate-800 transition px-4 py-2 flex items-center mb-2"
      >
        <DescriptionIcon sx={{ color: grey[50] }} />
        <span> Documents </span>
      </a>
    </div>
  );
}
