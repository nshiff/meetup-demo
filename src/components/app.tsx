import { useState } from "react";
import { DEFAULT_CARDS } from "../util/constants";
import Card from "./card";

const App = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <div className="page-container">
      <h1>Meetup Demo</h1>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default App;
