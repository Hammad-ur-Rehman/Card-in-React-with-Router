import { useEffect, useState } from "react";
import Card from "./card.tsx";
import cardsData from "../Data_temp/cardData.json"; // static import for now
import { Box } from "@mui/material";

interface CardType {
  id: string | number;
  image: string;
  title: string;
  description: string;
}

function CardList() {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    // Simulate fetch
    setCards(cardsData);
  }, []);

  return (
    <div>
      <h1>Card List</h1>
      <Box sx={{ display: "flex", gap: 2, overflowX: "auto", p: 2 }}>
  {cards.map((card) => (
    <Card key={card.id} card={card} />
  ))}
</Box>
    </div>
  );
}

export default CardList;