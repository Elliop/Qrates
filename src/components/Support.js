import { Typography, makeStyles, Card } from "@material-ui/core";
import React from "react";
import Sup from "../assets/support.jpeg";

const useStyles = makeStyles((theme) => {
  return {
    ALL: {
      borderRight: "1px solid #000000",
      width: "100%",
      height: "100%",
      backgroundColor: "#E280FF",
    },
    typo1: {
      fontWeight: "bold",
      margin: "1em 0 0 0",
    },
    typo2: {
      fontWeight: "bold",
      margin: "0 0 1em 0",
    },
    card: {
      padding: "12% 12% 6% 12%",
      textAlign: "center",
      backgroundColor: "#E280FF",
    },
    button: {
      padding: "1em 5em",
      margin: "5em 0 0 0",
      borderRadius: "25px",
    },
    img: {
      border: "2px solid #000000",
      width: "100%",
      margin: "0 0 6em 0",
    },
    NO: {
      border: "2px solid #000000",
      padding: "2%",
      backgroundColor: "white",
    },
  };
});

function Support() {
  const classes = useStyles();
  return (
    <div className={classes.ALL}>
      <Card elevation={0} className={classes.card}>
        <img src={Sup} alt="Support" className={classes.img} />
        <Typography variant="button" className={classes.NO}>
          CUSTOMER SUPPORT
        </Typography>
        <Typography variant="h4" className={classes.typo1}>
          Here to help,
        </Typography>
        <Typography variant="h4" className={classes.typo2}>
          whenever you need it.
        </Typography>
        <Typography variant="h5">
          Whether you’re an artist in the middle of product, or a fan with
          questions about your order; our team is here to help.
        </Typography>
      </Card>
    </div>
  );
}

export default Support;
