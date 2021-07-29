import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Redirect to="/mainpage" />
        ) : (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  layout: PropTypes.elementType.isRequired,
};

export default PublicRoute;
