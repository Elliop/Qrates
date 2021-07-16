import { Card, makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import WhyCard from "../components/WhyCard";
import Man from "../assets/man.png";
import Artist from "../assets/artist_waves_two.png";
import Paid from "../assets/paid_to_artists.png";
import Crowdfunding from "../components/Crowdfunding";
import PressSell from "../components/PressSell";
import Services from "../components/Services";
import Piano from "../components/Piano";
import Network from "../components/Network";
import Support from "../components/Support";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
    },
    man: {
      border: "2px solid #000000",
      width: "calc(100% - 42px)",
      transform: "rotate(5deg)",
      margin: "10em 3em 0 0",
    },
    artist: {
      border: "2px solid #000000",
      width: "75%",
      transform: "rotate(-5deg)",
      margin: "-45% 0 0 8%",
    },
    paid: {
      width: "60%",
      margin: "15% 20% 0 0",
    },
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
    cont: {
      color: "white",
      backgroundColor: "black",
      padding: "72px 8% 85px",
    },
    support: {
      borderTop: "2px solid #000000",
      borderBottom: "2px solid #000000",
      margin: "5em 0",
    },
  };
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid container>
          <Grid item xs={4}>
            <WhyCard />
          </Grid>
          <Grid item xs={8}>
            <img src={Man} alt="man" className={classes.man} />
          </Grid>
          <Grid item xs={8}>
            <img
              src={Artist}
              alt="artist waves two"
              className={classes.artist}
            />
          </Grid>
          <Grid item xs={4}>
            <img src={Paid} alt="paid to artists" className={classes.paid} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Card elevation={0} className={classes.mdlCard}>
            <Typography variant="h5" className={classes.mdlText}>
              No matter where you’re at in your career, we’ve got a production
              model to suit you.
            </Typography>
          </Card>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Crowdfunding />
          </Grid>
          <Grid item xs={6}>
            <PressSell />
          </Grid>
        </Grid>
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
        <Grid container>
          <Grid item xs={6}>
            <Services />
          </Grid>
          <Grid item xs={6}>
            <Piano />
          </Grid>
        </Grid>
        <Grid container className={classes.support}>
          <Grid item xs={6}>
            <Network />
          </Grid>
          <Grid item xs={6}>
            <Support />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
