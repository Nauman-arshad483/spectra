import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";

export const CompanyCard = (cardData: any) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(cardData);
  }, [cardData]);

  return (
    <Card
      sx={{
        maxWidth: "1345px",
        height: "170px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#a1b8c4",
        m: ".5vmax",
      }}
    >
      <CardMedia
        sx={{ height: 40, display: "flex", flexDirection: "column" }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="noman"
      />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          {cardData && cardData.cardData["Company Name"]}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: "flex", flexDirection: "column" }}
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
