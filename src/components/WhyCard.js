import { Typography, makeStyles, Card } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    typo: {
      fontWeight: "bold",
    },
    card: {
      padding: "20em 0 0 30px",
    },
    button: {
      margin: "1em 0",
    },
    NO: {
      padding: "2%",      
      border: "2px solid #000000",
    },
    why: {
      margin: "1em 0 2em 0"
    },
  };
});

function WhyCard() {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <Card elevation={0}>
        <div className={classes.why}>
        <Typography variant="button" className={classes.NO}>
        WHY QRATES
        </Typography>          
        </div>

        <Typography variant="h2" className={classes.typo}>
          Your music on vinyl.
        </Typography>
        <Typography variant="h2" className={classes.typo}>
          Without the barriers.
        </Typography>
        <Typography variant="h5" className={classes.button}>
          Full-service pressing, a global retail network, customer support — and
          you keep up to 85% of profits. ↓
        </Typography>
      </Card>
    </div>
  );
}

export default WhyCard;
