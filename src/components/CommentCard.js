import { Button, Typography, makeStyles, Card } from "@material-ui/core";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Artist1 from "../assets/artist1.jpeg";
import Artist2 from "../assets/artist2.jpeg";

const useStyles = makeStyles((theme) => {
  return {
    ALL: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: "#FFF804",
    },
    typo: {
      fontWeight: "bold",
      margin: "1em 0 15px 0",
    },
    button: {
      margin: "1em",
      borderRadius: "25px",
    },
    img: {
      width: "100%",
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
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="button" className={classes.NO}>
            ARTISTS ON QRATES
          </Typography>
          <Typography variant="h5">
            "The response was overwhelming. It made me wonder why I hadn't
            pressed any records on vinyl before now. It felt like something that
            people had been waiting for for a long time."
          </Typography>
          <Typography variant="h5">—SOL</Typography>
          <Button
            disableElevation
            variant="contained"
            color="primary"
            className={classes.button}
          >
            1
          </Button>
          <Button
            disableElevation
            variant="contained"
            color="primary"
            className={classes.button}
          >
            2
          </Button>
        </Grid>
        <Grid item xs={6}>
          <img src={Artist1} alt="Artist1" className={classes.img} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Crowd;
