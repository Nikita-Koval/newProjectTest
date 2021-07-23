import React from "react";
import PropTypes from "prop-types";

const PublicLayout = ({ children }) => (
  <div>
    <h1> Public </h1>
    <div>{children}</div>
  </div>
);

PublicLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PublicLayout;
