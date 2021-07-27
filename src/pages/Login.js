import { Button, makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Footer from "../components/Footer";
import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GrainIcon from "@material-ui/icons/Grain";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: "#E4E5DE",
    },
    card: {
      margin: "7em",
      border: "2px solid #000",
      width: "70%",
    },
    title: {
      fontWeight: "bold",
      fontSize: "38px",
      margin: "1em",
    },
    underTitle: {
      margin: "0 0 1em 2em",
    },
    New: {
      fontSize: "22px",
    },
    Create: {
      fontWeight: "bold",
      fontSize: "22px",
      cursor: "pointer",
      textDecoration: "underline",
      margin: "0 0 0 2em",
    },
    BoxIcon: {
      cursor: "pointer",
      margin: "1em 0 0 0 ",
    },
    TextIcon: {
      padding: "0 44px 0 0",
      fontSize: "16px",
      fontWeight: "bold",
    },
    Icons: {
      padding: "0px 10px 0 0",
    },
    label: {
      margin: "1em 0 1em 2em",
      padding: "1em 4em 2em 1em",
      borderTop: "2px solid #000",
      borderLeft: "2px solid #000",
      borderBottom: "2px solid #000",
    },
    input: {
      margin: "1em 0 1em 0",
      padding: "1em 2em 1em 1em",
      borderTop: "2px solid #000",
      borderRight: "2px solid #000",
      borderBottom: "2px solid #000",
      width: "70%",
    },
    forget: {
      margin: "1em 0 1em 2em",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      textDecoration: "underline",
    }, 
    button: {
      padding: "1em",
      margin: "1em 4em 2em 2em",
      borderRadius: "50px",
      backgroundColor: "#000",
      color: "white",
      fontWeight: "bold",
      width: "100%"
    },
  };
});

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <Grid container justifyContent="center">
        <Card className={classes.card} variant="outlined">
          <Grid container>
            <Typography variant="h2" className={classes.title}>
              Log in
            </Typography>
            <Grid container className={classes.underTitle}>
              <Typography variant="h2" className={classes.New}>
                New to Qrates?
              </Typography>

              <Typography variant="h2" className={classes.Create} onClick={() => history.push("/register")}>
                Create an account
              </Typography>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              className={classes.underTitle}
            >
              <Grid container xs={3} className={classes.BoxIcon}>
                <FacebookIcon className={classes.Icons} />
                <Typography className={classes.TextIcon}>
                  Use Facebook
                </Typography>
              </Grid>
              <Grid container xs={3} className={classes.BoxIcon}>
                <TwitterIcon className={classes.Icons} />
                <Typography className={classes.TextIcon}>
                  Use Twitter
                </Typography>
              </Grid>
              <Grid container xs={3} className={classes.BoxIcon}>
                <GrainIcon className={classes.Icons} />
                <Typography className={classes.TextIcon}>
                  Use Soundcloud
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid container>
                <Grid item xs={2}>
                  <Typography className={classes.label}>Email</Typography>
                </Grid>
                <TextField className={classes.input} />
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <Typography className={classes.label}>Password</Typography>
                </Grid>
                <TextField type="password" className={classes.input} />
              </Grid>
            </Grid>
            <Typography className={classes.forget}>
            I FORGOT MY PASSWORD
                </Typography>
                <Button
          size="large"
          variant="contained"
          className={classes.button}
          elevation={0}
        >
          Log In
        </Button>
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
