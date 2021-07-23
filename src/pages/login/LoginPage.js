import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./loginPage.scss";

const LoginPage = () => {
  const [login, setTextLog] = useState("");
  const [password, setTextPassword] = useState("");
  const useStyles = makeStyles(() => ({
    textField: {
      margin: "0 1em",
    },
  }));
  const classes = useStyles();

  return (
    <div className="wrapper">
      <p className="logoText">Войти в систему</p>
      <div className="loginContainer">
        <TextField
          required
          className={classes.textField}
          id="login"
          name="login"
          onChange={(e) => setTextLog(e.target.value)}
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
          onChange={(e) => setTextPassword(e.target.value)}
          type="text"
          value={password}
          placeholder="Enter your password..."
          variant="outlined"
        />
      </div>
      <div className="formBlockBtn">
        <Button variant="contained" color="primary" type="submit">
          Войти
        </Button>
        <Link to="/registration" className="linkBtn">
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
