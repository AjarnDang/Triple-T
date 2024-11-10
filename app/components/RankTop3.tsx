"use client";

import React, { useState, useEffect } from "react";
import rankData from "../api/mocks/score";
import TrophyIcon from "@mui/icons-material/EmojiEvents";

export default function RankTopThree() {
  const sortedRankData = rankData.sort((a, b) => b.mostScore - a.mostScore);
  const [displayRanks, setDisplayRanks] = useState([
    sortedRankData[0],
    sortedRankData[1],
    sortedRankData[2],
  ]);

  const updateDisplayRanks = () => {
    if (window.innerWidth >= 1024) {
      setDisplayRanks([
        sortedRankData[1],
        sortedRankData[0],
        sortedRankData[2],
      ]);
    } else {
      setDisplayRanks([
        sortedRankData[0],
        sortedRankData[1],
        sortedRankData[2],
      ]);
    }
  };

  useEffect(() => {
    updateDisplayRanks();
    window.addEventListener("resize", updateDisplayRanks);
    return () => window.removeEventListener("resize", updateDisplayRanks);
  }, []);

  return (
    <>
      <div className="grid lg:grid-rows-3 grid-flow-row gap-4 w-full">
        <div className="text-center lg:row-start-2 lg:row-span-2 lg:h-48 h-[9rem] w-full rounded-3xl bg-gradient-to-t from-gray-800 to-transparent p-1">
          <div>
            <TrophyIcon
              sx={{ fontSize: 40 }}
              className="bg-gradient-to-br lg:from-orange-800 lg:to-orange-600 from-yellow-600 to-orange-400 rounded-full p-1 mb-4"
            />
            <div className="text-xl font-bold">
              {displayRanks[0]?.mostScore}
            </div>
            <div>{displayRanks[0]?.username}</div>
          </div>
        </div>

        <div className="text-center lg:row-end-3 lg:row-span-2 lg:h-48 h-[9rem] w-full rounded-3xl bg-gradient-to-t from-gray-800 to-transparent p-1">
          <div>
            <TrophyIcon
              sx={{ fontSize: 40 }}
              className="bg-gradient-to-br lg:from-yellow-600 lg:to-orange-400 from-slate-400 to-slate-600 rounded-full p-1 mb-4"
            />
            <div className="text-xl font-bold">
              {displayRanks[1]?.mostScore}
            </div>
            <div>{displayRanks[1]?.username}</div>
          </div>
        </div>

        <div className="text-center lg:row-start-2 lg:row-span-2 lg:h-48 h-[9rem] w-full rounded-3xl bg-gradient-to-t from-gray-800 to-transparent p-1">
          <div>
            <TrophyIcon
              sx={{ fontSize: 40 }}
              className="bg-gradient-to-br lg:from-slate-400 lg:to-slate-600 from-orange-800 to-orange-600 rounded-full p-1 mb-4"
            />
            <div className="text-xl font-bold">
              {displayRanks[2]?.mostScore}
            </div>
            <div>{displayRanks[2]?.username}</div>
          </div>
        </div>
      </div>
    </>
  );
}
