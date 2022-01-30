import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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

const BaseChart = ({ data, line }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={600}
        height={340}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {line}
      </LineChart>
    </ResponsiveContainer>
  );
};

const Piechart = ({ data }) => {
  const [tabValue, setTabValue] = React.useState(0);
  const [chartData, setChartData] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  React.useEffect(() => {
    const newData = month.map((month, index) => {
      return {
        name: month,
        nbTicket: data.NB_TICKETS[index],
        ventes: Math.round(data.GRAND_TOTAL[index]),
      };
    });
    setChartData(newData);
    // eslint-disable-next-line
  }, []);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Paper style={{ padding: "20px" }}>
      <h3 style={{ marginTop: "0px" }}>Aperçu de l'année</h3>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Ventes totales" {...a11yProps(0)} />
          <Tab label="Nombre de ticket de vente" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Box sx={{ paddingTop: "20px", height: "500px" }}>
        {tabValue === 1 ? (
          <BaseChart
            data={chartData}
            line={
              <Line
                type="monotone"
                dataKey="nbTicket"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            }
          />
        ) : (
          <BaseChart
            data={chartData}
            line={<Line type="monotone" dataKey="ventes" stroke="#82ca9d" />}
          />
        )}
      </Box>
    </Paper>
  );
};

Piechart.propTypes = {};

export default Piechart;
