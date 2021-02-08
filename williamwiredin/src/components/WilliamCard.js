import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageAvatar from './AvatarCard';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function WilliamCard() {
  const classes = useStyles();

  return (
    <Card style={{ width: "600px" }} >
      <CardActionArea>
        <ImageAvatar />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hi, My Name is William
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            William Mabotja is a <strong>Fullstack Web Developer</strong> with under a year of Formal Development Experience. I am Certified in Javascript
            and was previously selected for <strong>Google Africa Developer Scholarship.</strong> I am currently plying my trade as a <strong>Web Developer</strong> at <strong>Flash Forward Productions</strong> in Johannesburg, South Africa.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="mailto:williammabotjadev@gmail.com">
          Send an Email
        </Button>
        <Button size="small" color="primary" href="https://www.linkedin.com/in/william-mabotja-cs">
          Connect on LinkedIn
        </Button>
      </CardActions>
    </Card>
  );
}
