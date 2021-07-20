import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "../assets/qrates-logo.svg";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    items: {
      flexGrow: "1",
      marginLeft: "28%",
    },
    appBar: {
      backgroundColor: "white",
    },
    logo: {
      width: "39px",
      cursor: "pointer",
      margin: "1em",
    },
    buttom: {
      margin: "0 1%",
    },
    toolbar: theme.mixins.toolbar,
  };
});

export default function Layout({ children }) {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar
        position="absolute"
        className={classes.appBar}
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <img
            onClick={() => history.push("/")}
            src={Logo}
            alt="logo"
            className={classes.logo}
          />
          <div className={classes.items}>
            <Button className={classes.buttom}>DISCOVER</Button>
            <Button className={classes.buttom}>SEARCH</Button>
            <Button className={classes.buttom}>WHY QRATES</Button>
            <Button className={classes.buttom}>CART</Button>
          </div>
          <Button
            onClick={() => history.push("/register")}
            color="primary"
            variant="outlined"
          >
            Register
          </Button>
          <Button
            onClick={() => history.push("/login")}
            className={classes.buttom}
            color="primary"
            variant="contained"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* main content */}
      <div>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
