import axios from 'axios';

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPosts = (newPost) => axios.post(url, newPost);
// posts\:id
export const updatePosts = (id, postData) => axios.patch(`${url}/${id}`, postData)