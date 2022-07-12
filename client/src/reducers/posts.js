export default (posts = [], action) =>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            // get the posts from form and then add the new posts that stored in action.payload
            return [...posts, action.payload];
        // Here we want to return all the post data to form or anything that called it
        case 'UPDATE':
            // here we find the post with id === action.payload id, if found we return the payload if not then just return the post back
            return posts.map((post)=>(post._id === action.payload._id ? action.payload : post))
        default:
            return posts;
    }
}