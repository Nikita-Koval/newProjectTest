import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./registrationPage.scss";

const RegistrationPage = () => {
  const [login, setLog] = useState("");
  const [password, setPass] = useState("");
  const [repPassword, setRepPass] = useState("");
  const useStyles = makeStyles(() => ({
    textField: {
      margin: "0 1em",
    },
  }));
  const classes = useStyles();

  return (
    <div className="wrapper">
      <p className="logoText">Зарегистрироваться в системе</p>
      <div className="loginContainer">
        Login:
        <TextField
          required
          className={classes.textField}
          id="login"
          name="login"
          onChange={(e) => setLog(e.target.value)}
          type="text"
          value={login}
          placeholder="Enter your login..."
          variant="outlined"
        />
      </div>
      <div className="passwordContainer">
        <TextField
          required
          className={classes.textField}
          id="password"
          name="password"
          onChange={(e) => setPass(e.target.value)}
          type="text"
          value={password}
          placeholder="Enter your password..."
          variant="outlined"
        />
      </div>
      <div className="repeatPasswordContainer">
        <TextField
          className={classes.textField}
          id="repPassword"
          name="repPassword"
          onChange={(e) => setRepPass(e.target.value)}
          type="text"
          value={repPassword}
          placeholder="Repeat your password..."
          width="90%"
          variant="outlined"
        />
      </div>
      <div className="formBlockBtn">
        <Button variant="contained" color="primary" type="submit">
          Зарегистрироваться
        </Button>
        <Link to="/login" className="linkBtn">
          Авторизоваться
        </Link>
      </div>
    </div>
  );
};

export default RegistrationPage;
