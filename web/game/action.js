import { createCard } from "./Card";

export const createNewGame = () => {
  return {
    turn: 1,
    deck: [],
    drawPile: [],
    hand: [],
    board: [],
    discardPile: [],
    player: {
      maxMana: 10,
      currentMana: 1,
      maxHealth: 29,
      currentHealth: 29,
    },
  };
};

export const addStarterDeck = (state) => {
  const deck = [
    createCard("Murloc Raider"),
    createCard("Bloodfen Raptor"),
    createCard("River crocolisk"),
    createCard("Fireball"),
    createCard("Raid Leader"),
    createCard("Magma Rager"),
    createCard("Novice Engineer"),
    createCard("Nightblade"),
    createCard("wolfrider"),
    createCard("Sheildmasta"),
  ];

  state.deck = deck;

  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  state.drawPile = deck;

  return state;
};

export const drawCards = (state, quantity) => {
  if (state) {
    const handCards = state.hand;
    const newTemp = state.drawPile.slice(quantity, state.drawPile.length);

    for (let i = 0; i < quantity; i++) {
      handCards.push(state.drawPile[i]);
    }

    state.hand = handCards;
    state.drawPile = newTemp;

    return state;
  }
};
