import * as api from '../api';
import {SIGN_IN, SIGN_OUT} from '../constant/actionType'
import { useNavigate } from 'react-router-dom';

export const signUp = (formData) => async (dispatch)=>{
    const navigate = useNavigate();
    try {
        // sign uo
        navigate('/')
    } catch (error) {
        
    }
}

export const signIn = (formData) => async (dispatch)=>{
    const navigate = useNavigate();
    try {
        
        navigate('/')
    } catch (error) {
        
    }
}