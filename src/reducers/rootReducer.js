// import  actions

// define the reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIKE":
      const i = action.code;
      const posts = [...state.posts];
      posts[i].likes++;
      return { ...state, posts };
    case "ADD_COM":{
      // photoId, user, text
      const comments = { ...state.comments };
      if(!comments[action.photoId]){
        comments[action.photoId]=[];
      }
      comments[action.photoId].push({ user: action.user, text: action.text });
      return { ...state, comments };
      }
    case "DEL_COM":{
      // photoId, user, text
      const Allcomments = { ...state.comments };
      const comments = [ ...state.comments[action.photoId]].filter((value,index) => {return (index!==action.i)})
      Allcomments[action.photoId]=comments;
      return {...state,comments:Allcomments};
    }
    default:
      return state;
  }
};
export default rootReducer;
