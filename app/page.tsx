"use client";

import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { grey } from "@mui/material/colors";
import { useSession, signIn } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();
  return (
    <div className="dashboard text-white">
      <h1 className="text-2xl font-bold">Welcome to the TicTacToe</h1>
      <p>Sign in to play the game and explore the features!</p>
      <br />
      {!session ? (
      <button
        onClick={() => signIn()}
        className="btn border rounded-lg border-gray-800 hover:bg-slate-800 transition px-4 py-2 flex items-center space-x-2"
      >
        <span>Sign in</span>
        <LoginIcon sx={{ color: grey[50] }} />
      </button>
      ) : (
        <></>
      )}
    </div>
  );
}
