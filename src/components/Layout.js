import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    appBar: {
      backgroundColor: "white",
    },
    logo: {
      flexGrow: "1",
      fontWeight: "bold",
      fontSize: "32px",
      letterSpacing: "0.05em",
      cursor: "pointer",
      textDecoration: "none",
    },
    L: {
      padding: "6px",
      margin: "0 3px 0 0",
      backgroundColor: "#003459",
      color: "white",
      borderRadius: "10px",
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
            <spam className={classes.L}>L</spam>
            ogo
          </Typography>
          <Button
            onClick={() => history.push("/register")}
            color="secondary"
            variant="outlined"
          >
            Register
          </Button>
          <Button
            onClick={() => history.push("/login")}
            className={classes.buttom}
            color="secondary"
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
