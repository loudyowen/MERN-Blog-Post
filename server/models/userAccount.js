import mongoose from "mongoose";

const user = mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    userPassword:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    firstName: String,
    lastName: String

})


export default mongoose.model('userAccount', user)