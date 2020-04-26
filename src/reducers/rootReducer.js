// import  actions

// define the reducer
const rootReducer = (state , action) => {
  switch (action.type) {
    case 'ADD_LIKE':
      const i = action.code;
      console.log(state);
      const posts = [...state.posts];
      console.log(posts);
      posts[i].likes++;
      console.log(posts[i].likes);
      return {...state,posts};
      // return{...state, posts: state.posts.slice(0,i),likes:state.posts[i].likes=+ 1,...state.posts.slice(i-1)}
      // return[...state.posts.slice(0,i),{...state.posts[i],likes: state.posts[i]=+ 1},...state.posts.slice(i+1)]
      
      default:
        return state;
 }
}
export default rootReducer;