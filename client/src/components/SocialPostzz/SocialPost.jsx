import React from "react";
import "./SocialPost.css";
import {Link} from "react-router-dom";

const SocialPost = (props) => {
  return (
    <div className="social-card">
      <Link className="social-card" to={`/posts/${props._id}`}>
        <img className="social-card-image" src={props.imgUrl} alt={props.name} />
        <div className="social-name">{props.name}</div>
      </Link>
    </div>
  );
};

export default SocialPost;