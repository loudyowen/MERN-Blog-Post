import React from "react";
import useStyles from "./styles";
import { Card, CardActions, CardContent, Button, Typography, CardMedia} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

const Post = ({post, setCurrentId}) => {
    const styles = useStyles();

    return(
        <Card className={styles.card}>
            <CardMedia className={styles.media} image={post.selectedFile} title={post.title} />
            <div className={styles.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                {/* moment is to know range time from the post is created */}
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={styles.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={()=>setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
            </div>
            <div className={styles.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag)=>`#${tag} `)}</Typography>
            </div>
            <Typography className={styles.title} gutterButtom variant="h5" component="h2">{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={styles.cardActions}>
                <Button size="small" color="primary" onClick={()=>{}}>
                    <ThumbUpAltIcon fontSize="small"/>
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={()=>{}}>
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;