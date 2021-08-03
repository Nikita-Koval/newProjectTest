import React from "react";
import { useSelector } from "react-redux";

const MainPage = () => {
  const userName = useSelector((state) => state.user.name);
  return (
    <div>
      <h1>That&apos;s main page</h1>
      <p>
        Hello, <b>{userName}</b> !
      </p>
    </div>
  );
};

export default MainPage;
