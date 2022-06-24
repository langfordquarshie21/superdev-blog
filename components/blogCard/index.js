import Link from "next/link"
import Image from "next/image"

// /* eslint-disable @next/next/no-img-element */
// const BlogCard = ({ article }) => {
//     return (
//         <>
//             <li className="border-b border-b-borderGray lg:pb-10 cursor-pointer lg:mb-8 pb-16 mb-16 blog-card">
//                 <Link href={`/read?${article.search_title}`}>
//                     <div className='flex items-center flex-col lg:flex-row justify-between'>
//                         <div className='w-full lg:max-w-3xl'>
//                             <b className='lg:text-2xl text-xl font-bold'>{article.title}</b>
//                             <div className='opacity-50'><small>{article.timestamp} • {article.read_length} min read • {article.views} views</small></div>
//                             <p className='mt-5 opacity-50 leading-[30px] multiline--4'>{article.content}</p>
//                         </div>
//                         <img className='w-full mt-5 lg:w-[320px] rounded-md border border-borderGray' src={article.banner} alt={article.title} />
//                     </div>
//                 </Link>
//             </li>
//         </>
//     )
// }


const BlogCard = ({ article }) => {
    return (
        <>
            <Link href={`/read?${article.search_title}`}>
                <div className="blog-card w-full cursor-pointer lg:p-3 lg:-ml-3 lg:mb-10 mb-14">
                    <img src={article.banner} alt={article.title} className='rounded-[20px]' />
                    <div className="mt-5">
                        <p className="my-1 text-xl">{article.title}</p>
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