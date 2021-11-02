import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoogleMap from "../../components/GoogleMap";
import { getMarks } from "../../store/actions/event/event.actions";
import { Spin, Select, DatePicker, Menu, Button } from "antd";
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  SolutionOutlined,
  MehOutlined,
} from "@ant-design/icons";
import "./mainPage.scss";

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { Option } = Select;
  const { RangePicker } = DatePicker;

  const filters = [
    { id: 1, name: "All" },
    { id: 2, name: "Sport" },
    { id: 3, name: "Fun" },
    { id: 4, name: "Other" },
  ];

  const [filterValue, setFilterValue] = useState("");
  const [filterDate, setFilterDate] = useState({});
  const [menuIsVisible, setmenuIsVisible] = useState(true);

  const userName = useSelector((state) => state.user.name);
  const loading = useSelector((state) => state.events.isLoading);

  useEffect(() => {
    dispatch(getMarks(filterValue));
  }, []);

  const handleChange = (filterValue) => {
    setFilterValue(filterValue);
    dispatch(getMarks(filterValue, filterDate.startDate, filterDate.endDate));
  };

  const modelChange = (values) => {
    dispatch(getMarks(filterValue, +values[0]._d === 0, +values[1]._d));
    setFilterDate({ startDate: +values[0]._d, endDate: +values[1]._d });
  };

  const toggleCollapsed = () => {
    setmenuIsVisible(!menuIsVisible);
  };

  return (
    <div>
      <h1>That&apos;s main page</h1>
      <div className="mainWrapper">
        <span className="filtersInput">
          <Select
            id="filter"
            name="filter"
            defaultValue="All"
            onChange={handleChange}
          >
            {filters.map((filter) => (
              <Option key={filter.id} value={filter.name}>
                {filter.name}
              </Option>
            ))}
          </Select>
          <RangePicker
            showTime
            defaultPickerValue={[null, null]}
            onChange={modelChange}
          />
        </span>
        <span className="title">
          Hello, <b>{userName || "Username"}</b> !
        </span>
      </div>
      {loading ? (
        <Spin />
      ) : (
        <div className="mapContainer">
          <div
            className={menuIsVisible ? "menuWrapperClose" : "menuWrapperOpen"}
          >
            <Button
              type="primary"
              onClick={toggleCollapsed}
              style={{ marginBottom: 16 }}
            >
              {React.createElement(
                menuIsVisible ? ArrowRightOutlined : ArrowLeftOutlined
              )}
            </Button>
            <Menu
              defaultSelectedKeys={["1"]}
              mode="inline"
              theme="dark"
              inlineCollapsed={menuIsVisible}
            >
              <Menu.Item
                key="1"
                onClick={() => history.push("/eventlist")}
                icon={<SolutionOutlined />}
              >
                My events
              </Menu.Item>
              <Menu.Item
                key="2"
                onClick={() => history.push("/userlist")}
                icon={<MehOutlined />}
              >
                User List
              </Menu.Item>
            </Menu>
          </div>
          <div className="googleMap">
            <GoogleMap />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
