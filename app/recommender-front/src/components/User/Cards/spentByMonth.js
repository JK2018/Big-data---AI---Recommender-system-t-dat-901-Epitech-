import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Paper from "@mui/material/Paper";

//TODO: creér un fichier avec les mois pourrait etre utile
const MONTHS = [
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

const SpentByMonth = ({ spent }) => {
  const [chartData, setChartData] = React.useState(null);

  React.useEffect(() => {
    console.log(spent);
    const data = MONTHS.map((month, idx) => {
      return { name: MONTHS[idx], spent: spent["PRIX_NET"][idx + 1] || 0 };
    });
    setChartData(data);
  }, []);

  console.log("chartData", chartData);
  return (
    <Paper style={{ padding: "20px" }}>
      <h4 style={{ marginTop: "0px" }}>Dépenses par mois</h4>

      {spent ? (
        <div style={{ height: "380px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />

              <Tooltip
                formatter={(value, name, props) => [
                  `${value} €`,
                  `Total dépensé`,
                ]}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="spent"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p>Pas de données exploitables.</p>
      )}
    </Paper>
  );
};

export default SpentByMonth;
