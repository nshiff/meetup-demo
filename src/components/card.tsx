import { CardModel } from "../util/application-types";
import { format } from "date-fns";

interface Props {
  card: CardModel;
}
const Card = ({ card }: Props) => {
  const DATE_FORMAT = "MMM L, yyyy";
  return (
    <div className="card">
      <h3>{card.title}</h3>
      <span>
        <>Created: {format(card.created, DATE_FORMAT)}</>
      </span>
      <span>{card.content}</span>
    </div>
  );
};

export default Card;
