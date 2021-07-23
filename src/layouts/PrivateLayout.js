import React from "react";
import PropTypes from "prop-types";

const PrivateLayout = ({ children }) => (
  <div>
    <p> PrivateLayout </p>
    <div>{children}</div>
  </div>
);

PrivateLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PrivateLayout;
