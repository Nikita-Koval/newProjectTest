import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../../store/actions/userProfile/userProfile.actions";
import { Badge, Card, Spin } from "antd";
import "./userPage.scss";

const UserPage = () => {
  const userProfile = useSelector((state) => state.otherUserProfile.data[0]);
  const loading = useSelector((state) => state.otherUserProfile.isLoading);
  const { userid } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile(userid));
  }, []);

  return (
    <div className="userWrapper">
      <h1>UserEvent</h1>
      <Link to="/mainpage" className="linkBtn">
        Main Page
      </Link>
      {loading ? (
        <Spin />
      ) : (
        <Badge.Ribbon text="User profile" color="green">
          <Card title="Name" size="small">
            {userProfile?.name}
          </Card>
          <Card title="Location" size="small">
            {`${userProfile?.country}, ${userProfile?.city}`}
          </Card>
          <Card title="Gender" size="small">
            {userProfile?.gender}
          </Card>
          <Card title="Age" size="small">
            {`${userProfile?.age} years old`}
          </Card>
        </Badge.Ribbon>
      )}
    </div>
  );
};

export default UserPage;
