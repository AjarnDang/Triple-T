"use client";

import React, { useState } from "react";
import assignment from "../api/mocks/assignment";

export default function Documents() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "th" : "en");
  };

  const currentContent = assignment.find(
    (item) => item.language === language
  ).content;

  return (
    <div className="lg:w-[60%] px-4">
      <div className="mb-12">
        <h1 className="text-2xl font-bold mb-4">Overview</h1>
        <p>
          This project is created by <a href="" className="text-blue-700">Thornthan Jomtharak</a> a Frontend Developer and UX/UI Designer. It uses
          Next.js's dynamic routing and useState to manage form data and useEffect to fetch data. The mock data for this project from <a href="">MeLiveCode</a> 
          which used for OAuth 2.0 authorization. And some of the data was mocked by creator.
        </p>
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
  );
}
