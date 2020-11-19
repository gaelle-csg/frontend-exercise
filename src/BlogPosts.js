import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';

import PostCard from './PostCard';

const useStyles = makeStyles({
  blogposts: {
    height: '100%',
    paddingLeft: '12%',
    paddingRight: '12%',
    paddingTop: '4%',
    paddingBottom: '4%',
  },
  pagination: {
    paddingTop: '4%',
    textAlign: 'center',
  }
});

const BlogPosts = props => {
    
  const [posts, setPosts] = useState({ list: [], prev: null, next: null });

  const loadPage = useCallback((link) => {
    return fetch(link)
      .then(res => res.json())
      .then((data) => {
        setPosts({ list: data.data, prev: data.links.prev, next: data.links.next });
      })
      .catch((error) => {
        console.error(error);
      })
  }, [])
    
  useEffect(() => {
    loadPage('https://storage.googleapis.com/twochairs-interview-materials/interview-exercise/blog-data-1.json');
  }, [loadPage])
    
  const classes = useStyles();
    
  const getGridListCols = () => {
    if (isWidthUp('xl', props.width) || isWidthUp('lg', props.width))
      return 3;
    if (isWidthUp('md', props.width) || isWidthUp('sm', props.width))
      return 2;
    return 1;
  }
  
  const getSpacing = () => {
    if (isWidthUp('xl', props.width) || isWidthUp('lg', props.width))
      return 30;
    if (isWidthUp('md', props.width) || isWidthUp('sm', props.width))
      return 20;
    return 10;
  }
    
  return (
    <div className={classes.blogposts}>
      <GridList cols={getGridListCols()} spacing={getSpacing()} cellHeight={'auto'}>
        { posts.list.map((post) => 
          <GridListTile key={post.id} >
            <PostCard info={post}/>
          </GridListTile>
        )}
      </GridList>
      <div className={classes.pagination}>
        <Button disabled={posts.prev === null} onClick={() => loadPage(posts.prev)}>Previous</Button>
        <Button disabled={posts.next === null} onClick={() => loadPage(posts.next)}>Next</Button>
      </div>
    </div>
  )
}

export default withWidth()(BlogPosts);