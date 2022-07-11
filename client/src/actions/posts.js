import * as api from '../api';

// api.fetchPosts

// we use redux-thunk here because the function is async so with redux-thunk we can add 1 more arrow that's async(dispatch)
// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        const action = {type:'FETCH_ALL', payload: data};
        // normally we go like this
        // return action;
        // but with redux-thunk we go like this
        dispatch(action);
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPosts(post);
        // same as action in the getPosts
        dispatch({type:'CREATE',payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id,post) => async (dispatch) =>{
    try {
        const {data} = await api.updatePosts(id,post);
        dispatch({type:'UPDATE',payload: data})
    } catch (error) {
        console.log(error.message);
    }
}