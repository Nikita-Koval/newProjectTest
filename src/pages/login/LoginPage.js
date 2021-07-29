import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./loginPage.scss";
import { Form, Input, Col, Row } from "antd";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import handleLogin from "../../servises/login.servises";
import GoogleLogin from "react-google-login";

const LoginPage = () => {
  const history = useHistory();
  const onFinish = async (values) => {
    const result = await handleLogin(values);
    if (result.data.token) {
      history.push("/mainpage");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const responseGoogle = async (response) => {
    if (response) {
      const values = { email: response.Ts.Et, type: "google" };
      const result = await handleLogin(values);
      if (result.data.token) {
        history.push("/mainpage");
      }
    }
  };

  return (
    <div className="wrapper">
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
    </div>
  );
};

export default LoginPage;
