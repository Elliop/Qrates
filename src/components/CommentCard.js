import { Button, Typography, makeStyles } from "@material-ui/core";
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
    button: {
      borderRadius: "25px",
      marginTop: "22em",
      marginRight: "1em"
    },
    img: {
      width: "100%",
      border: "1px solid #000000",
      height: "100%"
    },
    NO: {
      border: "2px solid #000000",
      padding: "2%",
      backgroundColor: "white",
    },
    sol: {
      marginTop: "1em"
    },
    comnt: {
      marginTop: "11em"
    },
    cmp: {
      padding: "3em 9em 2em 2em",
      border: "1px solid #000000",
      
    }
  };
});

function Crowd() {
  const classes = useStyles();
  const [card, setCard] = useState(
    {
      comment: `"The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time."`,
      sign: `—SOL`,
      img: `${Artist1}`,
      all: `${classes.ALL}`
    }
  )

  const handleClick1 = () => {
    setCard({
      comment: `"The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time."`,
      sign: `—SOL`,
      img: `${Artist1}`,
      all: `${classes.ALL}`
    })
  }
  const handleClick2 = () => {
    setCard({
      comment: `“We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies.”`,
      sign: `—Mason Lieberman (The Real Folk Blues, 2020)`,
      img: `${Artist2}`,
      all: `${classes.ALL2}`
    })
  }
  return (
    <div className={card.all}>
      <Grid container>
        <Grid item xs={6} className={classes.cmp}>
          <Typography variant="button" className={classes.NO}>
            ARTISTS ON QRATES
          </Typography>
          <Typography variant="h5" className={classes.comnt}>
            {card.comment}
          </Typography>
          <Typography variant="h5" className={classes.sol}>{card.sign}</Typography>
          <Button
            disableElevation
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleClick1}
          >
            1
          </Button>
          <Button
            disableElevation
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleClick2}
          >
            2
          </Button>
        </Grid>
        <Grid item xs={6}>
          <img src={card.img} alt="Artist1" className={classes.img} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Crowd;
