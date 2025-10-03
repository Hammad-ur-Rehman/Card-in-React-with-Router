import { useParams } from "react-router-dom";
import cardsData from "../Data_temp/cardData.json";

function CardDetail() {
  const { id } = useParams();
  const card = cardsData.find((c) => c.id === id);

  if (!card) {
    return <h2>Card Not Found</h2>;
  }

  return (
    <div>
      <h1>{card.title}</h1>
      <img src={card.image} alt={card.title} />
      <p>{card.description}</p>
    </div>
  );
}

export default CardDetail;
