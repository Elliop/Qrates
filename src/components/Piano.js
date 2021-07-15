import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: "80%",
      margin: "120px 0 0 5%",
      border: "2px solid #000000",
      padding: "0",
    },
    nested: {
      paddingLeft: theme.spacing(4),
      borderLeft: "2px solid #000000",
      borderRight: "2px solid #000000",
    },
    blackCard: {
      color: "white",
      backgroundColor: "black",
      padding: "23px 28px 4em 28px",
    },
    blackText: {
      fontSize: "28px",
      fontWeight: "bold",
    },
    whiteCard: {
      borderLeft: "2px solid #000000",
      borderRight: "2px solid #000000",
      borderTop: "2px solid #000000",
      padding: "24px 27px 23px",
    },
    whiteText: {
      fontSize: "20px",
      fontWeight: "bold",
    },
  };
});

function Piano() {
  const classes = useStyles();
  const [openA, setOpenA] = React.useState(false);
  const [openB, setOpenB] = React.useState(false);
  const [openC, setOpenC] = React.useState(false);
  const [openD, setOpenD] = React.useState(false);
  const [openE, setOpenE] = React.useState(false);
  const [openF, setOpenF] = React.useState(false);
  const [openG, setOpenG] = React.useState(false);
  const [openH, setOpenH] = React.useState(false);
  const [openI, setOpenI] = React.useState(false);
  const [openJ, setOpenJ] = React.useState(false);

  return (
    <div className={classes.ALL}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem className={classes.blackCard}>
          <Typography variant="h4" className={classes.blackText}>
            Making Records
          </Typography>
        </ListItem>

        <ListItem
          className={classes.whiteCard}
          button
          onClick={() => setOpenA(!openA)}
        >
          <Typography variant="h4" className={classes.whiteText}>
            Design & Customization
          </Typography>
          <ListItemText />
          {openA ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openA}>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText primary="With over 39 colors and over 120,000 variations, control what your record will look like." />
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          className={classes.whiteCard}
          button
          onClick={() => setOpenB(!openB)}
        >
          <Typography variant="h4" className={classes.whiteText}>
            Mastering
          </Typography>
          <ListItemText />
          {openB ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openB}>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText primary="Have your music mastered by engineers who specialize in mastering for vinyl." />
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          className={classes.whiteCard}
          button
          onClick={() => setOpenC(!openC)}
        >
          <Typography variant="h4" className={classes.whiteText}>
            Artwork Assistance
          </Typography>
          <ListItemText />
          {openC ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openC}>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText primary="Our team can help you optimize your artwork and packaging so your vinyl looks as good as it sounds." />
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          className={classes.whiteCard}
          button
          onClick={() => setOpenD(!openD)}
        >
          <Typography variant="h4" className={classes.whiteText}>
            Pressing
          </Typography>
          <ListItemText />
          {openD ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openD}>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText primary="In-built quality control comes from our network of trusted vinyl plants in North America and Europe." />
            </ListItem>
          </List>
        </Collapse>
        <ListItem className={classes.blackCard}>
          <Typography variant="h4" className={classes.blackText}>
            Storage & Distribution
          </Typography>
        </ListItem>

        <ListItem
          className={classes.whiteCard}
          button
          onClick={() => setOpenE(!openE)}
        >
          <Typography variant="h4" className={classes.whiteText}>
            Free Storage
          </Typography>
          <ListItemText />
          {openE ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openE}>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText primary="At our US and UK warehouses, with no minimums or fees." />
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          className={classes.whiteCard}
          button
          onClick={() => setOpenF(!openF)}
        >
          <Typography variant="h4" className={classes.whiteText}>
            Shop
          </Typography>
          <ListItemText />
          {openF ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openF}>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText primary="Sell your record in the Qrates shop, directly connecting with an established community of music lovers and stores worldwide." />
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          className={classes.whiteCard}
          button
          onClick={() => setOpenG(!openG)}
        >
          <Typography variant="h4" className={classes.whiteText}>
            Digital Downloads
          </Typography>
          <ListItemText />
          {openG ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openG}>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText primary="Make your music available for digital download in our store too." />
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          className={classes.whiteCard}
          button
          onClick={() => setOpenH(!openH)}
        >
          <Typography variant="h4" className={classes.whiteText}>
            Retail Distribution
          </Typography>
          <ListItemText />
          {openH ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openH}>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText primary="Get into record stores with Qrates' 150+ retail partners including Juno and Japan's legendary Jet Set Records." />
            </ListItem>
          </List>
        </Collapse>

        <ListItem className={classes.blackCard}>
          <Typography variant="h4" className={classes.blackText}>
            Support
          </Typography>
        </ListItem>

        <ListItem
          className={classes.whiteCard}
          button
          onClick={() => setOpenI(!openI)}
        >
          <Typography variant="h4" className={classes.whiteText}>
            Customer Support
          </Typography>
          <ListItemText />
          {openI ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openI}>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText primary="Our dedicated customer care team is ready to help--from order updates to refunds, returns, or exchanges. We'll handle it." />
            </ListItem>
          </List>
        </Collapse>

        <ListItem
          className={classes.whiteCard}
          button
          onClick={() => setOpenJ(!openJ)}
        >
          <Typography variant="h4" className={classes.whiteText}>
            Artist Support
          </Typography>
          <ListItemText />
          {openJ ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={openJ}>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText primary="Our Qrates team can guide you through all the technical details, making the production process low stress and hassle-free." />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
}

export default Piano;
