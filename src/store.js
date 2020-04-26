import {createStore } from "redux";
// 2bis create Action and reducers and import rootReducer here
// import posts from "../postExamples";
import rootReducer from "./reducers/rootReducer";

import posts from "../src/postExamples";
import comments from "../src/comments";

// create an object for the default data
const defaultState = {
  posts,
  comments
};

const store = createStore (rootReducer,defaultState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// // create an Default State for init
// const defaultState= {
//   posts:posts,
//   comments:comments
// };
// //create an store
// const store = createStore (rootReducer,defaultState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;