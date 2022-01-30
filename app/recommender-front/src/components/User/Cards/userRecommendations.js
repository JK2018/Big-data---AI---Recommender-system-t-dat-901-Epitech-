import React from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import CustomPaper from "../../Utils/customPaper";

//TODO: rendre ca générique
const BlockContent = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 20px;
`;

const UserRecommendations = ({ currentUser }) => {
  const [loading, setloading] = React.useState(false);
  const [userRecommendations, setUserRecommendations] = React.useState(null);
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  React.useEffect(() => {
    if (!currentUser) {
      setUserRecommendations(null);
      return;
    }
    setloading(true);
    axios
      .get("http://127.0.0.1:5000/getUserRecommendations?userId=" + currentUser)
      .then(function (recommendations) {
        setUserRecommendations(recommendations.data);
        setloading(false);

        console.log(recommendations);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [currentUser]);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
      }}
    >
      <h3 style={{ marginTop: "0px" }}>Recommandations</h3>

      {loading && <CircularProgress />}
      {userRecommendations && !loading && (
        <>
          <Grid container spacing={3} alignItems="stretch">
            <Grid item xs={12} sm={12} md={6}>
              <Paper>
                <BlockContent>
                  <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    aria-label="recommendations-tabs"
                  >
                    <Tab label="NLP" {...a11yProps(0)} />
                    <Tab label="SVD" {...a11yProps(1)} />
                  </Tabs>

                  <ul>
                    {tabValue === 0
                      ? Object.keys(userRecommendations?.nlp[0]).map(
                          (acc, idx) => <li>{acc}</li>
                        )
                      : Object.keys(userRecommendations?.svd[0]).map(
                          (acc, idx) => <li>{acc}</li>
                        )}
                  </ul>
                </BlockContent>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <Paper>
                <BlockContent>
                  <>
                    <CustomPaper
                      label={"Accuracy"}
                      toRound={false}
                      isMoney={false}
                      value={""}
                    />
                    <ul>
                      {tabValue === 0
                        ? Object.keys(userRecommendations?.nlp[0]).map(
                            (acc, idx) => (
                              <li>
                                {acc} : {userRecommendations?.nlp[0][acc]}
                              </li>
                            )
                          )
                        : Object.keys(userRecommendations?.svd[0]).map(
                            (acc, idx) => (
                              <li>
                                {acc} : {userRecommendations?.svd[0][acc]}
                              </li>
                            )
                          )}
                    </ul>
                  </>
                </BlockContent>
              </Paper>
            </Grid>
          </Grid>
        </>
      )}
      {!loading && !userRecommendations && (
        <p style={{ marginLeft: "15px" }}>
          Veuillez selectionner un utilisateur pour avoir un aperçu de ses
          recommendations.
        </p>
      )}
    </div>
  );
};

export default UserRecommendations;
