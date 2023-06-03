"use client";
import React, { useEffect, useRef, useState } from "react";
import "../../styles/game.css";
import Enemy from "@/components/client/Enemy";
import GameBoard from "@/components/client/GameBoard";
import Player from "@/components/client/Player";
import { createGame } from "@/game/newGame";
import { enabledragdrop } from "@/components/others/dragdrop";
import gsap from "@/components/others/animation";

const Game = () => {
  const gameEl = useRef(null);
  const [state, setState] = useState(null);
  const [hand, setHand] = useState(null);
  const [enemyHealth, setenemyHealth] = useState(100);

  useEffect(() => {
    setState(createGame());
  }, []);

  const playcard = (id, cardEl) => {
    const card = state.hand[0].filter((c) => id != c.id);
    const usedCard = state.hand[0].filter((c) => id == c.id);
    let newState = state;
    newState.hand[0] = card;
    gsap.effects.playCard(cardEl).then(() => {
      setHand(card);
      setState(newState);
    });
    setenemyHealth(enemyHealth - usedCard[0].attack);
  };

  useEffect(() => {
    setHand(state?.hand[0]);
  }, [state]);

  useEffect(() => {
    enabledragdrop(playcard);
  }, [hand]);

  return (
    <div className="game" ref={gameEl}>
      <div className="enemy">
        <Enemy enemyHealth={enemyHealth} />
      </div>

      <GameBoard turn={state?.turn} />

      <div className="player">
        <Player hand={hand} state={state} />
      </div>
    </div>
  );
};

export default Game;
