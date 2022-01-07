import React from "react";
import CustomCard from "../Utils/CustomCard";
import Typography from "@mui/material/Typography";
import axios from "axios";

const SellsCard = () => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/getSellsInformations")
      .then(function (response) {
        setData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <CustomCard title={"ventes"}>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        Nombre de client total: {data.totalNbClients}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        Total des ventes total : {Math.round(data.totalSales * 100) / 100} $
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        Nombre de produit moyen par panier :{" "}
        {Math.round(data.avgQtyItemsPerTicket)}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" component="div">
        Prix moyen d'un ticket : {Math.round(data.avgTicketPrice)}
      </Typography>
    </CustomCard>
  );
};

export default SellsCard;
