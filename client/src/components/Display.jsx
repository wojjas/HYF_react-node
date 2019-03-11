import React from "react";
import PropTypes from "prop-types";

const Display = ({ count }) => {
  return <h2>Current Count: {count}</h2>;
};

Display.propTypes = {
  count: PropTypes.number.isRequired
};

export default Display;
