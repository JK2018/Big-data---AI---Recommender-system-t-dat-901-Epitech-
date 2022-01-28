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

  return <CustomCard title={"ventes"}></CustomCard>;
};

export default SellsCard;
