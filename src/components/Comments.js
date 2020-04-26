import React from 'react';
import {connect} from 'react-redux';
import  {addComment} from "../actions/index";

const Comments = (props) =>{
  const user = React.createRef();
  const text = React.createRef();
  const form = React.createRef();

  const handleSubmit= (e)=>{
    e.preventDefault();
    props.handleComment(props.photoId, user.current.value, text.current.value);
    form.current.reset();
  }
  return (

    <div>
      {props.comments[props.photoId].map((com,i)=>{
          return <p key={i}><strong>{com.user}</strong>- {com.text}</p>        
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
		handleComment: (photoId, user, text) => dispatch(/*action */addComment(photoId, user, text))
	});
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments);
