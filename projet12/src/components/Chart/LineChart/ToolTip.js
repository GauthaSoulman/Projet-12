import React from "react";
import {Container, Text}  from "./lineChartStyle.js";
import PropTypes from "prop-types";

export default function ToolTips({ active, payload }) {
    
  if (active) {
    return (
      <Container>
        <Text>{payload[0].value}min</Text>
      </Container>
    );
  }
  return null;
}

ToolTips.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};