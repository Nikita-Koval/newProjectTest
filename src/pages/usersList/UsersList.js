import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../../store/actions/usersList/usersList.actions";
import { Card, Col, Slider, Select } from "antd";
import "./userList.scss";

const UserListPage = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList.data);

  const [genderFilter, setGenderFilter] = useState("All");
  const [filterAge, setFilterAge] = useState({});

  const genders = [
    { id: 1, name: "All" },
    { id: 2, name: "Male" },
    { id: 3, name: "Female" },
    { id: 4, name: "Other" },
  ];
  const { Option } = Select;

  useEffect(() => {
    dispatch(getUserList(genderFilter));
  }, []);

  const handleChange = (value) => {
    setGenderFilter(value);
    dispatch(getUserList(value, filterAge.start, filterAge.end));
  };

  const onAfterChange = (value) => {
    setFilterAge({ start: value[0], end: value[1] });
    dispatch(getUserList(genderFilter, value[0], value[1]));
    console.log("hook start", filterAge);
  };

  return (
    <div>
      <h1>Users list</h1>
      <div className="sortWrapper">
        Sort by age:
        <Slider
          range={{ draggableTrack: true }}
          defaultValue={[0, 35]}
          onAfterChange={onAfterChange}
        />
        Sort by gender:
        <Select
          onChange={handleChange}
          defaultValue="All"
          id="gender"
          name="gender"
          required
        >
          {genders.map((gender) => (
            <Option key={gender.id} value={gender.name}>
              {gender.name}
            </Option>
          ))}
        </Select>
      </div>

      <Link to="/mainpage" className="linkBtn">
        Main Page
      </Link>
      {usersList.map((user, index) => (
        <Col span={18} offset={3} push={5} key={index}>
          <Card title="User card" style={{ width: 300 }}>
            <b>{user.name}</b>
            <p>{user.age}</p>
            <p>{user.gender}</p>
            <p>{`${user.country}, ${user.city}`}</p>
          </Card>
        </Col>
      ))}
    </div>
  );
};

export default UserListPage;
