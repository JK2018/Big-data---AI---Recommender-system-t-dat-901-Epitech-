import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const StyledDiv = styled(Card)`
  /*width: 200px;
    height: 200px;*/
`;

const CustomCard = ({ title, children }) => {
  return (
    <div>
      <StyledDiv sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {title}
            </Typography>
            {children}
          </CardContent>
        </Box>
      </StyledDiv>
    </div>
  );
};

export default CustomCard;
