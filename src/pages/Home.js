import { Card, makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import WhyCard from "../components/WhyCard";
import Man from "../assets/man.png";
import Artist from "../assets/artist_waves_two.png";
import Paid from "../assets/paid_to_artists.png";
import Crowdfunding from "../components/Crowdfunding";
import PressSell from "../components/PressSell";

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
      border: "2px solid #000000",
    },
    mdlText: {
      padding: "110px 0 97px",
      textAlign: "center",
    },
  };
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <WhyCard />
        </Grid>
        <Grid item xs={8}>
          <img src={Man} alt="man" className={classes.man} />
        </Grid>
        <Grid item xs={8}>
          <img src={Artist} alt="artist waves two" className={classes.artist} />
        </Grid>
        <Grid item xs={4}>
          <img src={Paid} alt="paid to artists" className={classes.paid} />
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.mdlCard}>
            <Typography variant="h5" className={classes.mdlText}>
              No matter where you’re at in your career, we’ve got a production
              model to suit you.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Crowdfunding />
        </Grid>
        <Grid item xs={6}>
          <PressSell />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
