import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import useStyles from './styles';

import {deletePost, updateLikePost} from '../../../actions/posts'

const Post = ({post, setCurrentId}) => {
    const styles = useStyles();
    const dispatch = useDispatch();

    return(
        <Card className={styles.card}>
            <CardMedia className={styles.media} image={post.selectedFile} title={post.title}/>
            <div className={styles.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={styles.overlay2}>
                <Button style={{color: "white"}} size="small" onClick={()=>{setCurrentId(post._id)}}>
                    <MoreHorizIcon fontSize="medium" />
                </Button>
            </div>
            <div className={styles.details}>
                <Typography variant='body2' color="textSecondary">
                    {post.tags.map((tag)=>`#${tag} `)}
                </Typography>
            </div>
            <Typography className={styles.title} variant="h5" gutterBottom>
                    {post.title}
                </Typography>
            <CardContent>
                <Typography variant="body1" gutterBottom>
                    {post.message}
                </Typography>
            </CardContent>
            <CardActions className={styles.cardActions}>
                <Button size="small" color="primary" onClick={()=>dispatch(updateLikePost(post._id))}>
                    Like {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={()=>dispatch(deletePost(post._id))}>
                    Delete 
                </Button>
            </CardActions>
        </Card>

    )
}

export default Post;