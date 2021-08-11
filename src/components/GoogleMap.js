import React from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";
import MyMarker from "./MyMarker";
import { Alert } from "antd";

const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    // return distance between the marker and mouse pointer
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};

const GoogleMap = () => {
  const handleClick = ({ x, y, lat, lng, event }) => {
    console.log(`x`, x);
    console.log(`y`, y);
    console.log(`lat`, lat);
    console.log(`lng`, lng);
    console.log(`event`, event);
  };
  const events = useSelector((state) => state.events.data);
  const errorText = useSelector((state) => state.events.error);

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
          {events.map((event) => {
            return (
              <MyMarker
                key={event._id}
                lat={event.lat}
                lng={event.lng}
                text={event.description}
                tooltip={event.title}
              />
            );
          })}
        </GoogleMapReact>
      )}
    </div>
  );
};

export default GoogleMap;
