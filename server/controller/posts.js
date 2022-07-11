import mongoose from "mongoose";
import Post from "../../client/src/component/Posts/Post/Post.js";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req,res)=>{
    try{
        const postMessage = await PostMessage.find();
        res.status(200).json(postMessage);
    }catch(error){
        res.status(404).json({message: error.message})
    }
};

export const createPost = async (req,res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const updatePost = async (req,res) => {
    // in object destructring we rename the id to _id
    const {id:_id} = req.params;
    const post = req.body;

    // if id is not a mongoose object then return id is not found
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("ID is not found");

    // then we update
    const updatedPost = PostMessage.findByIdAndUpdate(_id, post, {new: true});
    res.json(updatePost)
}