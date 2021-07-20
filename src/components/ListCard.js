import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: "3em 0 7em",
    },
  };
});

const ListCard = () => {
  const classes = useStyles();
  return (
   <div className={classes.root}>
    <div class="ticker-wrap">
      <div class="ticker">
        <div class="ticker__item"><Typography>CHILLED COW IS ON QRATES</Typography></div>
        <div class="ticker__item"><Typography>SOL IS ON QRATES</Typography></div>
        <div class="ticker__item"><Typography>VUFLPECK IS ON QRATES</Typography></div>
        <div class="ticker__item"> <Typography>CHILLHOP IS ON QRATES</Typography></div>
        <div class="ticker__item"><Typography>CHILLED COW IS ON QRATES</Typography></div>
        <div class="ticker__item"><Typography>SOL IS ON QRATES</Typography></div>
        <div class="ticker__item"><Typography>VUFLPECK IS ON QRATES</Typography></div>
        <div class="ticker__item"> <Typography>CHILLHOP IS ON QRATES</Typography></div>
      </div>
    </div>
   </div>
  );
};

export default ListCard;
