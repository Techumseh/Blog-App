import PostCards from "../../components/PostCards/PostCards";
import Layout from "../../components/shared/Layout/Layout";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <PostCards />
      </div>
    </Layout>
  );
};

export default Home;
