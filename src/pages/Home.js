import { makeStyles, Typography } from "@material-ui/core";
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
import Community from "../components/Community";
import ImgsCard from "../components/ImgsCard";
import ListCard from "../components/ListCard";
import CommentCard from "../components/CommentCard";
import VinlyStudio from "../components/VinlyStudio";
import Footer from "../components/Footer";
import WhiteSlider from "../components/WhiteSlider";
import BlackSlider from "../components/BlackSlider";

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
    support: {
      borderTop: "2px solid #000000",
      borderBottom: "2px solid #000000",
      margin: "4em 0",
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
          <WhiteSlider />
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Crowdfunding />
          </Grid>
          <Grid item xs={6}>
            <PressSell />
          </Grid>
        </Grid>
        <Grid container>
          <BlackSlider />
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
        <Grid item xs={12}>
          <Community />
        </Grid>
        <Grid item xs={12}>
          <ImgsCard />
        </Grid>
        <Grid item xs={12}>
          <ListCard />
        </Grid>
        <Grid item xs={12}>
          <CommentCard />
        </Grid>
        <Grid item xs={12}>
          <VinlyStudio />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
