import React from 'react';

const Comments = (props) =>{
  return (

    <div>
      {props.comments.map((com,i)=>{
          return <p key={i}><strong>{com.user}</strong>- {com.text}</p>        
      })
      }
      <form className="new-comment">
        <input type="text" placeholder="user"></input>
        <input type="text" placeholder="comment"></input>
        <input type="submit" hidden></input>
      </form>
    </div>
  );
}

export default Comments;