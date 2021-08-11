import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import GoogleMap from "../../components/GoogleMap";
import { getMarks } from "../../store/actions/event/event.actions";
import { Spin } from "antd";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMarks());
  }, [getMarks]);

  const userName = useSelector((state) => state.user.name);
  const loading = useSelector((state) => state.events.isLoading);

  return (
    <div>
      <h1>That&apos;s main page</h1>
      <p>
        Hello, <b>{userName || "Username"}</b> !
      </p>
      {loading ? <Spin /> : <GoogleMap />}
    </div>
  );
};

export default MainPage;
