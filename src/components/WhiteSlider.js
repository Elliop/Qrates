import { Typography, makeStyles, Card } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    mdlCard: {
      width: "100%",
      borderTop: "2px solid #000000",
      borderBottom: "2px solid #000000",
      borderRadius: "0px",
    },
    mdlText: {
      padding: "110px 0 97px",
      textAlign: "center",
    },
  };
});

function WhiteSlider() {
  const classes = useStyles();
  return (
    <Card elevation={0} className={classes.mdlCard}>
      <Typography variant="h5" className={classes.mdlText}>
        No matter where you’re at in your career, we’ve got a production
        model to suit you.
      </Typography>
    </Card>
  );
}

export default WhiteSlider;
