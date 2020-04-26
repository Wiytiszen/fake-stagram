//functions that create actions
export const addLike = (code) => ({
  type: 'ADD_LIKE',// <== this is the most important  
  code
 });
export const addComment =(photoId, user, text)=> ({
  type: 'ADD_COM',// <== this is the most important  
  photoId,
  user,
  text
 });

