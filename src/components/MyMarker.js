import { React, useState } from "react";
import PropTypes from "prop-types";
import * as moment from "moment";
import { Drawer } from "antd";

const MyMarker = ({ text, tooltip, hover, userId, timestamp, type }) => {
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const handleClick = () => {
    console.log(`You clicked on ${tooltip}`);
    setVisible(true);
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
        <div>
          <b>Title:</b> <p>{tooltip}</p>
        </div>
        <div>
          <b>Description:</b> <p>{text}</p>
        </div>
        <div>
          <b>Creator:</b> <p>{userId}</p>
        </div>
        <div>
          <b>Date of creation:</b>
          <p>{moment(timestamp).format("DD/MM/YYYY hh:mm:ss")}</p>
        </div>
        <div>
          <b>Type:</b> <p>{type}</p>
        </div>
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
