import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import WhyCard from "../components/WhyCard";
import Image from "../assets/man.png";

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
      vh: "6.3px",
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
          <img src={Image} alt="man" className={classes.man} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
