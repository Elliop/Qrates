import { makeStyles } from "@material-ui/core";
import WhyCard from "../components/WhyCard";
import Image from "../assets/man.png";

const useStyles = makeStyles((theme) => {
  return {
    man: {
      border: "2px solid #000000",
      width: "100%",
      verticalAlign: "top",
      transform: "rotate(5deg)",
    },
  };
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <WhyCard />
      <img src={Image} alt="man" className={classes.man} />
    </div>
  );
};

export default Home;
