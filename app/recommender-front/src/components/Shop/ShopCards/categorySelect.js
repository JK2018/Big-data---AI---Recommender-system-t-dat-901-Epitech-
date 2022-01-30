import React from "react";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
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
const CATEGORIES = [
  {
    categoryName: "infos_by_family",
    selectValues: "FAMILLE",
  },
  { categoryName: "infos_by_mailles", selectValues: "MAILLE" },
  { categoryName: "infos_by_univers", selectValues: "UNIVERS" },
];

const CategorySelect = ({ data }) => {
  const [tabValue, setTabValue] = React.useState(0);
  const [selectedKey, setSelectedKey] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
    setSelectedKey(0);
  };

  const handleSelectChange = (event, newValue) => {
    setSelectedKey(event.target.value);
    console.log(newValue);
    console.log("event:", event);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  console.log("cat:", data);

  const categorySelected = data[CATEGORIES[tabValue].categoryName];
  //Select fields
  const selectFields = categorySelected[CATEGORIES[tabValue].selectValues];

  return (
    <Paper style={{ padding: "20px" }}>
      <h3 style={{ marginTop: "0px" }}>Données par catégories</h3>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Familles" {...a11yProps(0)} />
        <Tab label="Mailles" {...a11yProps(1)} />
        <Tab label="Univers" {...a11yProps(2)} />
      </Tabs>
      <BlockContent>
        <InputLabel id="demo-simple-select-helper-label">
          {CATEGORIES[tabValue].selectValues.toLowerCase()} :
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedKey}
          onChange={handleSelectChange}
          sx={{ marginBottom: "25px" }}
        >
          {Object.keys(selectFields).map((key, index) => (
            <MenuItem key={index} value={index}>
              {selectFields[key]}
            </MenuItem>
          ))}
        </Select>
        <LinesWithNumber>
          <Typography sx={{ fontWeight: "bold" }}>Prix moy:</Typography>
          <div>
            {Math.round(categorySelected["AVG_PRIX_NET"][selectedKey] * 100) /
              100}{" "}
            €
          </div>
        </LinesWithNumber>
        <LinesWithNumber>
          <Typography sx={{ fontWeight: "bold" }}>Produits vendus:</Typography>
          <div>
            {Math.round(categorySelected["ITEMS_SOLD"][selectedKey] * 100) /
              100}
          </div>
        </LinesWithNumber>
        <LinesWithNumber>
          <Typography sx={{ fontWeight: "bold" }}>
            Nombre produits diff. proposés:
          </Typography>
          <div>
            {Math.round(
              categorySelected["NB_DIFF_LIBELLE"][selectedKey] * 100
            ) / 100}
          </div>
        </LinesWithNumber>
        <LinesWithNumber>
          <Typography sx={{ fontWeight: "bold" }}>Prix maximum:</Typography>
          <div>
            {Math.round(categorySelected["PRIX_MAX"][selectedKey] * 100) / 100}{" "}
            €
          </div>
        </LinesWithNumber>
        <LinesWithNumber>
          <Typography sx={{ fontWeight: "bold" }}>Prix minimum:</Typography>
          <div>
            {Math.round(categorySelected["PRIX_MIN"][selectedKey] * 100) / 100}{" "}
            €
          </div>
        </LinesWithNumber>
        <LinesWithNumber>
          <Typography sx={{ fontWeight: "bold" }}>Ventes totales:</Typography>
          <div>{Math.round(categorySelected["TOTAL_SALES"][selectedKey])}</div>
        </LinesWithNumber>
      </BlockContent>
    </Paper>
  );
};

export default CategorySelect;
