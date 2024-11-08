'use client';

import React, { useState, useEffect } from "react";

// Create the Game Board Component
const Board: React.FC = () => {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [winner, setWinner] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0); // Player's score
  const [streak, setStreak] = useState<number>(0); // Winning streak

  const handleClick = (index: number) => {
    if (squares[index] || winner || !xIsNext) return; // Prevent click if square is filled, game over, or it's the bot's turn
    
    const newSquares = squares.slice(); // Create a copy of the current squares
    newSquares[index] = xIsNext ? "X" : "O"; // Mark current player's move
    
    setSquares(newSquares);
    setXIsNext(!xIsNext); // Switch player

    const gameWinner = calculateWinner(newSquares);
    if (gameWinner) {
      setWinner(gameWinner); // Set winner
    }
  };

  const renderSquare = (index: number) => (
    <button
      key={index} // Add key here to resolve the warning
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
        return squares[a]; // Return the winner ('X' or 'O')
      }
    }
    return null;
  };

  const botMove = () => {
    // AI logic to make a move
    const availableMoves = squares
      .map((val, index) => (val === "" ? index : null))
      .filter((index) => index !== null) as number[];

    if (availableMoves.length === 0) return; // No moves left

    // Make the AI choose a random move
    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];

    // Update the board with the bot's move
    const newSquares = squares.slice();
    newSquares[randomMove] = "O";
    setSquares(newSquares);
    setXIsNext(true); // Switch back to the player

    const gameWinner = calculateWinner(newSquares);
    if (gameWinner) {
      setWinner(gameWinner); // Set winner
    }
  };

  const handleEndRound = () => {
    if (winner === "X") {
      setScore((prev) => prev + 1); // Player wins
      setStreak((prev) => prev + 1); // Increase winning streak
    } else if (winner === "O") {
      setScore((prev) => prev - 1); // Bot wins
      setStreak(0); // Reset streak
    }

    // If player wins 3 times in a row, add bonus to score
    if (streak >= 3) {
      setScore((prev) => prev + 1);
      setStreak(0); // Reset streak after bonus
    }

    // Restart the game after the round ends
    setTimeout(restartGame, 1000); // Delay the reset so the player can see the result
  };

  const restartGame = () => {
    setSquares(Array(9).fill(""));
    setWinner(null);
    setXIsNext(true);
  };

  useEffect(() => {
    if (!xIsNext && !winner) {
      // AI makes a move after the player
      botMove();
    } else if (winner) {
      // Handle end of round
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

// App Component
const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Board />
    </div>
  );
};

export default App;
