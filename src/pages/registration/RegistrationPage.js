import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Col, Row } from "antd";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "./registrationPage.scss";

const RegistrationPage = () => {
  const [login, setLog] = useState("");

  return (
    <div className="wrapper">
      <p className="logoText">Register in the system</p>
      <div className="loginContainer">
        Login:
        <Row>
          <Col span={18} offset={3}>
            <Input
              required
              size="large"
              id="login"
              name="login"
              type="text"
              value={login}
              onChange={(e) => setLog(e.target.value)}
              placeholder="Enter your login..."
              prefix={<UserOutlined />}
            />
          </Col>
        </Row>
      </div>
      <div className="passwordContainer">
        Password:
        <Col span={18} offset={3}>
          <Input.Password
            placeholder="Enter your passport..."
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Col>
      </div>
      <div className="repeatPasswordContainer">
        Repeat password:
        <Col span={18} offset={3}>
          <Input.Password
            id="repPassword"
            name="repPassword"
            placeholder="Repeat your passport..."
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Col>
      </div>
      <div className="formBlockBtn">
        <Button type="primary">Sign up</Button>
        <Link to="/login" className="linkBtn">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default RegistrationPage;
