import React from "react";
import Grid from '@mui/material/Grid';
import CustomCard from "../Utils/CustomCard";
import StackGrid from "react-stack-grid";
import FamsGroup from "../Utils/FamsGroup";
import Piechart from "../Utils/Piechart";



const Shop = () => {
  return (
    <>
    <StackGrid
        //columnWidth={width <= 768 ? '100%' : '33.33%'}
        columnWidth={'33.33%'}
        // gutterWidth={15}
        // gutterHeight={15}
      >
        <div key="key1"><FamsGroup /></div>
        <div key="key2"><CustomCard 
        nbreA="👫 Nbre de clients : 20"
        nbreB="📚 Prix moyen des articles : 150"
        nbreC="💰Total des ventes : 150"/></div>
        <div key="key3"><CustomCard 
        nbreA="👫 Nbre de clients : 20"
        nbreB="📚 Prix moyen des articles : 150"
        nbreC="💰Total des ventes : 150"/></div>
        <div key="key4"><CustomCard /></div>
        <div key="key5"><Piechart /></div>
        <div key="key6"><CustomCard /></div>
        <div key="key7"><CustomCard /></div>
        <div key="key8"><CustomCard /></div>
        <div key="key9"><CustomCard /></div>
    </StackGrid>
    </>
  );
};

export default Shop;
