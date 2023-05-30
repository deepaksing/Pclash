import { createNewGame, addStarterDeck, drawCards } from "./action";
export const createGame = () => {
  let state = createNewGame();
  state = addStarterDeck(state);
  state = drawCards(state);
  return state;
};
