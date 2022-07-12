import React, {useState} from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import {createPost} from '../../actions/posts'

const Form = () => {
    const [postData,setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const styles = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        //to not get refresh from the browser
        e.preventDefault();
        dispatch(createPost(postData));

    }

    const clear = () => {

    }

    return(
        <Paper className={styles.paper}>
            {/* multiple classes in 1 className */}
            <form autoComplete="off" noValidate className={`${styles.root} ${styles.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    Create Memory
                </Typography>
                {/* // why not just (e)=>setPostData({creator: e.target.value}) ??? 
                    //  because if we added another textField, this creator text field will just override the data
                    // so we use spread operator ...  , so it will be only change specific property on specific textfield */}
                <TextField name='creator' variant="outlined" label="Creator" fullWidth value={postData.creator}onChange={(e)=>setPostData({...postData, creator: e.target.value})}/>
                <TextField name='title' variant="outlined" label="Title" fullWidth value={postData.title}onChange={(e)=>setPostData({...postData, title: e.target.value})}/>
                <TextField name='message' variant="outlined" label="Message" fullWidth value={postData.message}onChange={(e)=>setPostData({...postData, message: e.target.value})}/>
                <TextField name='tags' variant="outlined" label="Tags" fullWidth value={postData.tags}onChange={(e)=>setPostData({...postData, tags: e.target.value})}/>
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