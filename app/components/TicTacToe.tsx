"use client";

import React, { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import ScoreDisplay from "./GameState";
import Rank from "./Rank";
import LoginIcon from "@mui/icons-material/Login";
import { grey } from "@mui/material/colors";

interface BoardProps {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setStreak: React.Dispatch<React.SetStateAction<number>>;
  streak: number;
}

const Board: React.FC<BoardProps> = ({ setScore, setStreak, streak }) => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<string>("Medium");

  const handleClick = (index: number) => {
    if (squares[index] || winner || !xIsNext) return;
    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? "X" : "O";

    setSquares(newSquares);
    setXIsNext(!xIsNext);

    const gameWinner = calculateWinner(newSquares);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const renderSquare = (index: number) => (
    <button
      key={index}
      className="w-16 h-16 border-2 border-gray-600 flex justify-center items-center text-2xl font-bold"
      onClick={() => handleClick(index)}
    >
      {squares[index]}
    </button>
  );

  const calculateWinner = (squares: string[]): string | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const botMove = () => {
    const availableMoves = squares
      .map((val, index) => (val === "" ? index : null))
      .filter((index) => index !== null) as number[];

    if (availableMoves.length === 0) return;

    let selectedMove;
    if (difficulty === "Easy") {
      // Easy mode: Random move
      selectedMove =
        availableMoves[Math.floor(Math.random() * availableMoves.length)];
    } else if (difficulty === "Medium") {
      // Medium mode: 50% chance to make a random move
      const winningMove = findWinningMove("O") || findWinningMove("X");
      selectedMove =
        Math.random() > 0.5 && winningMove !== null
          ? winningMove
          : availableMoves[Math.floor(Math.random() * availableMoves.length)];
    } else if (difficulty === "Hard") {
      // Hard mode: Prioritize blocking X and winning moves
      selectedMove =
        findWinningMove("O") ||
        findWinningMove("X") ||
        availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }

    if (selectedMove !== undefined) {
      const newSquares = squares.slice();
      newSquares[selectedMove] = "O";
      setSquares(newSquares);
      setXIsNext(true);

      const gameWinner = calculateWinner(newSquares);
      if (gameWinner) {
        setWinner(gameWinner);
      }
    }
  };

  const findWinningMove = (player: string): number | null => {
    for (const [a, b, c] of [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]) {
      if (
        squares[a] === player &&
        squares[a] === squares[b] &&
        squares[c] === ""
      ) {
        return c;
      }
      if (
        squares[a] === player &&
        squares[a] === squares[c] &&
        squares[b] === ""
      ) {
        return b;
      }
      if (
        squares[b] === player &&
        squares[b] === squares[c] &&
        squares[a] === ""
      ) {
        return a;
      }
    }
    return null;
  };

  const handleEndRound = () => {
    if (winner === "X") {
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
    } else if (winner === "O") {
      setScore((prev) => prev - 1);
      setStreak(0);
    }

    if (streak >= 3) {
      setScore((prev) => prev + 1);
      setStreak(0);
    }
    setTimeout(restartGame, 1000);
  };

  const restartGame = () => {
    setSquares(Array(9).fill(""));
    setWinner(null);
    setXIsNext(true);
    setDifficulty("Medium");
  };

  useEffect(() => {
    if (!xIsNext && !winner) {
      botMove();
    } else if (winner) {
      handleEndRound();
    }
  }, [xIsNext, squares, winner]);

  return (
    <div className="text-center">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          onClick={() => setDifficulty("Easy")}
          className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg ${
            difficulty === "Easy"
              ? "bg-blue-800 text-white" // Active state
              : "hover:bg-gray-100 hover:text-blue-700"
          } focus:z-10 focus:ring-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
          Easy
        </button>
        <button
          type="button"
          onClick={() => setDifficulty("Medium")}
          className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 ${
            difficulty === "Medium"
              ? "bg-blue-800 text-white" // Active state
              : "hover:bg-gray-100 hover:text-blue-700"
          } focus:z-10 focus:ring-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
          Medium
        </button>
        <button
          type="button"
          onClick={() => setDifficulty("Hard")}
          className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg ${
            difficulty === "Hard"
              ? "bg-blue-800 text-white" // Active state
              : "hover:bg-gray-100 hover:text-blue-700"
          } focus:z-10 focus:ring-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white`}
        >
          Hard
        </button>
      </div>

      <p className="mt-4 mb-4">
        Current Difficulty: <span className="text-blue-500">{difficulty || "None"}</span>
      </p>
      

      <div className="grid grid-cols-3 gap-2">
        {Array(9)
          .fill(null)
          .map((_, index) => renderSquare(index))}
      </div>
      <div className="mt-4">
        {winner ? (
          <p className="font-semibold">Winner: {winner}</p>
        ) : (
          <p>
            {xIsNext ? "Next Player: X" : "Bot's Turn (O)"}
          </p>
        )}
      </div>
      <button
        onClick={restartGame}
        className="mt-4 btn border rounded-lg border-gray-800 bg-gray-800 dark:border-gray-700 hover:bg-slate-700 transition px-6 py-3"
      >
        Restart Game
      </button>
    </div>
  );
};

const App: React.FC = () => {
  const { data: session } = useSession();
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);

  if (session) {
    return (
      <div className="relative grid lg:grid-cols-3 grid-cols-1 gap-4">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-8">TicTacToe</h1>
          <div className="flex justify-center items-center h-[70vh]">
            <Board setScore={setScore} setStreak={setStreak} streak={streak} />
          </div>
        </div>
        <div>
          <div className="mb-4">
            <ScoreDisplay score={score} streak={streak} />
          </div>
          <Rank />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center h-[80vh] space-y-2">
        <h1 className="text-center">You have to sign in to play the game</h1>
        <button
          onClick={() => signIn()}
          className="btn border rounded-lg border-gray-800  hover:bg-slate-800 transition px-4 py-2 flex items-center space-x-2"
        >
          <span>Sign in</span>
          <LoginIcon sx={{ color: grey[50] }} />
        </button>
      </div>
    );
  }
};

export default App;
