import React from 'react';
import {connect} from 'react-redux';
import  {addComment, delComment} from "../actions/index";

const Comments = (props) =>{
  const user = React.createRef();
  const text = React.createRef();
  const form = React.createRef();
  const comments = props.comments[props.photoId] ||[];
  const handleSubmit= (e)=>{
    e.preventDefault();
    props.handleAddComment(props.photoId, user.current.value, text.current.value);
    form.current.reset();
  }
  return (

    <div>
      {
      comments.map((com,i)=>{
          return (
            <div className ="delete-Comment"key={i}>
              <p ><strong>{com.user}</strong>- {com.text}</p><button  onClick ={()=>{props.handleDelComment(props.photoId,i)}}> X </button>
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

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) =>{
  return({
		handleAddComment: (photoId, user, text) => dispatch(/*action */addComment(photoId, user, text)),
		handleDelComment: (photoId, i) => dispatch(/*action */delComment(photoId, i))
	});
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments);