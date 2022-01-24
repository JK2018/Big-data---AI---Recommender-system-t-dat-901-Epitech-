import React from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";

import styled from "styled-components";

import CustomPaper from "../../Utils/customPaper";

const BlockContent = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 20px;
`;

const UserProfile = ({ currentUser }) => {
  console.log("currentUser", currentUser);
  const [loading, setloading] = React.useState(false);
  const [userData, setUserData] = React.useState(null);

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
        setloading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [currentUser]);

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
            <Grid item xs={12} sm={6} md={6}>
              <Paper
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <BlockContent>
                  <CustomPaper
                    label={"Prix max du panier"}
                    toRound={true}
                    isMoney={true}
                    value={userData.nb_tot_paniers}
                  />
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
