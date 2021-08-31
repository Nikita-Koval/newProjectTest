import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getUserProfile } from "../store/actions/userProfile/userProfile.actions";
import * as moment from "moment";
import { Drawer } from "antd";

const MyMarker = ({ text, tooltip, hover, userId, timestamp, type }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const handleClick = () => {
    console.log(`You clicked on ${tooltip}`);
    setVisible(true);
  };

  const toProfileUser = () => {
    history.push(`/userevent/${userId}`);
    dispatch(getUserProfile(userId));
  };

  return (
    <div className={hover ? "circle hover" : "circle"}>
      <span className="circleText" tooltip={tooltip} onClick={handleClick}>
        {tooltip}
      </span>
      <Drawer
        mask={false}
        title="About event..."
        placement="right"
        closable={true}
        visible={visible}
        onClose={onClose}
        maskClosable={true}
        zIndex={10}
      >
        <b>Title:</b> <p>{tooltip}</p>
        <b>Description:</b> <p>{text}</p>
        <b>Creator:</b> <p>{userId}</p>
        <b>Date of creation:</b>
        <p>{moment(timestamp).format("DD/MM/YYYY HH:mm:ss")}</p>
        <b>Type:</b> <p>{type}</p>
        <b style={{ color: "blue" }} onClick={() => toProfileUser(userId)}>
          User profile
        </b>
      </Drawer>
    </div>
  );
};

MyMarker.propTypes = {
  text: PropTypes.string,
  tooltip: PropTypes.elementType,
  hover: PropTypes.bool,
  userId: PropTypes.string,
  timestamp: PropTypes.number,
  type: PropTypes.string,
};

export default MyMarker;
