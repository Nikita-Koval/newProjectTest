import React from "react";
import PropTypes from "prop-types";

const PublicLayout = ({ children }) => (
  <div>
    <div>{children}</div>
  </div>
);

PublicLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PublicLayout;
