import axios from 'axios';

const url = "https://blog-post-app-owen.herokuapp.com/blogs";

export const fetchPosts = () => axios.get(url);
export const createPosts = (newPost) => axios.post(url, newPost);
export const updatePost = (id, postData) => axios.patch(`${url}/${id}`,postData)
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const updateLikePost = (id) => axios.patch(`${url}/${id}/like`)