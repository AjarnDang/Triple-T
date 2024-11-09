import React from "react";
import rankData from "../api/mocks/score";

export default function Rank() {
  return (
    <div className="card border border-gray-800 bg-gray-900 rounded-lg p-6 w-full">
      <h1 className="text-xl font-bold mb-4">Leaderboards</h1>
      <div className="grid grid-cols-2 mb-2">
          <div></div>
          <div className="grid grid-cols-2 text-right text-slate-500">
            <div>Wins</div>
            <div>Win Rate</div>
          </div>
        </div>
      {rankData.map((player) => (
        <div key={player.username} className="grid grid-cols-2 mb-1">
          <div>{player.username}</div>
          <div className="grid grid-cols-2 text-right">
            <div>{player.mostScore}</div>
            <div>{player.avgWinRate}%</div>
          </div>
        </div>
      ))}
    </div>
  );
}
