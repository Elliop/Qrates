import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    appBar: {
      width: "100%",
      marginLeft: drawerWidth,
    },
    date: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
  };
});

export default function Layout({ children }) {
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
          <Typography className={classes.date}>My Logo</Typography>
          <Button>Register</Button>
          <Button>Login</Button>
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
