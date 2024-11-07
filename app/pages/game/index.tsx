// ตัวอย่างโค้ดใน TicTacToe.js
import { useState, useEffect } from 'react';

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winStreak, setWinStreak] = useState(0);
  const [score, setScore] = useState(0);

  const handleClick = (index) => {
    if (!board[index]) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      checkWin(newBoard);
      setPlayer(player === 'X' ? 'O' : 'X');
    }
  };

  const checkWin = (board) => {
    // เขียนโค้ดเช็คการชนะในแบบต่าง ๆ (เช่น row, column, diagonal)
    // อัปเดตคะแนนและ winStreak เมื่อชนะตามเงื่อนไขที่กำหนด
  };

  return (
    <div className="tictactoe">
      {board.map((cell, index) => (
        <button onClick={() => handleClick(index)}>{cell}</button>
      ))}
    </div>
  );
}

export default TicTacToe;
