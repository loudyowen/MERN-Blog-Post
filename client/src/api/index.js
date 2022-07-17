import axios from 'axios';

// const url = "https://blog-post-app-owen.herokuapp.com/blogs";

const API = axios.create({baseURL: 'http://localhost:5000'})

export const fetchPosts = () => API.get('/post');
export const createPosts = (newPost) => API.post('/post', newPost);
export const updatePost = (id, postData) => API.patch(`${'/post'}/${id}`,postData)
export const deletePost = (id) => API.delete(`${'/post'}/${id}`);
export const updateLikePost = (id) => API.patch(`${'/post'}/${id}/like`)

export const signIn = (formData) => API.post('/users/signIn',formData)
export const signUp = (formData) => API.post('/users/signUp',formData)