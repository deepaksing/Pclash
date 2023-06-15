import { createNewGame, addStarterDeck, drawCards } from "./action";

export const createGame = () => {
  let state = createNewGame();
  state = addStarterDeck(state);
  state = drawCards(state, 3);
  return state;
};

export const addNewCard = (state) => {
  state = drawCards(state, 1);
  return state;
};
