// import { Grid } from "@mui/material";
// import { ThemeProvider } from "@emotion/react";
// import { createTheme } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";

import { useCompanies } from "src/api/companies";
import { Company } from "src/types";

import { CompanyCard } from "./Company";
// const theme1 = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1600,
//       xl: 1700,
//     },
//   },
// });
export const Feed = () => {
  const { isLoading, data } = useCompanies();
  const [fetchedData, setFetchedData] = useState<Company[] | undefined>();

  useEffect(() => {
    {
      !isLoading && setFetchedData(data?.slice(0, 18));
    }
    // eslint-disable-next-line no-console
    console.log(data,"data is");
    
  }, [data, isLoading]);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    maxWidth: "1345px",
    color: theme.palette.text.secondary,
    display: "flex",
    flex:1,
    background:"orange",
  

  }));
  return (
    <div>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, lg: 3, xl: 3 }}
        sx={{ maxWidth: "auto", display:"flex", justifyContent:"center", margin:"auto" }}
      >
        {!isLoading &&
          fetchedData &&
          fetchedData.map((card, index) => {
            return (
              <Grid
                xs={12}
                key={index}
                columnSpacing={{ lg: 0 }}
                sx={{
                  display: "flex",
                  maxWidth: "1370px",
                  
                }}
              >
                <Item>
                  <CompanyCard cardData={card} />
                </Item>
              </Grid>
            );
          })}
        {/* </Grid2> */}
      </Grid>
    </div>
  );
};
