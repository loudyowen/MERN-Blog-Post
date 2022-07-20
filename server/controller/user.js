import mongoose from "mongoose";
import userAccount from "../models/userAccount.js";

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
// import { json } from "body-parser";

export const signIn = async (req,res)=>{
    const {email, password, sub} = req.body;

    try{
        const userExist = await userAccount.findOne({email});
        // console.log(userExist)
        if(sub){
            // do google sign in and input data to database
        }
        if(!userExist) return res.status(404).json({message: "User not exist"})

        const passwordCheck = await bcrypt.compare(password, userExist.password);

        if(!passwordCheck) return res.status(400).json({message: "password incorrect"})
        const token = jwt.sign({email: userExist.email, id: userExist._id},'userCreationSecret',{expiresIn: "1h"})       
        res.status(200).json({userData: userExist, token})
    }catch(error){
        res.status(404).json({message: error.message})
    }
};

export const signUp = async (req,res)=>{
    const { email, firstName, lastName, password, confirmPassword, picture, sub, name } = req.body
    try{
        const userExist = await userAccount.findOne({email});
        if(sub){
            if(userExist){
                // res.status(200) to 
            }
        }
        if(userExist){return res.status(400).json({message: "User already exist"})}
        if(password !== confirmPassword){return res.status(400).json({message: "password doesn't match"})}
        const hashPassword = await bcrypt.hash(password, 12)
        // const hashPassword = password
        const userData = await userAccount.create({name: `${firstName} ${lastName}`, password: hashPassword, email});
        const token = jwt.sign({email: userData.email, id: userData._id},'userCreationSecret',{expiresIn: "1h"})
        res.status(200).json({userData, token})
    }catch(error){
        res.status(404).json({message: error.message})
    }
};

