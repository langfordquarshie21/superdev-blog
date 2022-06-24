import Link from "next/link"

const BlogCard = ({ article }) => {
    return (
        <>
            <Link href={`/read?${article.search_title}`}>
                <div className="blog-card w-full cursor-pointer lg:p-3 lg:-ml-3 lg:mb-10 mb-14">
                    <img src={article.banner} alt={article.title} className='rounded-[10px]' />
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