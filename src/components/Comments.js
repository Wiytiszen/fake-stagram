import React from 'react';


const Comments = (props) =>{
  const user = React.createRef();
  const text = React.createRef();
  const form = React.createRef();
  const comments = props.comments[props.photoId] ||[];
  const handleSubmit= (e)=>{
    e.preventDefault();
    props.addComment(props.photoId, user.current.value, text.current.value);
    form.current.reset();
  }
  return (

    <div>
      {
      comments.map((com,i)=>{
          return (
            <div className ="delete-Comment"key={i}>
              <p ><strong>{com.user}</strong>- {com.text}</p><button  onClick ={()=>{props.delComment(props.photoId,i)}}> X </button>
            </div>
          )        
      })
      }
      <form className="new-comment" ref={form} onSubmit={handleSubmit}>
        <input type="text" ref={user} placeholder="user"/>
        <input type="text" ref={text} placeholder="comment"/>
        <input type="submit" hidden/>
      </form>
    </div>
  );
}

export default Comments;