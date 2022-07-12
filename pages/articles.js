/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { defaultMeta } from "../content";
import BlogCard from "../components/blogCard";
import Header from "../components/header";
import BasicLayout from "../components/layout/basicLayout";
import BlogCardShimmer from "../components/shimmers/blogCardShimmer";
import { textStyles } from "../components/styles/text.styles";

const Articles = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async () => {
    try {
      let res = await fetch(
        process.env.NEXT_PUBLIC_SERVER_URL + "/post/get-posts"
      );
      let data = await res.json();
      let _posts;
      if (!data.status) return;
      _posts = data.payload;
      _posts.reverse();
      setPosts(_posts);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Header />
      <BasicLayout meta={defaultMeta}>
        {/* <h2 className={textStyles.h4}>🤩 My recent posts</h2> */}
        {/* <br /> */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 -mt-20">
          {posts.map((article, i) => {
            return <BlogCard article={article} key={i} />;
          })}
        </ul>
        <BlogCardShimmer show={loading} />
      </BasicLayout>
    </>
  );
};

export default Articles;
