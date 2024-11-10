"use client";

import React, { useState } from "react";
import assignment from "../api/mocks/assignment";
import { useSession, signIn } from "next-auth/react";
import { grey } from "@mui/material/colors";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";

export default function Documents() {
  const { data: session } = useSession();
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "th" : "en");
  };

  const currentContent = assignment.find(
    (item) => item.language === language
  ).content;

  return (
    <div className="lg:w-[60%] flex justify-center px-4">
      <div>
        <div className="mb-12">
          <h1 className="text-2xl font-bold mb-4">Overview</h1>
          <p className="mb-4">
            This project is created by{" "}
            <a
              href="https://www.linkedin.com/in/thornthan-jomtharak-b10403279/"
              target="_blank"
              className="text-blue-500"
            >
              Thornthan Jomtharak
            </a>{" "}
            a Frontend Developer and UX/UI Designer. It uses Next.js's dynamic
            routing and useState to manage form data and useEffect to fetch
            data. The mock data for this project from <a href="">MeLiveCode</a>
            which used for OAuth 2.0 authorization. And some of the data was
            mocked by creator.
          </p>
          <p className="mb-4">
            Tic-Tac-Toe is provided as Proof of Concept (POC) using Next.js. The
            game allows two players to play the classic Tic-Tac-Toe game on a
            3x3 grid. You also can choose a difficulty levels for more fun!
          </p>
          <p className="mb-8">
            You can get a Username and password by clicking "Get username"
            button below or click on this{" "}
            <a
              target="_blank"
              href="https://melivecode.com/"
              className="text-blue-500"
            >
              link
            </a>{" "}
            at <b>"USER AUTHORIZATION"</b> section. You can also choose any
            username from
            <b> "USERS"</b> section. And the password is the same for every
            username.
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
        </div>
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Assignments</h1>
            <button
              onClick={toggleLanguage}
              className="btn border rounded-lg border-gray-800  hover:bg-slate-800 transition px-4 py-2 flex items-center"
            >
              {language === "en" ? "Switch to Thai" : "Switch to English"}
            </button>
          </div>

          <div className="border border-gray-800 p-4 rounded-lg">
            <p>{currentContent.introduction}</p>
            <ul className="list-disc ml-5 mb-4">
              {currentContent.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-2">
              {currentContent.additionalDetails.title}
            </h3>
            <ul className="list-disc ml-5">
              {currentContent.additionalDetails.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
