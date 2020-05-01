import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

const Single = (props) =>{
  const indexPost = props.posts.findIndex(
    (post) => post.code === props.match.params.photoId
  );
 
  const post = props.posts[indexPost];
  return (
    <div className="single-photo">
      <Photo i={indexPost} post={post} {...props}/>
      <Comments photoId={props.match.params.photoId}{...props}/>
    </div>
  );
}
const mapStateToProps = (state)=>{
  return {
    posts: state.posts,
    comments: state.comments,
  };
}
const mapDispatchToProps = (dispatch) =>{
  return {...bindActionCreators(actionCreators, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(Single);