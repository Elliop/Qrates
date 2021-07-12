import { Button, Typography, makeStyles, Card } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    typo: {
      fontWeight: "bold",
    },
    card: {
      width: "50%",
      padding: "10em 3em",
    },
    button: {
      margin: "1em 0",
    },
  };
});

function WhyCard() {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <Card elevation={0}>
        <Button color="primary" variant="outlined" className={classes.button}>
          WHY QRATES
        </Button>
        <Typography variant="h3" className={classes.typo}>
          Your music on vinyl.
        </Typography>
        <Typography variant="h3" className={classes.typo}>
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
