import cardsdetail from "@/content/cardsdetail";
import { v4 as uuidv4 } from "uuid";

export const CardTypes = {
  minion: "minion",
  spell: "spell",
};

export const CardPosition = {
  hand: "hand",
  board: "board",
  enemy: "enemy",
};

export const CardTargets = {
  card: "card",
  hero: "hero",
};

export class Card {
  constructor(props) {
    this.id = uuidv4();
    this.name = props.name;
    this.type = CardTypes[props.type];
    this.cost = props.cost;
    this.target = CardTargets[props.target];
    this.attack = props.attack;
    this.health = props.health;
    this.description = props.description;
    this.turn = props.turn;
    this.position = CardPosition["hand"];
    // this.image = props.image;
  }
}

const findCard = (name) => {
  return cardsdetail.find((card) => card.name === name);
};

export function createCard(name) {
  const baseCard = findCard(name);
  if (!baseCard) throw new Error(`Card not found: ${name}`);
  return new Card(baseCard);
}
