import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRouter from './routes/post.js';

const app = express();

app.use(bodyParser.json({limit: "30mb", extend: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extend: true}));
app.use(cors());

const URL_DB = 'mongodb+srv://owen:aVkaPCtw0sVZUVfP@cluster0.h5mym.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

app.use('/posts', postRouter)

// code for connection to database
// chain with .then and .catch because it's a promise function, if this true .then will call our app
mongoose.connect(URL_DB,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT,()=> console.log(`server is running on port ${PORT}`)))
.catch((error)=>console.log(error.message));

//just to make sure to not get any warning in console
// mongoose.set('useFindAndModify',false)
