import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import axios from "axios";

import { UserProfile, UserRecommendations } from "./Cards";

const ClientWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Client = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;
  const [searchValue, setSearchValue] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState(null);

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
    // eslint-disable-next-line
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
      </Grid>
    </ClientWrapper>
  );
};
export default Client;
