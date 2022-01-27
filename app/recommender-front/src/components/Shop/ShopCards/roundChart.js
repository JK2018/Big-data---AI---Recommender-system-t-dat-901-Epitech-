import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import styled from "styled-components";

const DefaultTooltip = styled.div`
  margin: 0px;
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(204, 204, 204);
  white-space: nowrap;

  p {
    margin: 0;
  }

  ul {
    padding: 0px;
    margin: 0px;
    li {
      display: block;
      padding-top: 4px;
      padding-bottom: 4px;
      color: rgb(136, 132, 216);
    }
  }
`;

const month = [
  "Jan",
  "Fév",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Sep",
  "Oct",
  "Nov",
  "Déc",
];

const CustomTooltip = ({ active, payload, label }) => {
  console.log(payload);
  if (active && payload && payload.length) {
    return (
      <DefaultTooltip>
        <p className="label">{`${payload[0].payload.libelle}`}</p>
        <ul>
          <li>Quantité vendue : {payload[0].payload.quantity}</li>
        </ul>
      </DefaultTooltip>
    );
  }

  return null;
};

const RoundChart = ({ data }) => {
  console.log(data);
  const [chartData, setChartData] = React.useState({});

  React.useEffect(() => {
    const newData = month.map((month, index) => {
      return {
        name: month,
        quantity: data.QTY[index],
        libelle: data.LIBELLE[index],
      };
    });
    setChartData(newData);
    console.log("round: ", newData);
    // eslint-disable-next-line
  }, []);

  return (
    <Paper style={{ padding: "20px" }}>
      <h3 style={{ marginTop: "0px" }}>Meilleure vente/mois</h3>
      <Box sx={{ paddingTop: "20px", height: "300px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <Bar dataKey="quantity" fill="#8884d8" />
            <Tooltip content={<CustomTooltip />} />
            {/* <Tooltip /> */}
            <XAxis dataKey="name" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default RoundChart;
