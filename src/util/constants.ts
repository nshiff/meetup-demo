import { CardModel } from "./application-types";

const DEFAULT_CARDS: CardModel[] = [
  {
    id: 0,
    title: "Set up graham cracker and chocolate",
    created: new Date(2022, 4, 1),
    content: "",
  },
  {
    id: 1,
    title: "Put marshmallow on stick",
    created: new Date(2022, 4, 7),
  },
  {
    id: 2,
    title: "Roast marshmallow",
    created: new Date(2022, 4, 1),
    content: "🪵 🔥 🤔 ",
  },
  {
    id: 3,
    title: "Assemble s'more",
    created: new Date(2022, 4, 1),
    content: "This is when the earlier setup pays off",
  },
  {
    id: 4,
    title: "Enjoy",
    created: new Date(2022, 4, 8),
    content: "🥰 🥰 🥰",
  },
];

export { DEFAULT_CARDS };
