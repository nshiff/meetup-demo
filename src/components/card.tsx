import { CardModel } from "../util/application-types";
import { format } from "date-fns";

interface Props {
  card: CardModel;
}
const Card = ({ card }: Props) => {
  const DATE_FORMAT = "MMM d, yyyy";
  return (
    <div className="card">
      <h3>{card.title}</h3>
      <span className="_created">
        <>Created: {format(card.created, DATE_FORMAT)}</>
      </span>
      <div className="_content">{card.content}</div>
    </div>
  );
};

export default Card;
