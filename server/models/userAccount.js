import mongoose from "mongoose";

const user = mongoose.Schema({
    id:{
        type: String,
    },
<<<<<<< HEAD
    name: {
=======
    userName: {
>>>>>>> 291633944b913fa647f038795469eb70566ac5be
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