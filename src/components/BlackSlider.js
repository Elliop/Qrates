import { Typography, makeStyles } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => {
  return {
    cont: {
      color: "white",
      backgroundColor: "black",
      padding: "72px 8% 85px",
    },
    text1: {
      fontSize: "20px",
    },
    text2: {
      paddingTop: "10px",
      fontSize: "16px",
      margin: "0 0 0 15%",
      cursor: "pointer",
      textDecoration: "underline",
    },
  };
});

function BlackSliderss() {
  const classes = useStyles();
  return (
    <Grid container className={classes.cont}>
      <Grid item xs={8}>
        <Typography variant="h5" className={classes.text1}>
          Just after straight up vinyl pressing? We do that too. Records are
          shipped in bulk to wherever you need.
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography className={classes.text2} variant="h5">
          START A PRESS ONLY PROJECT
        </Typography>
      </Grid>
    </Grid>
  );
}

export default BlackSliderss;
