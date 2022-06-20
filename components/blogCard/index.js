import Link from "next/link"

/* eslint-disable @next/next/no-img-element */
const BlogCard = ({ post }) => {
    return (
        <>
            <li className="border-b border-b-borderGray lg:pb-10 cursor-pointer lg:mb-8 pb-16 mb-16 blog-card">
                <Link href={`/read?${post.search_title}`}>
                    <div className='flex items-center flex-col lg:flex-row justify-between'>
                        <div className='w-full lg:max-w-3xl'>
                            <b className='lg:text-2xl text-xl font-bold'>{post.title}</b>
                            <div className='opacity-50'><small>{post.timestamp} | {post.read_length} min read | {post.views} views</small></div>
                            <p className='mt-5 opacity-70 multiline--4'>{post.content}</p>
                        </div>
                        <img className='w-full mt-5 lg:w-[320px]' src={post.banner} alt='blog title' />
                    </div>
                </Link>
            </li>
        </>
    )
}

export default BlogCard