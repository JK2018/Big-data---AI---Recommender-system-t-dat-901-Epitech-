import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import styled from "styled-components";
import axios from "axios";

import { UserProfile, UserRecommendations } from "./Cards";

const ClientWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlockContent = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  padding: 20px;
`;

const Client = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const [searchValue, setSearchValue] = React.useState("");
  const [userRecoLoading, setUserRecoLoading] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState(null);
  const [currentUserRecommandations, setCurrentUserRecommandations] =
    React.useState(null);

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await axios(
        "http://127.0.0.1:5000/getUserIds?searchId=" + searchValue
      ); // For demo purposes.
      const listIds = response.data.map((client, idx) => {
        return { id: client["CLI_ID"]["0"] };
      });
      console.log(listIds);
      if (active) {
        setOptions([...listIds]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleInputChange = (event, value) => {
    setOptions([]);
    setCurrentUser(null);
    (async () => {
      const response = await axios(
        "http://127.0.0.1:5000/getUserIds?searchId=" + value
      ); // For demo purposes.
      const listIds = response.data.map((client, idx) => {
        return { id: client["CLI_ID"]["0"] };
      });
      console.log(listIds);
      setOptions([...listIds]);
    })();

    setSearchValue(value);
  };

  // console.log(currentUserData);
  console.log(currentUserRecommandations);

  return (
    <ClientWrapper>
      <p style={{ marginBottom: "0", textTransform: "uppercase" }}>Dashboard</p>
      <h1 style={{ marginTop: "0" }}>Clients</h1>
      <Autocomplete
        id="asynchronous-demo"
        sx={{ width: 300, backgroundColor: "white" }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        getOptionLabel={(option) => option.id}
        options={options}
        onInputChange={handleInputChange}
        onChange={(event, value) => {
          console.log("on change", value);
          value ? setCurrentUser(value.id) : setCurrentUser(null);
        }}
        noOptionsText={"Utilisateur introuvable."}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Utilisateur"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
      <Grid item xs={12} sx={{ marginTop: "25px" }}>
        <UserProfile currentUser={currentUser} />
        <UserRecommendations currentUser={currentUser} />
        {/* <div>
          <h3 style={{ marginTop: "0px" }}>Recommandations client</h3>
          {userRecoLoading && <CircularProgress />}
          {currentUserRecommandations && !userRecoLoading && (
            <Grid container spacing={3} alignItems="stretch">
              <Grid item xs={12} sm={6} md={6}>
                <Paper
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <BlockContent>
                    <p>Object recommandés :</p>
                  </BlockContent>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Paper
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <BlockContent>
                    <p>accuracy: </p>
                  </BlockContent>
                </Paper>
              </Grid>
            </Grid>
          )}
        </div> */}
      </Grid>
    </ClientWrapper>
  );
};
export default Client;
