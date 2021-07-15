import { Button, Typography, makeStyles, Card } from "@material-ui/core";
import React from "react";
import PressSell from "../assets/press_sell.png";

const useStyles = makeStyles((theme) => {
  return {
    ALL: {
      borderLeft: "1px solid #000000",
      width: "100%",
      height: "100%",
      backgroundColor: "#81836C",
    },
    typo: {
      fontWeight: "bold",
      margin: "1em 0 15px 0",
    },
    card: {
      padding: "12% 12% 6% 12%",
      textAlign: "center",
      backgroundColor: "#81836C",
    },
    button: {
      padding: "1em 5em",
      margin: "5em 0 0 0",
      borderRadius: "25px",
    },
    img: {
      padding: "1em 0",
      maxWidth: "100%",
    },
    NO: {
      border: "2px solid #000000",
      padding: "1%",
      backgroundColor: "white",
    },
  };
});

function Press() {
  const classes = useStyles();
  return (
    <div className={classes.ALL}>
      <Card elevation={0} className={classes.card}>
        <Typography variant="button" className={classes.NO}>
          GET INTO IT
        </Typography>
        <Typography variant="h4" className={classes.typo}>
          Press & Sell
        </Typography>
        <Typography variant="h5">
          Launch your record, sooner. Take pre-orders from fans and we’ll take
          care of the rest.
        </Typography>
        <img src={PressSell} alt="Crowdfunding" className={classes.img} />
        <Button
          size="large"
          color="primary"
          variant="contained"
          className={classes.button}
        >
          LEARN MORE
        </Button>
      </Card>
    </div>
  );
}

export default Press;
