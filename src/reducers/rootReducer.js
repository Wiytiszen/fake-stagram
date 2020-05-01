const rootReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIKE":
      const i = action.code;
      const posts = [...state.posts];
      posts[i].likes++;
      return { ...state, posts };
    case "ADD_COM":{
      const comments = { ...state.comments };
      if(!comments[action.photoId]){
        comments[action.photoId]=[];
      }
      comments[action.photoId].push({ user: action.user, text: action.text });
      return { ...state, comments };
      }
    case "DEL_COM":{
      const allComments = { ...state.comments };
      const comments = [ ...state.comments[action.photoId]].filter((value,index) => {return (index!==action.i)})
      allComments[action.photoId]=comments;
      return {...state,comments:allComments};
    }
    default:
      return state;
  }
};
export default rootReducer;
