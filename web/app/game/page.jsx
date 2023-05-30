"use client";
import React, { useEffect, useState } from "react";
import "../../styles/game.css";
import Enemy from "@/components/client/Enemy";
import GameBoard from "@/components/client/GameBoard";
import Player from "@/components/client/Player";
import { createGame } from "@/game/newGame";

const Game = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(createGame());
  }, []);

  return (
    <div className="game">
      <div className="enemy">
        <Enemy />
      </div>

      <GameBoard turn={state?.turn} />

      <div className="player">
        <Player state={state} />
      </div>
    </div>
  );
};

export default Game;
