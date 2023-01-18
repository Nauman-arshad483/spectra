// import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";

import { useCompanies } from "src/api/companies";
import { Company } from "src/types";

import { CompanyCard } from "./Company";

export const Feed = () => {
  const { isLoading, data } = useCompanies();
  const [fetchedData, setFetchedData] = useState<Company[] | undefined>();

  useEffect(() => {
    {
      !isLoading && setFetchedData(data?.slice(0, 8));
    }
  }, [data, isLoading]);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Grid container spacing={2}>
        {!isLoading &&
          fetchedData &&
          fetchedData.map((card, index) => {
            return (
              <Grid key={index}>
                <Item>
                  <CompanyCard cardData={card}></CompanyCard>
                </Item>
              </Grid>
            );
          })}
        {/* </Grid2> */}
      </Grid>
    </div>
  );
};
