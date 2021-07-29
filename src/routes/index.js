import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
import PublicLayout from "../layouts/PublicLayout";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { Spin, Space } from "antd";

const LoginPage = lazy(() => import("../pages/login/LoginPage"));
const RegistrationPage = lazy(() =>
  import("../pages/registration/RegistrationPage")
);
const MainPage = lazy(() => import("../pages/mainPage/MainPage"));

const App = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <Space size="middle">
          <Spin size="large" />
        </Space>
      }
    >
      <Switch>
        <PublicRoute
          path="/login"
          layout={PublicLayout}
          component={LoginPage}
        />
        <PublicRoute
          path="/registration"
          layout={PublicLayout}
          component={RegistrationPage}
        />
        <PrivateRoute
          exact
          path="/mainpage"
          layout={PrivateLayout}
          component={MainPage}
        />
        <Redirect from="*" to="/login" />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
