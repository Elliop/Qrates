import { Button, Typography, makeStyles, Card } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import Sample1 from "../assets/sample_4dilla.png";
import Sample2 from "../assets/sample_all_india.png";
import Sample3 from "../assets/sample_black_country_disco.png";
import Sample4 from "../assets/sample_blarney.png";
import Sample5 from "../assets/sample_bombay.png";
import Sample6 from "../assets/sample_female.png";
import Sparkle from "../assets/sparkle.png";
import Dollar from "../assets/dollar.png";

const useStyles = makeStyles((theme) => {
  return {
    all: {
      backgroundColor: "#000",
      padding: "5em 2em",
    },
    card: {
      backgroundColor: "#000",
      textAlign: "center",
      padding: "3em",
    },
    OUR: {
      border: "2px solid #fff",
      padding: "1%",
      backgroundColor: "black",
      color: "white",
      fontSize: "14px",
    },
    typo1: {
      marginTop: "1em",
      color: "white",
      fontWeight: "bold",
      fontSize: "40px",
    },
    typo2: {
      marginBottom: "1em",
      color: "white",
      fontWeight: "bold",
      fontSize: "40px",
    },
    Text: {
      color: "white",
      padding: "0 12em 1em 12em",
      fontSize: "20px",
    },
    img: {
      width: "50%",
      margin: "2em 7em"
    },
    Sparkle: {
        width: "18%",
    },
    Dollar: {
        width: "10%",
        float: "right"
    },
    button: {
        padding: "2em 10em",
        margin: "2em 0 0 0",
        borderRadius: "50px",
        backgroundColor: "#FFF804",
        color: "black",
        border: "1px solid #000000",
      },
  };
});

function WhyCard() {
  const classes = useStyles();
  const [imgs, setImgs] = useState(`${Sample1}`);
  const [i, setI] = useState(0);
  let tab = [
    `${Sample1}`,
    `${Sample2}`,
    `${Sample3}`,
    `${Sample4}`,
    `${Sample5}`,
    `${Sample6}`,
  ];
  useEffect(() => {
    if (i === 6) {
      setI(0);
    }
    const timer = setTimeout(() => setI(i + 1), 1000);
    return () => clearTimeout(timer);
  });
  useEffect(() => {
    return setImgs(tab[i]);
  });
  return (
    <div className={classes.all}>
      <Card elevation={0} className={classes.card}>
        <Typography variant="button" className={classes.OUR}>
          VINYL STUDIO
        </Typography>
        <Typography variant="h2" className={classes.typo1}>
          Make it real with
        </Typography>
        <Typography variant="h2" className={classes.typo2}>
          Qrates Vinyl Studio
        </Typography>
        <Typography variant="h5" className={classes.Text}>
          Design the look and feel of your vinyl and use the profit calculator
          to immediately see how much your project will cost, and how much
          you’ll earn.
        </Typography>
        <img src={Sparkle} alt="Deco" className={classes.Sparkle} />
        <img src={Dollar} alt="Deco" className={classes.Dollar} />
        <img src={imgs} alt="Sample" className={classes.img} />
        <Button
          size="large"
          variant="contained"
          className={classes.button}
          elevation={0}
        >
          TRY IT NOW
        </Button>
      </Card>
    </div>
  );
}

export default WhyCard;
