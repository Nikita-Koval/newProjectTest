import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";
import { createMark, getMarks } from "../store/actions/event/event.actions";
import { Alert, Modal, Form, Input, Select, Col, Button, Row } from "antd";

const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    // return distance between the marker and mouse pointer
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};

const GoogleMap = () => {
  const events = useSelector((state) => state.events.data);
  const userId = useSelector((state) => state.user.userId);
  const errorText = useSelector((state) => state.events.error);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: 0.0, lng: 0.0 });

  const categories = ["Sport", "Fun", "Other"];
  const { Option } = Select;

  const dispatch = useDispatch();

  const handleClick = ({ lat, lng }) => {
    setIsModalVisible(true);
    setCoordinates({ lat, lng });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    const timestamp = new Date().getTime();
    dispatch(createMark({ ...values, userId, timestamp, coordinates }));
    dispatch(getMarks());
    setIsModalVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="App">
      {errorText ? (
        <Alert message={errorText} type="warning" showIcon closable />
      ) : (
        <GoogleMapReact
          bootstrapURLKeys={{
            // remove the key if you want to fork
            // key: "AIzaSyDiKc4HxX5G7EfneIZBN_Hlk2_luoT_yvo",
            language: "en",
            region: "US",
          }}
          onClick={handleClick}
          defaultCenter={{ lat: 51.506, lng: -0.169 }}
          defaultZoom={15}
          distanceToMouse={distanceToMouse}
        >
          {events.map((event, index) => {
            return (
              <MyMarker
                key={index}
                lat={event.lat}
                lng={event.lng}
                text={event.description}
                tooltip={event.title}
                userId={event.userId}
                timestamp={event.timestamp}
                type={event.type}
              />
            );
          })}
        </GoogleMapReact>
      )}
      <Modal
        title="Create event..."
        onCancel={handleCancel}
        visible={isModalVisible}
        footer={null}
      >
        <Form
          initialValues={{
            remember: true,
            ["type"]: "Sport",
          }}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Col span={18} offset={3}>
            <Form.Item
              name="type"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Select id="type" name="type" required>
                {categories.map((type, index) => (
                  <Option key={`type-${index}`} value={type}>
                    {type}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={18} offset={3}>
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input title of the event !",
                },
              ]}
            >
              <Input
                id="title"
                name="title"
                placeholder="Enter title of the event..."
                required
              />
            </Form.Item>
          </Col>
          <Col span={18} offset={3}>
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input description of the event !",
                },
              ]}
            >
              <Input.TextArea
                id="description"
                name="description"
                placeholder="Enter description of the event..."
                required
              />
            </Form.Item>
          </Col>
          <Row>
            <Button type="ghost" htmlType="submit" onClick={handleCancel}>
              Cancel
            </Button>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Send
              </Button>
            </Form.Item>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default GoogleMap;
