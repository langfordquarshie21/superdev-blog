import Image from "next/image"
import Link from "next/link"
import { useContext } from "react"
import { BlogContext } from "../../context/context"

const BlogCard = ({ article }) => {
    const { rgbDataURL } = useContext(BlogContext)

    return (
        <>
            <Link href={`/read?${article.search_title}`}>
                <div className="blog-card w-full cursor-pointer lg:p-3 lg:-ml-3 lg:mb-10 mb-14">
                    <div className="w-full min-h-[220px] lg:min-h-[270px] relative">
                        <Image
                            layout="fill"
                            loading='lazy'
                            placeholder="blur"
                            quality={65}
                            src={article.banner}
                            alt={article.title}
                            blurDataURL={rgbDataURL(226, 234, 254)}
                            className='rounded-[10px]' />
                    </div>
                    <div className="mt-5">
                        <p className="my-1 lg:text-xl text-[17px]">{article.title}</p>
                        <div className='opacity-50'>
                            {article.timestamp} • {article.read_length} min read
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default BlogCard