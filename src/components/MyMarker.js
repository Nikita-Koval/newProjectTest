import React from "react";
import PropTypes from "prop-types";

const MyMarker = ({ text, tooltip, hover }) => {
  const handleClick = () => {
    console.log(`You clicked on ${tooltip}`);
  };

  return (
    <div className={hover ? "circle hover" : "circle"} onClick={handleClick}>
      <span className="circleText" title={tooltip}>
        {text}
      </span>
    </div>
  );
};

MyMarker.propTypes = {
  text: PropTypes.string,
  tooltip: PropTypes.elementType,
  hover: PropTypes.bool,
};

export default MyMarker;
