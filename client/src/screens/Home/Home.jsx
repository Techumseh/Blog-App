import React from "react";
import Posts from "../Posts/Posts";
import Layout from "../../components/shared/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div>
        <Posts />
      </div>
    </Layout>
  );
};

export default Home;
