import React from "react";
import { Box } from "./Box";
import "./Board.css";

export const Board = ({ board, onClick, isFinished, winner }) => {
  const xIsNext =
    board.filter((box) => box === "X").length ===
    board.filter((box) => box === "O").length;

  const handleBoxClick = (idx) => {
    if (isFinished || board[idx] !== null) {
      return;
    }
    onClick(idx);
  };

  const getWinnerMessage = () => {
    if (isFinished) {
      if (winner === "X") {
        return "Joueur X a gagné!";
      } else if (winner === "O") {
        return "Joueur O a gagné!";
      }
    }
    return "";
  };

  const moves = board
    .map((box, idx) => ({ box, idx }))
    .filter(({ box }) => box !== null)
    .map(({ idx }, move) => ({ move: move + 1, idx }));

  if (!isFinished && !xIsNext) {
    // It's O's turn and the game isn't finished
    const oMove = findBestMove(board);
    onClick(oMove);
  }

  return (
    <div className="flex flex-row">
      <div className="mx-auto">
        <div className={`scorebis x-scorebis ${xIsNext ? "" : "inactive"}`}>
          Status - Joueur X :{" "}
          {moves
            .filter(({ move }) => move % 2 === 1)
            .map(({ move, idx }) => (
              <div key={move}>
                Coup {move}: case {idx + 1}
              </div>
            ))}
        </div>
      </div>
      <div className="board mx-auto">
        {board.map((value, idx) => {
          return (
            <Box key={idx} value={value} onClick={() => handleBoxClick(idx)} />
          );
        })}
      </div>
      <div className="right mx-auto">
        <div className={`scorebis o-scorebis ${xIsNext ? "inactive" : ""}`}>
          Status - Joueur O :{" "}
          {moves
            .filter(({ move }) => move % 2 === 0)
            .map(({ move, idx }) => (
              <div key={move}>
                Coup {move}: case {idx + 1}
              </div>
            ))}
        </div>
      </div>
     
      <p><span>{getWinnerMessage()}</span></p>
      
    </div>
  );
};

const findBestMove = (currentBoard) => {
  // You can implement any AI algorithm here to find the best move
  // For simplicity, this function just returns the first empty box it finds
  for (let i = 0; i < currentBoard.length; i++) {
    if (currentBoard[i] === null) {
      return i;
    }
  }
};