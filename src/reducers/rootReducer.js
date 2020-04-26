// import  actions

// define the reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIKE":
      const i = action.code;
      const posts = [...state.posts];
      posts[i].likes++;
      return { ...state, posts };
    case "ADD_COM":
      // photoId, user, text
      const comments = { ...state.comments };

      comments[action.photoId].push({ user: action.user, text: action.text });
      return { ...state, comments };
    default:
      return state;
  }
};
export default rootReducer;
