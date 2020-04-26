import React from "react";
import { connect } from "react-redux";
import Photo from "./Photo";
import Comments from "./Comments";

function Single(props) {
  const indexPost = props.posts.findIndex(
    (post) => post.code === props.match.params.photoId
  );
  const comments = props.comments[props.match.params.photoId] || [];
  const post = props.posts[indexPost];
  return (
    <div className="single-photo">
      <Photo i={indexPost} post={post} />
      <Comments comments={comments} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

export default connect(mapStateToProps, null)(Single);
