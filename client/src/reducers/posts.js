export default (posts = [], action) =>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            // get the posts from form and then add the new posts that stored in action.payload
            return [...posts, action.payload];
        case 'UPDATE':
            // if the post.id is equal to the payload id then we return the action payload, if not then just return back the post
            return posts.map((post)=> post._id === action.payload._id ? action.payload : post)
        default:
            return posts;
    }
}