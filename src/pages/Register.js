import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/Footer";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: "#E4E5DE",
    },
    card: {
      margin: "10em",
      border: "2px solid #000",
    },
    title: {
      fontWeight: "bold",
      fontSize: "40px",
    },
  };
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Card className={classes.card} variant="outlined">
          <Grid container>
            <CardContent>
            <Typography variant="h2" className={classes.title}>
            Create an account
        </Typography>
            </CardContent>
          </Grid>
        </Card>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;