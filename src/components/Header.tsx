import { Box, Typography } from "@mui/material";
// import { green } from "@mui/material/colors";
import React from "react";

export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        maxWidth: "1345px",
        height: "70px",
        backgroundColor: "#79a3e8",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifySelf: "start",
          textAlign: "start",
          backgroundColor: "#b1b8c4",
        }}
      >
        <Typography>Company Signals</Typography>
      </Box>
    </Box>
  );
};
