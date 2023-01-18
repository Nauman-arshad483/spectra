import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";

export const CompanyCard = (cardData: any) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(cardData);
  }, [cardData]);

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="noman"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardData && cardData.cardData["Company Name"]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};
