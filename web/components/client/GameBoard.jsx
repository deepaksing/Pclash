import React, { useEffect, useState } from "react";
import "../../styles/gameboard.css";
import PlayerCardBoard from "./PlayerCardBoard";

const GameBoard = ({ state, playerTurn, changeTurn }) => {
  return (
    <>
      <div className="game_element">
        <div className="enemy_card_thrown"></div>
        <PlayerCardBoard state={state} />
        <div className="game_info_bar">
          {playerTurn ? (
            <div
              className="endTurn_game"
              onClick={() => {
                changeTurn();
              }}
            >
              End turn
            </div>
          ) : (
            <div
              className="enemyTurn_game"
              onClick={() => {
                changeTurn();
              }}
            >
              Enemy turn
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GameBoard;
