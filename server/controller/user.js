import mongoose from "mongoose";
import userAccount from "../models/userAccount.js";

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { json } from "body-parser";

export const signIn = async (req,res)=>{
    const {email, user_password} = req.body;

    try{
        const userExist = await userAccount.findOne({email});
        if(!userExist) return res.status(404).json({message: "User not exist"})
        const passwordCheck = await bcrypt.compare(user_password, userExist.password);
        if(!passwordCheck) return res.status(400).json({message: "password incorrect"})
        const token = jwt.sign({email: userExist.email, id: userExist._id},'userCreationSecret',{expiresIn: "1 days"})       
        res.status(200).json({result: userAccount, token})
    }catch(error){
        res.status(404).json({message: error.message})
    }
};

export const signUp = async (req,res)=>{
    const { email, firstName, lastName, password, confirmPassword } = req.body
    try{
        const userExist = userAccount.findOne(email);
        if(userExist) return res.status(400).json({message: "User already exist"})
        if(password !== confirmPassword) return res.status(400).json({message: "password doesn't match"})
        const hashPassword = await bcrypt.hash(password, 12)        
        const result = await userAccount.create({email: email,first_name: firstName, last_name: lastName, user_password: hashPassword});
        const token = jwt.sign({email: userExist.email, id: userExist._id},'userCreationSecret',{expiresIn: "1 days"})
        res.status(200).json({result: result, token})
    }catch(error){
        res.status(404).json({message: error.message})
    }
};

