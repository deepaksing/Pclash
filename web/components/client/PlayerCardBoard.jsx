import React from "react";
import "../../styles/gameboard.css";
import BoardCards from "./BoardCards";

const PlayerCardBoard = ({ state }) => {
  return (
    <div className="player_card_thrown">
      <div className="board">
        <BoardCards state={state} />
      </div>
    </div>
  );
};

export default PlayerCardBoard;
