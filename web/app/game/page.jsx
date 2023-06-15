"use client";
import React, { useEffect, useRef, useState } from "react";
import "../../styles/game.css";
import Enemy from "@/components/client/Enemy";
import GameBoard from "@/components/client/GameBoard";
import Player from "@/components/client/Player";
import { addNewCard, createGame } from "@/game/newGame";
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
    const tempState = { ...state };
    tempState.turn += 1;
    setState(tempState);
    setPlayerTurn(tempState.turn % 2);
  };

  //-----------------play the card to attack the enemy
  const playcard = (id, cardEl) => {
    let usedCard = state.hand.filter((c) => id == c.id);
    if (usedCard.length === 0) {
      usedCard = state.board.filter((c) => c.id == id);
    }

    //reduce enemy health
    gsap.effects.playCard(cardEl).then(() => {
      setenemyHealth(enemyHealth - usedCard[0].attack);
    });
  };

  //--------------select card by placing the card on the board
  const selectCard = (id, cardEl) => {
    const card = state.hand.filter((c) => id != c.id);
    const usedCard = state.hand.filter((c) => id == c.id);
    const manaUsed = usedCard[0].cost;

    //remove card from hand
    const clonedCard = cardEl.cloneNode(true);
    clonedCard.class = "card";
    const board = document.querySelector(".board");

    board.appendChild(clonedCard);
    clonedCard.style.transform = "none";
    clonedCard.classList.remove("highlightCard");

    // (##### IMPROVE: setstate part)
    let newState = state;
    let newBoard = newState.board;
    newBoard.push(usedCard[0]);
    newState.board = newBoard;
    newState.hand = card;
    setHand(card);
    setState(newState);

    // reduce mana
    setState((prevState) => {
      const newState = { ...prevState };
      newState.player.currentMana -= manaUsed;
      return newState;
    });
    setPlayerMana((prevState) => prevState - manaUsed);
    enabledragdrop(state, playcard, selectCard);
  };

  useEffect(() => {
    setHand(state?.hand);
    setPlayerMana(state?.player.currentMana);
  }, [state]);

  useEffect(() => {
    enabledragdrop(state, playcard, selectCard);
  }, [hand]);

  //restore mana on changing players turn
  useEffect(() => {
    if (playerTurn % 2 === 0) {
      // Enemy's turn
      const damageDealt = 1;

      setTimeout(() => {
        setState((prevState) => {
          const newState = { ...prevState };
          newState.player.currentHealth -= damageDealt;
          return newState;
        });

        // Delay for another 0.5 seconds and call changeTurn
      }, 500);

      setTimeout(() => {
        changeTurn();
      }, 500);
    } else {
      setState((prevState) => {
        const newState = { ...prevState };
        newState.player.currentMana = Math.min(
          10,
          Math.round(newState.turn / 2)
        );
        setPlayerMana(Math.min(10, Math.round(newState.turn / 2)));
        return newState;
      });
      addNewCard(state);
    }
  }, [playerTurn]);

  useEffect(() => {
    enabledragdrop(state, playcard, selectCard);
  }, [playerMana]);

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
