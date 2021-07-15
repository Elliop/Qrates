import { Button, Typography, makeStyles, Card } from "@material-ui/core";
import React from "react";
import Serv from "../assets/our_services.jpeg";

const useStyles = makeStyles((theme) => {
  return {
    ALL: {
      width: "100%",
      height: "100%",
    },
    typo1: {
      marginTop: "1em",
      fontWeight: "bold",
      fontSize: "40px",
      letterSpacing: "1.42px",
      color: "transparent",
      WebkitTextStroke: "2px",
      WebkitTextStrokeColor: "black",
    },
    typo: {
      fontWeight: "bold",
      fontSize: "40px",
      letterSpacing: "1.42px",
      color: "transparent",
      WebkitTextStroke: "2px",
      WebkitTextStrokeColor: "black",
    },
    card: {
      padding: "12% 12% 6% 12%",
      textAlign: "center",
    },
    button: {
      padding: "1em 5em",
      margin: "5em 0 0 0",
      borderRadius: "25px",
      backgroundColor: "white",
      color: "black",
      border: "1px solid #000000",
    },
    img: {
      maxWidth: "60%",
      transform: "rotate(-5deg)",
      border: "2px solid #000000",
      margin: "3em 0",
    },
    OUR: {
      border: "2px solid #000000",
      padding: "2%",
      backgroundColor: "white",
    },
    text: {
      fontSize: "20px",
    },
  };
});

function WhyCard() {
  const classes = useStyles();
  return (
    <div className={classes.ALL}>
      <Card elevation={0} className={classes.card}>
        <Typography variant="button" className={classes.OUR}>
          OUR SERVICES
        </Typography>
        <Typography variant="h4" className={classes.typo1}>
          YOU MAKE MUSIC.
        </Typography>
        <Typography variant="h4" className={classes.typo}>
          WE DO THE REST.
        </Typography>
        <img src={Serv} alt="our services" className={classes.img} />
        <Typography variant="h5" className={classes.text}>
          We want you to be able to put all your energy into the creative side
          of making music. So we created a one-stop shop for everything else.
        </Typography>
        <Button
          size="large"
          color="primary"
          variant="contained"
          className={classes.button}
          elevation={0}
        >
          LEARN MORE
        </Button>
      </Card>
    </div>
  );
}

export default WhyCard;
