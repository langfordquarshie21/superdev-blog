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
        <div className="shadow-md bg-[#fff] m-5 mx-0 sm:mx-2 p-3 rounded-2xl cursor-pointer lg:m-3 transition hover:scale-105 hover:shadow-lg">
          <div className="w-full min-h-[220px] lg:min-h-[270px] relative">
            <Image
              layout="fill"
              loading="lazy"
              placeholder="blur"
              quality={65}
              src={article.banner}
              alt={article.title}
              blurDataURL={rgbDataURL(226, 234, 254)}
              className="rounded-[10px]"
            />
          </div>
          <div className="mt-5">
            <p className="my-1 lg:text-xl text-[17px]">{article.title}</p>
            <div className="opacity-50">
              {article.timestamp} • {article.read_length} min read
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
