"use client";

import React from "react";
import { useSession, signIn } from "next-auth/react";

export default function NotLogin() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <p className="mb-2">Welcome to TIC-TAC-TOE</p>
            <button
              onClick={() => signIn()}
              className="btn bg-slate-200 text-[#333333]"
            >
              Sign in
            </button>
          </div>
        </div>
      </>
    );
  }
}
