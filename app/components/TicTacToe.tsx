'use client';

import React, { useState, useEffect } from "react";

const Board: React.FC = () => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0); 
  const [streak, setStreak] = useState<number>(0);

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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
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

    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];

    const newSquares = squares.slice();
    newSquares[randomMove] = "O";
    setSquares(newSquares);
    setXIsNext(true); 

    const gameWinner = calculateWinner(newSquares);
    if (gameWinner) {
      setWinner(gameWinner);
    }
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
      setStreak((prev) => prev);
    }
    setTimeout(restartGame, 1000); 
  };

  const restartGame = () => {
    setSquares(Array(9).fill(""));
    setWinner(null);
    setXIsNext(true);
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
      <div className="grid grid-cols-3 gap-2">
        {Array(9)
          .fill(null)
          .map((_, index) => renderSquare(index))}
      </div>
      <div className="mt-4">
        {winner ? (
          <p className="text-2xl font-semibold">Winner: {winner}</p>
        ) : (
          <p className="text-xl">{xIsNext ? "Next Player: X" : "Bot's Turn (O)"}</p>
        )}
      </div>
      <div className="mt-4">
        <p className="text-lg">Score: {score}</p>
        <p className="text-lg">Current Streak: {streak}</p>
      </div>
      <button
        onClick={restartGame}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Restart Game
      </button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Board />
    </div>
  );
};

export default App;
