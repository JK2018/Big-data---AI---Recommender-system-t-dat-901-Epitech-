import React from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CircularProgress from "@mui/material/CircularProgress";

import styled from "styled-components";

import CustomPaper from "../../Utils/customPaper";
import SpentByMonth from "./spentByMonth";

const BlockContent = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 20px;
`;

const CATEGORIES = [
  "top_famille_achetes",
  "top_maille_achetes",
  "top_univers_achetes",
];

const UserProfile = ({ currentUser }) => {
  const [loading, setloading] = React.useState(false);
  const [userData, setUserData] = React.useState(null);
  const [tabValue, setTabValue] = React.useState(0);

  React.useEffect(() => {
    if (!currentUser) {
      setUserData(null);
      return;
    }
    setloading(true);
    axios
      .get("http://127.0.0.1:5000/getUserData?userId=" + currentUser)
      .then(function (response) {
        setUserData(response.data);
        console.log(response.data);
        setloading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [currentUser]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const categoriesSelected =
    userData && JSON.parse(userData[CATEGORIES[tabValue]]);
  console.log(userData);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
      }}
    >
      <h3 style={{ marginTop: "0px" }}>
        Profil de l'utilisateur {currentUser}
      </h3>

      {loading && <CircularProgress />}
      {userData && !loading && (
        <>
          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} sm={12} md={6}>
              <Paper>
                <BlockContent>
                  <CustomPaper
                    label={"Nombre total de panier"}
                    isBold={true}
                    isMoney={false}
                    value={userData.nb_tot_paniers}
                  />
                  <CustomPaper
                    label={"Prix max du panier"}
                    toRound={true}
                    isMoney={true}
                    value={userData.prix_panier_max}
                  />
                  <CustomPaper
                    label={"Prix min du panier"}
                    toRound={true}
                    isMoney={true}
                    value={userData.prix_panier_min}
                  />
                  <CustomPaper
                    label={"Prix moyen du panier"}
                    toRound={true}
                    isMoney={true}
                    value={userData.prix_panier_moy}
                  />
                </BlockContent>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Paper style={{ height: "100%" }}>
                <BlockContent>
                  <CustomPaper
                    label={"Dépenses totales"}
                    toRound={true}
                    isBold={true}
                    isMoney={true}
                    value={userData.total_depenses}
                  />
                  <CustomPaper
                    label={"Prix article acheté max"}
                    toRound={true}
                    isMoney={true}
                    value={userData.prix_article_achete_max}
                  />
                </BlockContent>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <SpentByMonth spent={JSON.parse(userData.depenses_par_moi)} />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Paper>
                <BlockContent>
                  <h4 style={{ marginTop: "0px" }}>Top acheté par catégorie</h4>
                  <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Familles" {...a11yProps(0)} />
                    <Tab label="Mailles" {...a11yProps(1)} />
                    <Tab label="Univers" {...a11yProps(2)} />
                  </Tabs>

                  <ul>
                    {Object.keys(categoriesSelected).map((key, idx) => (
                      <li>
                        {key} : {categoriesSelected[key]} produits achetes
                      </li>
                    ))}
                  </ul>
                </BlockContent>
              </Paper>
            </Grid>
          </Grid>
        </>
      )}
      {!loading && !userData && (
        <p style={{ marginLeft: "15px" }}>
          Veuillez selectionner un utilisateur pour avoir le détail de ses
          informations.
        </p>
      )}
    </div>
  );
};

export default UserProfile;
