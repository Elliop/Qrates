import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: "3em 0 7em",
    },
    text: {
      fontSize: "20px",
      fontWeight: "bold",
    },
  };
});

const ListCard = () => {
  const classes = useStyles();
  return (
   <div className={classes.root}>
    <div class="ticker-wrap">
      <div class="ticker">
        <div class="ticker__item"><Typography className={classes.text}>CHILLED COW IS ON QRATES</Typography></div>
        <div class="ticker__item"><Typography className={classes.text}>SOL IS ON QRATES</Typography></div>
        <div class="ticker__item"><Typography className={classes.text}>VUFLPECK IS ON QRATES</Typography></div>
        <div class="ticker__item"> <Typography className={classes.text}>CHILLHOP IS ON QRATES</Typography></div>
        <div class="ticker__item"><Typography className={classes.text}>CHILLED COW IS ON QRATES</Typography></div>
        <div class="ticker__item"><Typography className={classes.text}>SOL IS ON QRATES</Typography></div>
        <div class="ticker__item"><Typography className={classes.text}>VUFLPECK IS ON QRATES</Typography></div>
        <div class="ticker__item"> <Typography className={classes.text}>CHILLHOP IS ON QRATES</Typography></div>
      </div>
    </div>
   </div>
  );
};

export default ListCard;
