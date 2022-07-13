import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { BlogContext } from "../../context/context";

const BlogCard = ({ article }) => {
  const { rgbDataURL } = useContext(BlogContext);

  return (
    <>
      <Link href={`/read?${article.search_title}`}>
        {/* <div className="blog-card shadow-md m-5 rounded-2xl hover:shadow-xl hover:scale-105 transition bg-[#fff] lg:scale-95 w-full cursor-pointer lg:p-3 lg:-ml-3 lg:mb-10 mb-14"> */}
        {/* <div className="shadow-md bg-[#fff] lg:m-2 mb-5 p-3 rounded-2xl cursor-pointer transition hover:shadow-none hover:-translate-y-[3px]"> */}
        <div className="shadow-md bg-[#fff] lg:m-2 mb-5 rounded-2xl h-[450px] flex items-center flex-col justify-between cursor-pointer transition hover:shadow-none hover:-translate-y-[3px]">
          <div className="w-full min-h-[190px] lg:min-h-[190px] relative">
            <Image
              layout="fill"
              loading="lazy"
              placeholder="blur"
              quality={65}
              src={article.banner}
              alt={article.title}
              blurDataURL={rgbDataURL(226, 234, 254)}
              className="rounded-[10px] rounded-b-none"
            />
          </div>
          <div className="w-full px-5 -mb-5">
            <p className="lg:text-xl font-[500] text-[17px]">
              {article.title}
            </p>
          </div>
          <div className="w-full px-5 opacity-60">
            <p className="multiline--3 text-[18px]">{article.description}</p>
          </div>
          <div className="w-full px-5 pb-5 opacity-80 text-right">
            <p>Read more ▶️</p>
          </div>

          {/* <p className="my-1 p-5 lg:text-xl text-[17px]">{article.title}</p> */}
          {/* <div className="text-left">
          </div> */}
          {/* <div className="mt-5 p-5">
            <div className="opacity-50">
              {article.timestamp} • {article.read_length} min read
            </div>
          </div> */}
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
