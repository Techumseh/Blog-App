import React from "react";
import "./PostCard.css";
import {Link} from "react-router-dom";

const PostCard = (props) => {
  return (
    <div className="post-card">
      <Link className="card" to={`/posts/${props._id}`}>
        <img className="post-card-image" src={props.imgUrl} alt={props.name} />
        <div className="card-name">{props.name}</div>
      </Link>
    </div>
  );
};

export default PostCard;
