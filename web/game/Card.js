import cardsdetail from "@/content/cardsdetail";

export const CardTypes = {
  minion: "minion",
  spell: "spell",
};

export const CardTargets = {
  card: "card",
  hero: "hero",
};

export class Card {
  constructor(props) {
    // this.id = uuid();
    this.name = props.name;
    this.type = CardTypes[props.type];
    this.cost = props.cost;
    this.target = CardTargets[props.target];
    this.attack = props.attack;
    this.health = props.health;
    this.description = props.description;
    this.turn = props.turn;
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
