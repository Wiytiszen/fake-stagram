import React from "react";
import { Link } from "react-router-dom";


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
            <button onClick={()=> props.addLike( props.i)} className="likes">&hearts;{props.post.likes}</button>
            <Link className="button" to={`/view/${props.post.code}`}>
              <span className="comment-count">
                <span> Comments </span>
                {props.comments[props.post.code] ? props.comments[props.post.code].length : 0 }
              </span>
            </Link>
          </div>
      </figcaption>
    </figure>
  );
};



export default Photo;