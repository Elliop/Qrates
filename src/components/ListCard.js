import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "100%",
      padding: "6em 0",
    },
    wrap: {
      paddingLeft: "100%",
    },
    move: {
      display: "inline-block",
      whiteSpace: "nowrap",
      paddingRight: "100%",
      animationIterationCount: "infinite",
      animationTimingFunction: "linear",
      animationName: "ticker",
      animationDuration: "30s",
    },
    item: {
      display: "inline-block",
      padding: "0 2em",
    },
  };
});

const ListCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrap}>
        <div className={classes.move}>
          <div className={classes.item}>
            <Typography>CHILLED COW IS ON QRATES</Typography>
          </div>
          <div className={classes.item}>
            <Typography>SOL IS ON QRATES</Typography>
          </div>
          <div className={classes.item}>
            <Typography>VUFLPECK IS ON QRATES</Typography>
          </div>
          <div className={classes.item}>
            <Typography>CHILLHOP IS ON QRATES</Typography>
          </div>
          <div className={classes.item}>
            <Typography>CHILLED COW IS ON QRATES</Typography>
          </div>
          <div className={classes.item}>
            <Typography>SOL IS ON QRATES</Typography>
          </div>
          <div className={classes.item}>
            <Typography>VUFLPECK IS ON QRATES</Typography>
          </div>
          <div className={classes.item}>
            <Typography>CHILLHOP IS ON QRATES</Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
