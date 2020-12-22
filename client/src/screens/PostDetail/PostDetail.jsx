import React, {useState, useEffect} from "react";
import "./PostDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import {getPost, deletePost} from "../../services/posts";
import {useParams, Link} from "react-router-dom";
import "./PostDetail.css";

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const {id} = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
      setLoaded(true);
    };
    fetchPost();
  }, [id]);
  if (!isLoaded) {
    return <h1>Loading ...</h1>;
  }
  return (
    <Layout>
      <div className="post-detail-container">
        <div className="detail-image-container">
          <img
            className="post-detail-image"
            src={post.imgURL}
            alt={post.name}
          />
        </div>
        <div className="details-container">
          <div className="name">
            {" "}
            <h2>{post.name}</h2>
          </div>
          <div className="content">{post.content}</div>
          <div className="buttons">
            <button
              className="delete-button"
              onClick={() => deletePost(post.id)}
            >
              Delete
            </button>
            <button className="edit-button">
              <Link className="edit-link" to={`/posts/${post.id}/edit`}>
                Edit
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default PostDetail;
