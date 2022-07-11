import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import {Grid, CircularProgress} from '@material-ui/core'


const Posts = ({setCurrentId}) => {
    const styles = useStyles();
    // hook function to fetch the data from redux
    // how do we know it called posts? becase in ../reducers/index.js it called post in combineReducers
    const posts = useSelector((state)=>state.posts);
    console.log(posts)
    return(
        !posts.length?<CircularProgress/>:(
            <Grid className={styles.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post)=>(
                        <Grid key={post._id} item xs={12} sm={6}>
                            {/* this called props drilling because we continually send the props from the root (App.js) to the child (post.js) */}
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )        
    );
}

export default Posts;