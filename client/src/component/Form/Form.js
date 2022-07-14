import React, {useState, useEffect} from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from "react-redux";
import {createPost, updatePost} from '../../actions/posts'
const Form = ({currentId, setCurrentId}) => {
    const [postData,setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const styles = useStyles();
    const dispatch = useDispatch();
    // if wwe have the current id, then we return the state post that have the post id === current id if not return null
    const postsEdit = useSelector((state)=>(currentId ? state.posts.find(((post)=> post._id === currentId)) : null));

    // useEffect will occur when then postEdit changes
    useEffect(() => {
        if(postsEdit){
            setPostData(postsEdit)
        }
    },[postsEdit])

    const handleSubmit = (e) =>{
        //to not get refresh from the browser
        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId,postData))
        }else{
            dispatch(createPost(postData));
        }

        clear();

    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    }

    return(
        <Paper className={styles.paper}>
            {/* multiple classes in 1 className */}
            <form autoComplete="off" noValidate className={`${styles.root} ${styles.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    { currentId ? 'Editing' : 'Creating'} Post
                </Typography>
                {/* // why not just (e)=>setPostData({creator: e.target.value}) ??? 
                    //  because if we added another textField, this creator text field will just override the data
                    // so we use spread operator ...  , so it will be only change specific property on specific textfield */}
                <TextField name='creator' variant="outlined" label="Creator" fullWidth value={postData.creator}onChange={(e)=>setPostData({...postData, creator: e.target.value})}/>
                <TextField name='title' variant="outlined" label="Title" fullWidth value={postData.title}onChange={(e)=>setPostData({...postData, title: e.target.value})}/>
                <TextField name='message' variant="outlined" label="Message" fullWidth value={postData.message}onChange={(e)=>setPostData({...postData, message: e.target.value})}/>
                <TextField name='tags' variant="outlined" label="Tags" fullWidth value={postData.tags}onChange={(e)=>setPostData({...postData, tags: e.target.value.split(',')})}/>
                <div className={styles.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({base64})=> setPostData({...postData, selectedFile: base64})}
                    />
                </div>
                <Button className={styles.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth> Submit </Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth> Clear </Button>

            </form>
        </Paper>
    )
}

export default Form;