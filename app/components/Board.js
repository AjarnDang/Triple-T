// components/Board.js
import { useState } from "react"

const Board = ({ onWin }) => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTurn] = useState(true)
  const [score, setScore] = useState({ player: 0, bot: 0 })

  const checkWinner = (newBoard) => {
    const winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],  // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8],  // columns
      [0, 4, 8], [2, 4, 6]              // diagonals
    ]
    for (let condition of winConditions) {
      const [a, b, c] = condition
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a]
      }
    }
    return null
  }

  const makeMove = (index) => {
    if (board[index] || checkWinner(board)) return
    const newBoard = [...board]
    newBoard[index] = isXTurn ? "X" : "O"
    setBoard(newBoard)
    setIsXTurn(!isXTurn)
    
    const winner = checkWinner(newBoard)
    if (winner) {
      if (winner === "X") {
        setScore({ ...score, player: score.player + 1 })
      } else {
        setScore({ ...score, bot: score.bot + 1 })
      }
      onWin(winner)
    }
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {board.map((value, idx) => (
        <button
          key={idx}
          onClick={() => makeMove(idx)}
          className="w-20 h-20 text-xl border"
        >
          {value}
        </button>
      ))}
    </div>
  )
}

export default Board
