import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Cat from "../assets/cat.jpeg";
import Dabe from "../assets/dabe.jpeg";
import Eed from "../assets/eed.jpeg";
import Girl from "../assets/girl.jpeg";
import Man from "../assets/man-disk.jpeg";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      marginTop: "2em",
    },
    img: {
      width: "100%",
      border: "2px solid #000000",
      float: "left",
      height: "100%",
    },
  };
});

const ImgsCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <img src={Man} alt="man" className={classes.img} />
        </Grid>
        <Grid item sm container>
          <Grid container>
            <Grid item xs={6}>
              <img src={Dabe} alt="Dabe" className={classes.img} />
            </Grid>
            <Grid item xs={6}>
              <img src={Eed} alt="EEd" className={classes.img} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <img src={Cat} alt="Cat" className={classes.img} />
            </Grid>
            <Grid item xs={6}>
              <img src={Girl} alt="girl" className={classes.img} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ImgsCard;
