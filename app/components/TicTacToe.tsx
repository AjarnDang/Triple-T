"use client";

import React, { useState } from "react";
import styles from "./TicTacToe.module.css";

type Player = "X" | "O" | null;

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<Player>(null);

  const handleClick = (index: number) => {
    // If there’s already a winner or the cell is occupied, skip
    if (winner || board[index]) return;

    // Update the board with the current player’s move
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    // Check if the move created a winning condition
    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      // If no winner, switch turns
      setIsXNext(!isXNext);
    }
  };

  const calculateWinner = (board: Player[]): Player => {
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

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className={styles.container}>
      <h1>Tic Tac Toe</h1>
      <div className={styles.board}>
        {board.map((cell, index) => (
          <button
            key={index}
            className={styles.cell}
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>
      <div className={styles.status}>
        {winner ? (
          <p>Winner: {winner}</p>
        ) : (
          <p>Next Player: {isXNext ? "X" : "O"}</p>
        )}
      </div>
      <button onClick={resetGame} className={styles.resetButton}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
