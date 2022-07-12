/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../context/context";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import ReadLayout from "../components/layout/readLayout";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import BlogCard from "../components/blogCard";
import Image from "next/image";

export async function getServerSideProps(context) {
  const _query = context.query;
  const _queryValue = Object.keys(_query)[0];
  const res = await fetch(
    process.env.NEXT_PUBLIC_SERVER_URL + "/post/get-post/" + _queryValue
  );
  const data = await res.json();

  if (data.payload)
    return {
      props: { article: data.payload },
    };

  return {
    props: { article: data },
  };
}

const Read = ({ article }) => {
  const { rgbDataURL } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [rawTitle, setRawTitle] = useState("");
  const [similarArticles, setSimilarArticles] = useState([]);

  const getSimilarArticles = async () => {
    try {
      // if (!article.tags) return

      let res = await fetch(
        process.env.NEXT_PUBLIC_SERVER_URL + "/post/get-posts-by-tags",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(article.tags),
        }
      );

      let data = await res.json();

      if (!data.status) return;

      let _payload = data.payload;
      let _posts = [];

      for (let i = 0; i < _payload.length; i++) {
        const element = _payload[i];
        if (element.id !== article.id) {
          _posts.push(element);
        }
      }

      _posts.reverse();
      setSimilarArticles(_posts);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    let _title = window.location.search.replace("?", "").replace("%27", "'");
    let _rawTitle = window.location.href;
    setTitle(_title);
    setRawTitle(_rawTitle);
    getSimilarArticles();
  }, [article, similarArticles]);

  useEffect(() => {
    document.querySelectorAll("pre code").forEach((el) => {
      hljs.highlightAll(el);
    });
  }, [article]);

  if (article.content)
    return (
      <>
        <ReadLayout
          readLength={article.read_length}
          timestamp={article.timestamp}
          meta={{
            title: article.title,
            description: article.description,
            image: article.banner,
            url: rawTitle,
          }}
        >
          <div>
            {/* <img src={article.banner} alt={article.title} className='mb-5 border border-borderGray rounded-md' /> */}

            <div className="w-full min-h-[200px] lg:h-[480px] mb-10 lg:min-h-[270px] relative">
              <Image
                layout="fill"
                loading="lazy"
                placeholder="blur"
                src={article.banner}
                alt={article.title}
                blurDataURL={rgbDataURL(226, 234, 254)}
                className="rounded-[10px]"
              />
            </div>

            <ReactMarkdown
              remarkRehypeOptions={{ commonmark: true }}
              className="md-viewer lg:text-xl text-[17px] pb-20"
            >
              {article.content}
            </ReactMarkdown>
            <div>
              <b className="mb-4 block">Find more topics</b>
              <ul className="flex flex-wrap">
                {article.tags.map((tag, i) => {
                  return (
                    <Link key={i} href={`/tag?${tag}`}>
                      <li className={styles.tag}>#{tag}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            {similarArticles.length > 0 ? (
              <div className="mt-20">
                <h2>Related posts ➡️</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 p-0 mt-5">
                  {similarArticles.map((article, i) => {
                    return <BlogCard article={article} key={i} />;
                  })}
                </ul>
              </div>
            ) : null}
          </div>
        </ReadLayout>
      </>
    );

  return (
    <>
      <ReadLayout
        meta={{
          title: "Post not found",
          description: "",
          images: "",
        }}
      >
        <h3 className="opacity-50 mb-20">Oops! Post not found</h3>
      </ReadLayout>
    </>
  );
};

const styles = {
  tag: `border text-[#707070] border-borderGray w-max py-[8px] px-3 rounded-md mr-3 mb-3 text-sm hover:bg-[#000] hover:text-[#fff] cursor-pointer`,
};

export default Read;
