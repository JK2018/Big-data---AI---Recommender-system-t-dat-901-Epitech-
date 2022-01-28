import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import styled from "styled-components";

const TabContextDiv = styled.div`
  /*width: 500px;
    height: 500px;*/
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  background-color: #fff;
`;

const FamsGroup = (props) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getMailles = () => {
    console.log("getMailles");
  };

  const [state, setstate] = useState("");

  useEffect(() => {
    getMailles();
  }, []);

  return <TabContextDiv></TabContextDiv>;
};

FamsGroup.propTypes = {};

export default FamsGroup;
