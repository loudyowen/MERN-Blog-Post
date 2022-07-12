export default (posts = [], action) =>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            // get the posts from form and then add the new posts that stored in action.payload
            return [...posts, action.payload];
        default:
            return posts;
    }
}