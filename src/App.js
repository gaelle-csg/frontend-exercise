import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import BlogPosts from './BlogPosts';
import './App.css';

const useStyles = makeStyles({
  blog: {
    backgroundColor: "#F5F3EB"
  },
  topBar: {
    backgroundColor: '#f9c511',
  },
  title: {
    paddingLeft: '12%',
    paddingTop: '4%',
    paddingBottom: '4%',
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.blog}>
      <div className={classes.topBar}>
        <Typography variant="h4" className={classes.title}>Talk Therapy Blog</Typography>
      </div>
      <BlogPosts />
    </div>
  );
}

export default App;
