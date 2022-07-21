import * as api from '../api';
import {AUTH} from '../constant/actionType'

export const signUp = (formData, navigate) => async (dispatch)=>{
    try {
        const {data} = await api.signUp(formData);
        console.log(data);
        dispatch({type: AUTH, data: data})
        navigate('/')
    } catch (error) {
        console.log(error)
    }
    // console.log(formData);
}

export const signIn = (formData, navigate) => async (dispatch)=>{
    try {
        // console.log(formData)
        const {data} = await api.signIn(formData);
        dispatch({type: AUTH, data: data})
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}