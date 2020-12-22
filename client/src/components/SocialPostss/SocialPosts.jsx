import React, {Component} from "react";
import "./SocialPosts.css";
import SocialPost from "../SocialPost/SocialPost";
import {getPosts} from "../../services/posts";

class SocialPosts extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  async componentDidMount() {
    const posts = await getPosts();
    this.setState({posts});
  }

  render() {
    const SOCIAL = this.state.posts.map((post, index) => (
      <SocialPost
        _id={post._id}
        name={post.name}
        imgUrl={post.imgURL}
        content={post.content}
        key={index}
      />
    ));

    return <div className="social-container"> {SOCIAL} </div>;
  }
}
export default SocialPosts;