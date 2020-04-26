import React from "react";
import { Link } from "react-router-dom";

import addLike from "../actions/index";
import { connect } from 'react-redux'

const Photo = (props) => {
  return (
    <figure className="grid-figure">
      <Link to={`/view/${props.post.code}`}>
        <img
          src={props.post.display_src}
          alt={props.post.caption}
          style={{ width: "100%" }}
        />
      </Link>
      <figcaption>
        <p>{props.post.caption}</p>
        <div className="control-buttons">
            <button onClick={()=> props.handleLike( props.i)} className="likes">&hearts;{props.post.likes}</button>
          </div>
      </figcaption>
    </figure>
  );
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) =>{
  return({
		handleLike: (i) => dispatch(/*action */addLike(i))
	});
}

export default connect(mapStateToProps,mapDispatchToProps)(Photo);
