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
    <div className="flex justify-center items-center h-[75vh]">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Welcome to the TicTacToe</h1>
        {!session ? (
          <>
            <p className="mb-8">
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
          <span> Document </span>
        </a>
      </div>
    </div>
  );
}
