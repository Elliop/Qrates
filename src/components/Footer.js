import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import LogoFooter from "../assets/logo-footer.svg";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => {
  return {
    ALL: {
      backgroundColor: "black",
    },
    root: {
      width: "100%",
      margin: "0 5%",
    },
    title: {
      color: "white",
      marginBottom: "1em",
    },
    items: {
      color: "white",
      cursor: "pointer",
      padding: "6px 16px",
    },
    titleText: {
      fontSize: "22px",
      fontWeight: "bold",
    },
    itemText: {
      fontSize: "20px",
    },
    part2: {
        margin: "10em 0em 2em 0em"
    },
    img: {
      width: "420px",
    },
    footerText: {
      fontSize: "14px",
      color: "white",
      cursor: "pointer",
    },
    footerIcon: {
        fontSize: "20px",
        color: "white",
        cursor: "pointer",
    },
    test: {
        textAlign: "left"
    }
  };
});

function Piano() {
  const classes = useStyles();

  return (
    <div className={classes.ALL}>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <Grid container>
          <Grid item xs={3}>
            <ListItem className={classes.title}>
              <Typography variant="h4" className={classes.titleText}>
                FOR ARTISTS
              </Typography>
            </ListItem>

            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                Why Qrates?
              </Typography>
            </ListItem>
            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                Crowdfunding
              </Typography>
            </ListItem>
            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                Press & Sell
              </Typography>
            </ListItem>
            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                Our Services
              </Typography>
            </ListItem>
            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                Artist Toolkit
              </Typography>
            </ListItem>
            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                Referral Program
              </Typography>
            </ListItem>
          </Grid>
          <Grid item xs={3}>
            <ListItem className={classes.title}>
              <Typography variant="h4" className={classes.titleText}>
                FOR FANS
              </Typography>
            </ListItem>

            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                Discover
              </Typography>
            </ListItem>
            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                Records
              </Typography>
            </ListItem>
            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                Stories
              </Typography>
            </ListItem>
            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                Artists & Labels
              </Typography>
            </ListItem>
          </Grid>
          <Grid item xs={3}>
            <ListItem className={classes.title}>
              <Typography variant="h4" className={classes.titleText}>
                OUR COMPANY
              </Typography>
            </ListItem>

            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                About Qrates
              </Typography>
            </ListItem>
            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                Careers
              </Typography>
            </ListItem>
            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                Partners
              </Typography>
            </ListItem>
          </Grid>
          <Grid item xs={3}>
            <ListItem className={classes.title}>
              <Typography variant="h4" className={classes.titleText}>
                HELP
              </Typography>
            </ListItem>

            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                Support Center
              </Typography>
            </ListItem>
            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                Contact Us
              </Typography>
            </ListItem>
            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                Returns
              </Typography>
            </ListItem>
            <ListItem className={classes.items}>
              <Typography variant="h4" className={classes.itemText}>
                Shipping
              </Typography>
            </ListItem>
          </Grid>
        </Grid>
        <Grid container className={classes.part2}>
          <Grid item xs={6}>
            <img src={LogoFooter} alt="man" className={classes.img} />
          </Grid>
          <Grid container xs={6}>

            <Grid container justifyContent="flex-end">

                <IconButton className={classes.footerIcon}>
                  <FacebookIcon />
                </IconButton>


                {" "}
                <IconButton className={classes.footerIcon}>
                  <InstagramIcon />
                </IconButton>


                {" "}
                <IconButton className={classes.footerIcon}>
                  <TwitterIcon />
                </IconButton>

            </Grid>


            <Grid container xs={12} className={classes.footerText}>
              <Grid item xs={3}>
                Terms of Service
              </Grid>
              <Grid item xs={3}>
                Privacy Policy
              </Grid>
              <Grid item xs={3}>
                Legal Information
              </Grid>
              <Grid item xs={3}>
                © TDMS Inc.
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </List>
    </div>
  );
}

export default Piano;
