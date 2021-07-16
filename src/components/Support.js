import { Button, Typography, makeStyles, Card } from "@material-ui/core";
import React from "react";
import Crowdfunding from "../assets/crowdfunding.png";

const useStyles = makeStyles((theme) => {
  return {
    ALL: {
      borderRight: "1px solid #000000",
      width: "100%",
      height: "100%",
      backgroundColor: "#FFF804",
    },
    typo: {
      fontWeight: "bold",
      margin: "1em 0 15px 0",
    },
    card: {
      padding: "12% 12% 6% 12%",
      textAlign: "center",
      backgroundColor: "#FFF804",
    },
    button: {
      padding: "1em 5em",
      margin: "5em 0 0 0",
      borderRadius: "25px",
    },
    img: {
      maxWidth: "83%",
    },
    NO: {
      border: "2px solid #000000",
      padding: "1%",
      backgroundColor: "white",
    },
  };
});

function Crowd() {
  const classes = useStyles();
  return (
    <div className={classes.ALL}>
      <Card elevation={0} className={classes.card}>
        <Typography variant="button" className={classes.NO}>
          NO RISK, NO WASTE
        </Typography>
        <Typography variant="h4" className={classes.typo}>
          Crowdfunding
        </Typography>
        <Typography variant="h5">
          Rally your fans and gather pledges. Press the exact number of records
          you need, without having to pay anything upfront.
        </Typography>
        <img src={Crowdfunding} alt="Crowdfunding" className={classes.img} />
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

export default Crowd;
