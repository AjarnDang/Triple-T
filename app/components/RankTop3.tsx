import React from "react";
import rankData from "../api/mocks/score";
import TrophyIcon from "@mui/icons-material/EmojiEvents";

export default function RankTopThree() {
  const sortedRankData = rankData.sort((a, b) => b.mostScore - a.mostScore);

  return (
    <>
      <div className="grid grid-rows-3 gap-4 grid-flow-col mb-12">
        <div className="text-center row-start-2 row-span-2 h-36 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="flex h-full w-full items-center justify-center bg-gray-800 back">
            <div>
              <TrophyIcon
                sx={{ fontSize: 40 }}
                className="bg-gradient-to-br from-orange-800 to-orange-600 rounded-full p-1"
              />
              <div className="text-xl font-bold mt-2">
                {sortedRankData[1]?.mostScore}
              </div>
              <div>{sortedRankData[1]?.username}</div>
            </div>
          </div>
        </div>

        <div className="text-center row-end-3 row-span-2 py-8">
          <TrophyIcon
            sx={{ fontSize: 40 }}
            className="bg-gradient-to-br from-yellow-600 to-orange-400 rounded-full p-1"
          />
          <div className="text-xl font-bold mt-2">
            {sortedRankData[0]?.mostScore}
          </div>
          <div>{sortedRankData[0]?.username}</div>
        </div>

        <div className="text-center row-start-2 row-span-2 py-8">
          <TrophyIcon
            sx={{ fontSize: 40 }}
            className="bg-gradient-to-br from-slate-400 to-slate-600 rounded-full p-1"
          />
          <div className="text-xl font-bold mt-2">
            {sortedRankData[2]?.mostScore}
          </div>
          <div>{sortedRankData[2]?.username}</div>
        </div>
      </div>
    </>
  );
}
