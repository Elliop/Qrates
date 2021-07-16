import { Typography, makeStyles, Card } from "@material-ui/core";
import React from "react";
import Store from "../assets/store_logo.png";

const useStyles = makeStyles((theme) => {
  return {
    ALL: {
      borderRight: "1px solid #000000",
      width: "100%",
      height: "100%",
      backgroundColor: "#000000",
    },
    typo1: {
      fontWeight: "bold",
      margin: "1em 0 0 0",
      color: "white",
    },
    typo2: {
      fontWeight: "bold",
      margin: "0 0 1em 0",
      color: "white",
    },
    card: {
      padding: "12% 12% 6% 12%",
      textAlign: "center",
      backgroundColor: "#000000",
    },
    button: {
      padding: "1em 5em",
      margin: "5em 0 0 0",
      borderRadius: "25px",
    },
    img: {
      width: "100%",
      margin: "0 0 6em 0",
    },
    NO: {
      border: "2px solid #000000",
      padding: "2%",
      backgroundColor: "white",
    },
    Text: {
      color: "white",
    },
  };
});

function Network() {
  const classes = useStyles();
  return (
    <div className={classes.ALL}>
      <Card elevation={0} className={classes.card}>
        <img src={Store} alt="store logo" className={classes.img} />
        <Typography variant="button" className={classes.NO}>
          RETAIL NETWORK
        </Typography>
        <Typography variant="h4" className={classes.typo1}>
          Worldwide distro,
        </Typography>
        <Typography variant="h4" className={classes.typo2}>
          demystified.
        </Typography>
        <Typography variant="h5" className={classes.Text}>
          Get direct access to over 150 of our retail partners across the globe.
        </Typography>
      </Card>
    </div>
  );
}

export default Network;
