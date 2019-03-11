import React from "react";
import PropTypes from "prop-types";

const Control = props => {
  return (
    <React.Fragment>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </React.Fragment>
  );
};

Control.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

export default Control;
