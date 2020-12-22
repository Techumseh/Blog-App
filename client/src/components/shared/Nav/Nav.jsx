import {Link} from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div>
        <Link to="/">
          <h1 className="blog-title">Blog App</h1>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/posts">
          <p>Posts</p>
        </Link>
        <Link to="/add-post">
          <p>Create Post</p>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
