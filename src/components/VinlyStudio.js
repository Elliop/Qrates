import { Typography, makeStyles, Card } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
      all: {
          backgroundColor: "#000",
          padding: "2em",
      },
    card: {
        backgroundColor: "#000",
      textAlign: "center",
      padding: "3em",
    },   
    OUR: {
        border: "2px solid #fff",
        padding: "1%",
        backgroundColor: "black",
        color: "white",
        fontSize: "14px",
      },       
    typo1: {
        marginTop: "1em",
        color: "white",
      fontWeight: "bold",
      fontSize: "40px",
    },
    typo2: {
        marginBottom: "1em",
        color: "white",
      fontWeight: "bold",
      fontSize: "40px",
    },
    Text: {
        color: "white",
        padding: "0 12em 1em 12em",
        fontSize: "20px",
    },
  };
});

function WhyCard() {
  const classes = useStyles();
  return (
    <div className={classes.all}>
      <Card elevation={0} className={classes.card}>
        <Typography variant="button" className={classes.OUR}>
        VINYL STUDIO
        </Typography>
        <Typography variant="h2" className={classes.typo1}>
        Make it real with
        </Typography>
        <Typography variant="h2" className={classes.typo2}>
        Qrates Vinyl Studio
        </Typography>
        <Typography variant="h5" className={classes.Text}>
        Design the look and feel of your vinyl and use the profit calculator to immediately see how much your project will cost, and how much you’ll earn.
        </Typography>
      </Card>
    </div>
  );
}

export default WhyCard;