import React from "react";
import CommentSection from "./CommentSection";
import "./components.css";
import PropTypes from "prop-types";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entry: "", comments: this.props.data.comments };
  } // end constructor

  handleChanges = e => {
    this.setState({ entry: e.target.value });
    console.log(this.state.entry);
  };

  submitItem = e => {
    e.preventDefault();
    console.log(
      `inside submitItem with e.target: ${e.target.firstChild.value}`
    );
    const newComment = {
      username: "anonymous",
      text: this.state.entry
    };

    this.setState({
      comments: [...this.state.comments, newComment],
      entry: ""
    });
  };

  render() {
    return (
      <div className="post-container">
        <div className="post-title">
          <p>
            <img
              className="thumbnail"
              src={this.props.data.thumbnailUrl}
              alt="thumbnail"
            />
            {this.props.data.username}
          </p>
          <p>{this.props.data.timestamp}</p>
        </div>
        <img
          className="main-image"
          src={this.props.data.imageUrl}
          alt="main image"
        />

        <p>
          <strong>{this.props.data.likes} likes</strong>
        </p>

        {this.state.comments.map(comment => (
          <CommentSection data={comment} />
        ))}
        <form onSubmit={this.submitItem}>
          <input
            onChange={this.handleChanges}
            className="input"
            type="text"
            name="entry"
            value={this.state.entry}
            placeholder="Add a Comment ..."
          />
        </form>
      </div>
    );
  }
} // end  PostContainer component

PostContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  })
};

PostContainer.defaultProps = {
  data: []
};

export default PostContainer;
