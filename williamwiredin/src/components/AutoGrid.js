import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WilliamCard from './WilliamCard';
import { Typography } from '@material-ui/core';
import CircularProgressWithLabel from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import SoloLearnCard from './SoloLearnCard';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tharros from '../img/LogoFullTeal.png';
import MemNav from '../img/logo.png';
import Aiton from '../img/aiton.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper} style={{ marginLeft: "10px", marginTop: "10px"}}><WilliamCard /></Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} style={{ marginRight: "10px", marginTop: "10px"}}>
            <Typography component="h1">
              William's Skills Matrix
              <br />
              <br />
              <br />
              <div style={{ display: "flex", flexDirection: "row", alignContent: "space-between", padding: "20px"}}>
                  <div>
                  <CircularProgressWithLabel variant="determinate" value={100} />
                  <div>
                  <br /><br />
                    <h5>Javascript</h5><br /><sub>100%</sub>
                        </div>
                      </div>
                    <div>
                  <CircularProgressWithLabel variant="determinate" value={100} />
                  <div style={{ marginLeft: "40px"}}>
                  <br /><br />
                    <h5>HTML</h5><br /><sub>100%</sub>
                       </div>
                      </div>
                <div>
                  <CircularProgressWithLabel variant="determinate" value={100} />
                  <div style={{ marginLeft: "40px"}}>
                  <br /><br />
                    <h5>CSS</h5><br /><sub>100%</sub>
                        </div>
                    </div>
                    <div>
                  <CircularProgressWithLabel variant="determinate" value={80} />
                  <div style={{ marginLeft: "40px"}}>
                  <br /><br />
                    <h5>Python</h5><br /><sub>80%</sub>
                        </div>
                    </div>
                    <div>
                  <CircularProgressWithLabel variant="determinate" value={90} />
                  <div style={{ marginLeft: "40px"}}>
                  <br /><br />
                    <h5>PHP</h5><br /><sub>90%</sub>
                        </div>
                    </div>
                    <div>
                  <CircularProgressWithLabel variant="determinate" value={100} />
                  <div style={{ marginLeft: "40px"}}>
                  <br /><br />
                    <h5>SQL</h5><br /><sub>100%</sub>
                        </div>
                    </div>
                    <div>
                  <CircularProgressWithLabel variant="determinate" value={80} />
                  <div style={{ marginLeft: "40px"}}>
                  <br /><br />
                    <h5>C#</h5><br /><sub>80%</sub>
                        </div>
                    </div>
                </div>
                 
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper} style={{ marginLeft: "10px"}}><SoloLearnCard /></Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography component="h5">Recent Hackathons</Typography>
                <IconButton href="https://devpost.com/williammabotjadev">
                  <div style={{ display: "flex", flexDirection: "column"}}>
                      <img src={Tharros} style={{ width: "240px", height: "80px" }} />
                      <br />
                      <img src={MemNav} style={{ width: "240px", height: "96px"  }}  />
                      <br />
                      <img src={Aiton} style={{ width: "240px", height: "112px" }}  />
                  </div>
                   
                </IconButton>
          </Paper>
        </Grid>
        <Grid item xs style={{ marginRight: "10px"}}>
          
          <Paper className={classes.paper}>Social Media &amp; Beyond
          <br />
          <IconButton href="https://twitter.com/mabotja_william">
              <TwitterIcon style={{ width: "120px", height: "104px", color: "teal" }}/>
          </IconButton>
          <IconButton href="https://web.facebook.com/mrwilliammabotja">
              <FacebookIcon style={{ width: "120px", height: "104px", color: "teal" }}/>
          </IconButton>
          <IconButton href="https://github.com/williammabotjadev">
              <GitHubIcon style={{ width: "120px", height: "104px", color: "teal" }}/>
          </IconButton>
          <br />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
