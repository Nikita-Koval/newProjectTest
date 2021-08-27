import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as moment from "moment";
import {
  getUserMarks,
  deleteMark,
  changeMark,
} from "../../store/actions/event/event.actions";
import {
  List,
  Button,
  Spin,
  Modal,
  Form,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
} from "antd";
import "./eventList.scss";

const EventList = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.userId);
  const userEvents = useSelector((state) => state.events.data);
  const loading = useSelector((state) => state.events.isLoading);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [itemId, setitemId] = useState("");

  const categories = [
    { id: 1, name: "Sport" },
    { id: 2, name: "Fun" },
    { id: 3, name: "Other" },
  ];

  const { Option } = Select;
  const { RangePicker } = DatePicker;

  useEffect(() => {
    dispatch(getUserMarks(userId));
  }, []);

  const editEvent = (itemId) => {
    setIsModalVisible(true);
    setitemId(itemId);
  };

  const onFinish = (values) => {
    dispatch(changeMark(values, itemId, userId));
    setIsModalVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const deleteEvent = (itemId) => {
    dispatch(deleteMark(itemId, userId));
  };

  return (
    <div>
      <h1>That&apos;s events page</h1>
      <Link to="/mainpage" className="linkBtn">
        Main Page
      </Link>
      {loading ? (
        <Spin />
      ) : (
        <List
          itemLayout="vertical"
          dataSource={userEvents}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={item.title} description={item.type} />
              <p>{item.description}</p>
              <p>{moment(item.timestamp).format("DD/MM/YYYY HH:mm:ss")}</p>
              <div className="buttonWrapper">
                <Button
                  style={{ backgroundColor: "#5c6bc0", borderColor: "black" }}
                  type="primary"
                  onClick={() => editEvent(item._id)}
                  shape="circle"
                >
                  Edit
                </Button>
                <Button
                  style={{ backgroundColor: "#e57373", borderColor: "black" }}
                  type="primary"
                  onClick={() => deleteEvent(item._id)}
                  shape="circle"
                >
                  Del
                </Button>
              </div>
            </List.Item>
          )}
        />
      )}

      <Modal
        title="Edit event..."
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
                  message: "Please input type of the event !",
                },
              ]}
            >
              <Select id="type" name="type">
                {categories.map((type) => (
                  <Option key={type.id} value={type.name}>
                    {type.name}
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
                  message: "Please input title of the event !",
                },
              ]}
            >
              <Input
                id="title"
                name="title"
                placeholder="Enter title of the event..."
              />
            </Form.Item>
          </Col>
          <Col span={18} offset={3}>
            <Form.Item
              name="description"
              rules={[
                {
                  message: "Please input description of the event !",
                },
              ]}
            >
              <Input.TextArea
                id="description"
                name="description"
                placeholder="Enter description of the event..."
              />
            </Form.Item>
          </Col>
          <Col span={18} offset={3}>
            <RangePicker showTime defaultPickerValue={[null, null]} />
          </Col>
          <Col span={18} offset={3} push={5}>
            <div className="buttonsWrapper">
              <Row>
                <Button type="ghost" htmlType="submit" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                  Accept
                </Button>
              </Row>
            </div>
          </Col>
        </Form>
      </Modal>
    </div>
  );
};

export default EventList;
