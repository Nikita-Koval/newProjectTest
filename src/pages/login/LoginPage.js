import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";
import { Login } from "../../store/actions/login.actions";
import { Form, Input, Col, Row, Button, Alert, Spin } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import "./loginPage.scss";

const LoginPage = () => {
  const dispatch = useDispatch();
  const errorText = useSelector((state) => state.user.error);
  const loading = useSelector((state) => state.user.isLoading);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/mainpage");
    }
  }, [isAuthenticated]);

  const onFinish = (values) => {
    dispatch(Login(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const responseGoogle = (response) => {
    if (response) {
      const values = { email: response.Ts.Et, type: "google" };
      dispatch(Login(values));
    }
  };

  return (
    <div className="wrapper">
      {loading && <Spin />}
      <Form
        initialValues={{
          remember: true,
        }}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <p className="logoTextLogin">Log in the system</p>
        <div className="loginContainer">
          <Row>
            <Col span={18} offset={3}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  required
                  size="large"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email..."
                  prefix={<UserOutlined />}
                />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <div className="passwordContainer">
          <Col span={18} offset={3}>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                id="password"
                name="password"
                placeholder="Enter your passport..."
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
          </Col>
        </div>
        <div className="formBlockBtn">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
          <GoogleLogin
            // eslint-disable-next-line no-undef
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            className="googleAuth"
            cookiePolicy={"single_host_origin"}
          />
          <Link to="/registration" className="linkBtn">
            Registration
          </Link>
        </div>
      </Form>
      {errorText && (
        <Alert message={errorText} type="warning" showIcon closable />
      )}
    </div>
  );
};

export default LoginPage;
