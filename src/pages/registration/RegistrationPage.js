import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registration } from "../../store/actions/user.actions";
import { Input, Col, Row, Select, Form, Button, Alert } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  UserOutlined,
} from "@ant-design/icons";
import "./registrationPage.scss";

const genders = ["Male", "Female", "Other"];
const country = ["Russia"];
const cities = ["Taganrog", "Rostov", "Moscow", "Belgorod"];

const RegistrationPage = () => {
  const [isMatch, setIsMatch] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/mainpage");
    }
  }, [isAuthenticated]);

  const { Option } = Select;

  const onFinish = (values) => {
    if (values.password !== values.passwordRepeat) {
      setIsMatch(false);
    } else {
      dispatch(registration(values));
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="wrapperRegistration">
      <p className="logoText">Register in the system</p>
      <Form
        initialValues={{
          remember: true,
          ["gender"]: "Male",
        }}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="loginContainer">
          Email:
          <Row>
            <Col span={18} offset={3}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  required
                  size="large"
                  id="email"
                  name="email"
                  type="email"
                  prefix={<UserOutlined />}
                />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <div className="aboutUser">
          <Row justify="space-around">
            <Col span={6}>
              Your name:
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input id="name" name="name" required />
              </Form.Item>
            </Col>
            <Col span={6}>
              Your age:
              <Form.Item
                name="age"
                rules={[
                  {
                    required: true,
                    message: "Please input your age!",
                  },
                ]}
              >
                <Input id="age" name="age" required />
              </Form.Item>
            </Col>
            <Col span={6}>
              Your gender:
              <Form.Item
                name="gender"
                rules={[
                  {
                    required: true,
                    message: "Please input your gender!",
                  },
                ]}
              >
                <Select id="gender" name="gender" required>
                  {genders.map((gender, index) => (
                    <Option key={`gender-${index}`} value={gender}>
                      {gender}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-around">
            <Col span={11}>
              Your country:
              <Form.Item
                name="country"
                rules={[
                  {
                    required: true,
                    message: "Please input your country!",
                  },
                ]}
              >
                <Select id="country" name="country" required>
                  {country.map((country, index) => (
                    <Option key={`country-${index}`} value={country}>
                      {country}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={11}>
              Your city:
              <Form.Item
                name="city"
                rules={[
                  {
                    required: true,
                    message: "Please input your city!",
                  },
                ]}
              >
                <Select id="city" name="city" required>
                  {cities.map((city, index) => (
                    <Option key={`city-${index}`} value={city}>
                      {city}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </div>
        <div className="passwordContainer">
          Password:
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
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
          </Col>
        </div>
        <div className="repeatPasswordContainer">
          Repeat password:
          <Col span={18} offset={3}>
            <Form.Item
              name="passwordRepeat"
              rules={[
                {
                  required: true,
                  message: "Please repeate your password!",
                },
              ]}
            >
              <Input.Password
                id="passwordRepeat"
                name="passwordRepeat"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
          </Col>
        </div>
        <div className="formBlockBtn">
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
          <Link to="/login" className="linkBtnRegistration">
            Sign in
          </Link>
        </div>
      </Form>
      {!isMatch && (
        <Alert
          message={"Password not match ! Please try again..."}
          type="warning"
          showIcon
          closable
        />
      )}
    </div>
  );
};

export default RegistrationPage;
