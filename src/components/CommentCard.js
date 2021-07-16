import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      marginTop: "2em",
    },
  };
});

const ListCard = () => {
  const classes = useStyles();
  return <div className={classes.root}>List</div>;
};

export default ListCard;
