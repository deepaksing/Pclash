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
  const [playerMana, setPlayerMana] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(true);

  useEffect(() => {
    setState(createGame());
  }, []);

  const changeTurn = () => {
    const tempState = state;
    tempState.turn += 1;
    setState(tempState);
    setPlayerTurn(state.turn % 2);
  };

  const playcard = (id, cardEl) => {
    const card = state.hand[0].filter((c) => id != c.id);
    const usedCard = state.hand[0].filter((c) => id == c.id);

    //remove played card
    let newState = state;
    newState.hand[0] = card;
    gsap.effects.playCard(cardEl).then(() => {
      setHand(card);
      setState(newState);
    });

    //reduce enemy health
    setenemyHealth(enemyHealth - usedCard[0].attack);
  };

  const selectCard = (id, cardEl) => {
    const usedCard = state.hand[0].filter((c) => id == c.id);

    // reduce mana
    const manaUsed = usedCard[0].cost;
    let newState = state;
    newState.player.currentMana = state.player.currentMana - manaUsed;

    setPlayerMana(newState.player.currentMana);
    setState(newState);
    enabledragdrop(state, playcard, selectCard);
  };

  useEffect(() => {
    setHand(state?.hand[0]);
    setPlayerMana(state?.player.currentMana);
  }, [state]);

  useEffect(() => {
    enabledragdrop(state, playcard, selectCard);
  }, [hand]);

  return (
    <div className="game" ref={gameEl}>
      <div className="enemy">
        <Enemy enemyHealth={enemyHealth} />
      </div>

      <GameBoard playerTurn={playerTurn} changeTurn={changeTurn} />

      <div className="player">
        <Player hand={hand} state={state} playerMana={playerMana} />
      </div>
    </div>
  );
};

export default Game;
