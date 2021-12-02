import React from "react";
import Grid from '@mui/material/Grid';
import CustomCard from "../Utils/CustomCard";
import StackGrid from "react-stack-grid";
import FamsGroup from "../Utils/FamsGroup";



const Shop = () => {
  return (
    <>
    <StackGrid
        //columnWidth={width <= 768 ? '100%' : '33.33%'}
        columnWidth={'33.33%'}
        gutterWidth={15}
        gutterHeight={15}
      >
        <div key="key1"><CustomCard /></div>
        <div key="key2"><CustomCard /></div>
        <div key="key3"><CustomCard >
          hdhvaahzvdahzvdhazvdhzvada
          hdhvaahzvdahzvdhazvdhzvada
          hdhvaahzvdahzvdhazvdhzvada
          hdhvaahzvdahzvdhazvdhzvada
          hdhvaahzvdahzvdhazvdhzvada
          hdhvaahzvdahzvdhazvdhzvada
          hdhvaahzvdahzvdhazvdhzvada
          hdhvaahzvdahzvdhazvdhzvada
          hdhvaahzvdahzvdhazvdhzvada
          </CustomCard></div>
        <div key="key4"><CustomCard /></div>
        <div key="key5"><CustomCard /></div>
        <div key="key6"><CustomCard /></div>
        <div key="key7"><FamsGroup /></div>
    </StackGrid>
    </>
  );
};

export default Shop;
