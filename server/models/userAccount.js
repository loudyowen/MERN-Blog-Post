import mongoose from "mongoose";

const user = mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    user_name:{
        type: String,
        required: true
    },
    user_password:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    first_name: String,
    last_name: String

})


export default mongoose.model('userAccount', user)