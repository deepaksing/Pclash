import React, { useEffect, useState } from "react";
import "../../styles/gameboard.css";

const GameBoard = ({ turn }) => {
  const [playerTurn, setPlayerTurn] = useState(true);

  useEffect(() => {
    if (turn && turn % 2) setPlayerTurn(true);
    else if (turn && turn % 2 == 0) setPlayerTurn(false);
    else setPlayerTurn(true);
  }, [turn]);
  return (
    <>
      <div className="game_element">
        <div className="enemy_card_thrown"></div>
        <div className="player_card_thrown"></div>
        <div className="game_info_bar">
          {playerTurn ? (
            <div className="endTurn_game" onClick={() => setPlayerTurn(false)}>
              End turn
            </div>
          ) : (
            <div className="enemyTurn_game">Enemy turn</div>
          )}
        </div>
      </div>
    </>
  );
};

export default GameBoard;
