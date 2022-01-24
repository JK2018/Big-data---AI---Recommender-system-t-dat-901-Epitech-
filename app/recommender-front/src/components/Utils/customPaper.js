import React from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

const LinesWithNumber = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTypo = styled(Typography)`
  font-weight: ${(props) => (props.$isBold ? "bold" : "normal")};
`;

const devise = "€";

const CustomPaper = ({
  label,
  value,
  isMoney = true,
  toRound = false,
  isBold = false,
}) => {
  return (
    <LinesWithNumber>
      <StyledTypo $isBold={isBold}>{label} :</StyledTypo>
      {toRound ? (
        <div>
          {Math.round(value * 100) / 100} {isMoney && `${devise}`}
        </div>
      ) : (
        <div>
          {value} {isMoney && `${devise}`}
        </div>
      )}
    </LinesWithNumber>
  );
};

export default CustomPaper;
