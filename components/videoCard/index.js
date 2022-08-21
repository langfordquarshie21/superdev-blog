import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { BlogContext } from "../../context/context";

const VideoCard = (video) => {
  const { rgbDataURL } = useContext(BlogContext);
  const { link, title, thumbnail } = video;

  return (
    <>
      <Link href={link}>
        <div className="shadow-md bg-[#fff] lg:m-2 m-5 ml-0 rounded-2xl h-[330px] flex items-center flex-col justify-between cursor-pointer transition hover:shadow-none hover:-translate-y-[3px]">
          <div className="w-full min-h-[190px] lg:min-h-[190px] relative">
            <Image
              layout="fill"
              loading="lazy"
              placeholder="blur"
              quality={65}
              src={thumbnail}
              alt={title}
              blurDataURL={rgbDataURL(226, 234, 254)}
              className="rounded-[10px] rounded-b-none"
            />
          </div>
          <div className="w-full px-5 -mb-5">
            <p className="multiline--2 lg:text-xl font-[500] text-[17px]">{title}</p>
          </div>
          <div className="w-full px-5 pb-5 opacity-80 text-right">
            <p>Watch now ▶️</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
