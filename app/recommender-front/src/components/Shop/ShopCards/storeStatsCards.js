import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styled from "styled-components";

// avgQtyItemsBoughtPerClient: 8.489048802948751;
// avgQtyItemsPerTicket: 2.6493393948679285;
// avgTicketPrice: 15.816777713911513;
// itemPriceAvg: 5.97008361580822;
// nbDiffItems: 1484;

const LinesWithNumber = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StoreStatsCards = ({ data = {} }) => {
  return (
    <Grid item xs={12}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper
            style={{
              width: "100%",
              height: 128,
            }}
          >
            {/* A améliorer */}
            <div style={{ padding: "20px" }}>
              <LinesWithNumber>
                <Typography sx={{ fontWeight: "bold" }}>
                  Total de client :
                </Typography>
                <div>{data.totalNbClients}</div>
              </LinesWithNumber>
              <LinesWithNumber>
                <Typography>Dépense moy. par client :</Typography>
                <div>{Math.round(data.clientsSpendOnAvg * 100) / 100} €</div>
              </LinesWithNumber>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            style={{
              width: "100%",
              height: 128,
            }}
          >
            <div style={{ padding: "20px" }}>
              <LinesWithNumber>
                <Typography sx={{ fontWeight: "bold" }}>
                  Ventes totales :
                </Typography>
                <div>{Math.round(data.totalSales)}</div>
              </LinesWithNumber>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            style={{
              width: "100%",
              height: 128,
            }}
          >
            TEST 1
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            style={{
              width: "100%",
              height: 128,
            }}
          >
            TEST 1
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StoreStatsCards;
