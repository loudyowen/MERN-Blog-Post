import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core';
import LockOutLinedIcon from '@material-ui/icons/LockOutlined'

// import { GoogleLogin} from 'react-google-login';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


import useStyles from './styles'
import Input from './Input';
import Icon from './Icon'
// import dotenv from 'dotenv';


function Auth() {
    const styles = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const dotenv = dotenv.config();

    const [isSignUp, setIsSignUp] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }


    // fungsi untuk toggle show password
    const handleShowPassword = () => {
        setShowPassword((prevShowPassword)=>!prevShowPassword)
    }

    const switchMode = () => {
        setIsSignUp((prevIsSignUp)=>!prevIsSignUp)
        // handleShowPassword(false)
    }

    const googleSuccess = async (res) => {
        // ?. is special operator that will not throw error when we don't get res object
        // so when it doesn't have res it will just assign undefined
        // const result = res?.profileObj;
        // const token = res?.tokenId;
        const decoded = jwt_decode(res.credential);
        // console.log(decode)

        const { name, picture, sub, email } = decoded;
        try {
            dispatch({type: 'AUTH', data: {name, picture, sub,  email}})
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    const googleFailure = (error) => {
        console.log(error)
        console.log("Login failed")
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={styles.paper} evelation={3}>
                <Avatar className={styles.avatar}>
                    <LockOutLinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In' }</Typography>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {/* hanya muncul untuk sign up */}
                        {isSignUp && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus  half  />
                                <Input name="lastName" label="Last Name"  handleChange={handleChange} half  />
                            </>
                        ) }

                        <Input name="email" label="Email" handleChange={handleChange} type="email" />
                    
                        {/* type berupa if else untuk menentukan apakah user melakukan click show password atau tidak */}
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        
                        {/* hanya muncul untuk sign up */}
                        {isSignUp && (
                            <Input name="confirmPassword" label="Confrim Password" handleChange={handleChange} type="password" />
                            )}
                    </Grid>
                    <Button className={styles.submit} type='submit' color='primary' variant="contained" fullWidth>{isSignUp ? 'Sign Up' : 'Sign In'}</Button>
                    <GoogleOAuthProvider clientId="89654660246-ead1gr6o4vksarp6tvmapf2bjlg1k8un.apps.googleusercontent.com">
                        <GoogleLogin
                            render={(renderProps)=>(
                                // disabled={renderProps.disabled}
                                <Button className={styles.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled}  startIcon={<Icon />} variant="contained">
                                    Google Sign In
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        />
                    </GoogleOAuthProvider>

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? 'Already have account? Sign In' : "Don't have account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth