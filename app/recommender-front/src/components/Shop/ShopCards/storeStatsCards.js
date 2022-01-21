import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const LinesWithNumber = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BlockContent = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 20px;
`;

const StoreStatsCards = ({ data = {} }) => {
  return (
    <Grid item xs={12}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} sm={6} md={6}>
          <Paper
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            {/* A améliorer */}
            <BlockContent>
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
            </BlockContent>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <BlockContent>
              <LinesWithNumber>
                <Typography sx={{ fontWeight: "bold" }}>
                  Ventes totales :
                </Typography>
                <div>{Math.round(data.totalSales)}</div>
              </LinesWithNumber>
            </BlockContent>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <BlockContent>
              <LinesWithNumber>
                <Typography sx={{ fontWeight: "bold" }}>
                  Nombre d'objet en stock :
                </Typography>
                <div>{data.nbDiffItems}</div>
              </LinesWithNumber>
              <LinesWithNumber>
                <Typography>Prix moyen par objet :</Typography>
                <div>{Math.round(data.itemPriceAvg * 100) / 100} €</div>
              </LinesWithNumber>
            </BlockContent>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Paper
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <BlockContent>
              <LinesWithNumber>
                <Typography sx={{ fontWeight: "bold" }}>
                  Prix moyen d'un ticket :
                </Typography>
                <div>{Math.round(data.avgTicketPrice * 100) / 100} €</div>
              </LinesWithNumber>
              <LinesWithNumber>
                <Typography>Nombre d'objet moy./ticket :</Typography>
                <div>{Math.round(data.avgQtyItemsPerTicket)}</div>
              </LinesWithNumber>
              <LinesWithNumber>
                <Typography>Moyenne de produit acheté/client :</Typography>
                <div>{Math.round(data.avgQtyItemsBoughtPerClient)}</div>
              </LinesWithNumber>
            </BlockContent>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StoreStatsCards;
