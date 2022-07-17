import jwt, {decode} from 'jsonwebtoken'

const auth = async(req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        // if token is bigger than 500 then that's google token
        const myCustomAuth = token.length < 500;

        let decodeData;

        if(token && myCustomAuth){
            decodeData = jwt.verify(token, 'userCreationSecret')
            req.userId = decodeData?.id;
        }else{
            decodeData = jwt.verify(token)
            // sub is google id
            req.userId = decodeData?.sub;
        }
    } catch (error) {
        console.log(error)
    }
}

export default auth;