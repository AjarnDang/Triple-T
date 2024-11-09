import React from "react";

interface ScoreDisplayProps {
  score: number;
  streak: number;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, streak }) => {
  return (
    <div className="card border border-gray-800 bg-gray-900 rounded-lg p-6 w-full">
      <h1 className="text-xl font-bold mb-8">Your scores</h1>
      <div className="grid grid-cols-2">
        <p className="text-lg">Score</p>
        <p className="text-lg text-right">{score}</p>
      </div>
      <div className="grid grid-cols-2">
        <p className="text-lg">Current Streak</p>
        <p className="text-lg text-right"> {streak}</p>
      </div>
    </div>
  );
};

export default ScoreDisplay;
