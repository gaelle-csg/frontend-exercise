import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import dateFormat from 'dateformat';

const useStyles = makeStyles({
  post: {
    textAlign: 'center',
    height: '100%',
  },
  postContent: {
    backgroundColor: 'white',
    textAlign: "left",
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '6%',
    paddingRight: '6%',
  },
  title: {
    paddingTop: '2%',
    height: '15%',
  },
  author: {
    height: '5%'
  }
});

function PostCard({info}) {
  const classes = useStyles();
    
  return (
    <Card className={classes.post}>
      <CardMedia
        component="img"
        image={info.image}
      />
      <CardContent className={classes.postContent}>
        <Typography variant="caption">
          { dateFormat(new Date(info.date_created), "mmmm d, yyyy") }
        </Typography>
        <Typography variant="body1" component="h2" className={classes.title}>
          {info.title}
        </Typography>
        <Typography variant="caption" component="p" className={classes.author}>
          {info.author}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PostCard;
