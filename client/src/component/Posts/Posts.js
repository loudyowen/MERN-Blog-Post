import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import {Grid, CircularProgress} from '@material-ui/core'


const Posts = ({setCurrentId}) => {
    const styles = useStyles();
    // hook function
    // how do we know it called posts? becase in ../reducers/index.js it called post in combineReducers
    const posts = useSelector((state)=>state.posts);
    console.log(posts)
    return(
        !posts.length?<CircularProgress/>:(
            <Grid classnName={styles.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post)=>(
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )        
    );
}

export default Posts;