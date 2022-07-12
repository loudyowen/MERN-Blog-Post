import React, { useState, useEffect} from "react";
import { 
    Container,
    AppBar,
    Typography,
    Grow,
    Grid
} from '@material-ui/core';
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import blogIcon from './images/memories.png'
import Posts from "./component/Posts/Posts";
import Form from "./component/Form/Form";
import useStyles from "./styles";
import './App.css'

const App = () =>{
    const [currentId, setCurrentId] = useState(null);
    const styles = useStyles();
    const dispatch = useDispatch();

    // here how it work:
    // 1. we get action from action folder in this case posts.js
    // 2. send to here in useEffect and then it call dispatch
    // 3. the dispatch is send to reducers folder index.js
    //    and select base on action type
    useEffect(()=>{
        // use dispatch to dispacth an action
        dispatch(getPosts());
    },[currentId, dispatch]) //-> update without refresh with just added currentId in here because useEffect will work when we submit the form because the current id is change to null in the form so the useEffect will run

    return(
        <Container maxWidth='lg'>
            <AppBar className={styles.appBar} position="static" color="inherit">
                <Typography className={styles.heading} variant="h2" align="center">
                    Blog Post
                </Typography>
                <img className={styles.image} src={blogIcon} alt="blog_icon" height={60} />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItem="strech" spacing={3} >
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            {/* MAKE THE FORM TO BE MODAL */}
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;