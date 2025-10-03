import { Card as MuiCard, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

interface CardProps {
  card: {
    id: string | number;
    image: string;
    title: string;
    description: string;
  };
}

function Card({ card }: CardProps) {
  return (
    <MuiCard sx={{ width: 300, margin: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="160"
        image={card.image}
        alt={card.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {card.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {card.description}
        </Typography>
        <Button
          component={Link}
          to={`/card/${card.id}`}
          size="small"
          color="primary"
          sx={{ mt: 1 }}
        >
          View Details
        </Button>
      </CardContent>
    </MuiCard>
  );
}

export default Card;
