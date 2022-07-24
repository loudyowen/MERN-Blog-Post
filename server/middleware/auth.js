import jwt, {decode} from 'jsonwebtoken'

const auth = async(req,res,next) => {
    console.log("auth is working")
    try {
        const token = req.headers.authorization.split(" ")[1];
        // if token is bigger than 500 then that's google token

        let decodeData;

        if(token){
            decodeData = jwt.verify(token, 'userCreationSecret')
            req.userId = decodeData?.id;
        }    
        next();
    } catch (error) {
        console.log(error)
    }
}

export default auth;