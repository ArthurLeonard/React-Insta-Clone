import React from "react";
import "./components.css";

const CommentSection = props => {
  return (
    <div className="comment-section">
      <p>
        <strong>{props.data.username} </strong> {props.data.text}{" "}
      </p>
    </div>
  );
}; // end todo component

export default CommentSection;
