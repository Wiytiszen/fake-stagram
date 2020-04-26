//functions that create actions
const addLike = (code) => ({
  type: 'ADD_LIKE',// <== this is the most important  
  code
 });

export default addLike;