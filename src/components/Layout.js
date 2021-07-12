import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    items: {
      flexGrow: "1",
      marginLeft: "28%",
    },
    root: {
      display: "flex",
    },
    appBar: {
      backgroundColor: "white",
    },
    logo: {
      fontWeight: "bold",
      fontSize: "25px",
      cursor: "pointer",
      padding: "6px",
      backgroundColor: "#000",
      borderRadius: "15px",
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
        position="fixed"
        className={classes.appBar}
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Typography
            onClick={() => history.push("/")}
            className={classes.logo}
          >
            Q
          </Typography>
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
