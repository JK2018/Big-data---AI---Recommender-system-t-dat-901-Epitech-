import React from "react";
import Grid from "@mui/material/Grid";
import CustomCard from "../Utils/CustomCard";
// import StackGrid from "react-stack-grid";
// import FamsGroup from "../Utils/FamsGroup";
import axios from "axios";

import {
  StoreStatsCards,
  Chart,
  CategorySelect,
  RoundChart,
} from "./ShopCards";

const Shop = () => {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/getStoreInfos")
      .then(function (response) {
        setData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  console.log(data);
  return (
    <>
      <p style={{ marginBottom: "0", textTransform: "uppercase" }}>Dashboard</p>
      <h1 style={{ marginTop: "0" }}>Mon magasin</h1>
      <Grid container spacing={2}>
        {data && <StoreStatsCards data={data.store_informations} />}
        <Grid item xs={12} sm={12} md={12}>
          {data.sells_nbtickets_by_month && (
            <Chart data={data.sells_nbtickets_by_month} />
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          {data.infos_by_family && (
            <CategorySelect
              data={{
                infos_by_family: data.infos_by_family,
                infos_by_mailles: data.infos_by_mailles,
                infos_by_univers: data.infos_by_univers,
              }}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={7} alignItems="stretch">
          {data.libelle_sell_by_month && (
            <RoundChart data={data.libelle_sell_by_month} />
          )}
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
      {/* <StackGrid
        //columnWidth={width <= 768 ? '100%' : '33.33%'}
        columnWidth={"33.33%"}
        // gutterWidth={15}
        // gutterHeight={15}
      >
        <div key="key1">
          <SellsCard></SellsCard>
        </div>
        <div key="key2">
          <Piechart />
        </div>

        <div key="key4">
          <CustomCard />
        </div>
        <div key="key5">
          <CustomCard />
        </div>
        <div key="key6">
          <CustomCard />
        </div>
        <div key="key7">
          <FamsGroup />
        </div>
        <div key="key8">
          <CustomCard />
        </div>
      </StackGrid> */}
    </>
  );
};

export default Shop;
