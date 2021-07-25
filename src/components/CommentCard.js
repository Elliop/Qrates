import { Typography, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Artist1 from "../assets/artist1.jpeg";
import Artist2 from "../assets/artist2.jpeg";

const useStyles = makeStyles((theme) => {
  return {
    ALL: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: "#FFF804",
      border: "1px solid #000000",
    },
    ALL2: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: "#FF6711",
      border: "1px solid #000000",
    },
    typo: {
      fontWeight: "bold",
      margin: "1em 0 15px 0",
    },
    button1: {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      backgroundColor: "black",
      color: "white",
      border: "1px solid #000000",
      fontWeight: "bold",
      marginLeft: "1em",
      cursor: "pointer",
    },
    button2: {
      height: "40px",
      width: "40px",
      borderRadius: "50%",
      backgroundColor: "transparent",
      border: "2px solid #000000",
      fontWeight: "bold",
      marginLeft: "1em",
      cursor: "pointer",
    },
    divButtons: {
      position: "absolute",
      bottom: "3em",
    },
    img: {
      width: "100%",
      height: "875px",
      border: "1px solid #000000",
    },
    divImg: {
      backgroundColor: "black",
    },
    NO: {
      border: "2px solid #000000",
      padding: "2%",
      backgroundColor: "white",
    },
    sol: {
      marginTop: "1em",
    },

    cmp: {
      padding: "3em 9em 2em 2em",
      border: "1px solid #000000",
      position: "relative",
    },
    Text: {
      marginTop: "11em",
    },
  };
});

function Crowd() {
  const classes = useStyles();
  const [card, setCard] = useState({
    comment: `"The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time."`,
    sign: `—SOL`,
    img: `${Artist1}`,
    all: `${classes.ALL}`,
    classe1: `${classes.button1}`,
    classe2: `${classes.button2}`,
  });

  const handleClick1 = () => {
    setCard({
      comment: `"The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time."`,
      sign: `—SOL`,
      img: `${Artist1}`,
      all: `${classes.ALL}`,
      classe1: `${classes.button1}`,
      classe2: `${classes.button2}`,
    });
  };
  const handleClick2 = () => {
    setCard({
      comment: `“We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies.”`,
      sign: `—Mason Lieberman (The Real Folk Blues, 2020)`,
      img: `${Artist2}`,
      all: `${classes.ALL2}`,
      classe1: `${classes.button2}`,
      classe2: `${classes.button1}`,
    });
  };
  return (
    <div className={card.all}>
      <Grid container>
        <Grid item xs={6} className={classes.cmp}>
          <Typography variant="button" className={classes.NO}>
            ARTISTS ON QRATES
          </Typography>
          <div className={classes.Text}>
            <Typography variant="h5">{card.comment}</Typography>
            <Typography variant="h5" className={classes.sol}>
              {card.sign}
            </Typography>
          </div>
          <div className={classes.divButtons}>
            <button className={`${card.classe1}`} onClick={handleClick1}>
              1
            </button>
            <button className={`${card.classe2}`} onClick={handleClick2}>
              2
            </button>
          </div>
        </Grid>
        <Grid item xs={6} className={classes.divImg}>
          <img src={card.img} alt="Artist1" className={classes.img} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Crowd;
