import mongoose from "mongoose";

const user = mongoose.Schema({
    id:{
        type: [String],
    },
    userName: {
        type: [String],
        required: true
    },
    userPassword:{
        type: [String],
        required: true
    },
    email:{
        type: [String],
        required: true
    },

})

const userAccount = mongoose.model('userAccount',user)

export default userAccount;