import { Button, Typography, makeStyles, Card } from "@material-ui/core";
import React from "react";
import Watching from "../assets/watching.png";

const useStyles = makeStyles((theme) => {
  return {
    ALL: {
      width: "100%",
    },
    typo: {
      fontWeight: "bold",
      margin: "1em 0 15px 0",
    },
    card: {
      padding: "2%",
      textAlign: "center",
    },
    button: {
      padding: "1em 5em",
      margin: "2em 0 0 0",
      borderRadius: "25px",
      backgroundColor: "white",
      color: "black",
      border: "1px solid #000000",
    },
    OUR: {
      border: "2px solid #000000",
      padding: "1%",
      backgroundColor: "white",
    },
    text: {
      fontSize: "20px",
    },
    watch: {
      width: "14%",
      right: "6%",
      position: "absolute",
      maxWidth: "200px",
      bottom: "-275em",
    },
  };
});

function Services() {
  const classes = useStyles();
  return (
    <div className={classes.ALL}>
      <Card elevation={0} className={classes.card}>
        <Typography variant="button" className={classes.OUR}>
          COMMUNITY
        </Typography>
        <Typography variant="h4" className={classes.typo}>
          Join a growing community.
        </Typography>
        <Typography variant="h5" className={classes.text}>
          We’re building a home for the next generation of vinyl lovers.
        </Typography>
        <Typography variant="h5" className={classes.text}>
          Get in front of fans, connect with artists, labels and stores.
        </Typography>
        <Button
          size="large"
          color="primary"
          variant="contained"
          className={classes.button}
          elevation={0}
        >
          BROWSER ARTISTS
        </Button>
        <img src={Watching} alt="Watching" className={classes.watch} />
      </Card>
    </div>
  );
}

export default Services;
