import mongoose from "mongoose";

const user = mongoose.Schema({
    id:{
        type: String,
    },
    name: {
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

})

const userAccount = mongoose.model('user',user)

export default userAccount;