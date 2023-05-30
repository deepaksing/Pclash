import { createCard } from "./Card";

export const createNewGame = () => {
  return {
    turn: 1,
    deck: [],
    drawPile: [],
    hand: [],
    discardPile: [],
    player: {
      maxMana: 10,
      currentMana: 0,
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

export const drawCards = (state) => {
  const newCards = state.drawPile.slice(0, 3);
  const handCards = state.hand;
  handCards.push(newCards);
  state.hand = handCards;

  const newTemp = state.drawPile.slice(3, state.drawPile.length);
  state.drawPile = newTemp;

  return state;
};

// function addCardToHand(state, { card }) {
//   return produce(state, (draft) => {
//     draft.hand.push(card);
//   });
// }
