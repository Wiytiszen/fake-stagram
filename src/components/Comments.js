import React from "react";
import PropTypes from "prop-types";

const Comments = (props) => {
  const user = React.createRef();
  const text = React.createRef();
  const form = React.createRef();
  const comments = props.comments[props.photoId] || [];
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addComment(props.photoId, user.current.value, text.current.value);
    form.current.reset();
  };
  return (
    <div>
      {comments.map((com, i) => {
        return (
          <div className="comment" key={i}>
            <p>
              <strong>{com.user}</strong>- {com.text}
            </p>
            <span className="delete"
              onClick={() => {
                props.delComment(props.photoId, i);
              }}
            >
              {" "}
              X{" "}
            </span>
          </div>
        );
      })}
      <form className="new-comment" ref={form} onSubmit={handleSubmit}>
        <input type="text" ref={user} placeholder="user" />
        <input type="text" ref={text} placeholder="comment" />
        <input type="submit" hidden />
      </form>
    </div>
  );
};

Comments.propTypes = {
  delComment: PropTypes.func,
  addComment: PropTypes.func,
  comments: PropTypes.object,
};

export default Comments;
