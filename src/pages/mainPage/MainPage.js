import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import GoogleMap from "../../components/GoogleMap";
import { getMarks } from "../../store/actions/event/event.actions";
import { Spin, Select, DatePicker } from "antd";
import "./mainPage.scss";

const MainPage = () => {
  const dispatch = useDispatch();
  const { Option } = Select;
  const { RangePicker } = DatePicker;

  const filters = ["All", "Sport", "Fun", "Other"];

  const [filterValue, setFilterValue] = useState("");
  const [filterDate, setFilterDate] = useState({});
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
    dispatch(getMarks(filterValue, +values[0]._d, +values[1]._d));
    setFilterDate({ startDate: +values[0]._d, endDate: +values[1]._d }); //start end
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
            {filters.map((filter, index) => (
              <Option key={`filter-${index}`} value={filter}>
                {filter}
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
      {loading ? <Spin /> : <GoogleMap />}
    </div>
  );
};

export default MainPage;
