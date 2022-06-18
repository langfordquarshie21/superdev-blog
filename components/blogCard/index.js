// /* eslint-disable @next/next/no-img-element */
// const BlogCard = () => {
//     return (
//         <>
//             <li className="w-[300px] cursor-pointer mb-10 blog-card">
//                 <img
//                     objectFit='cover'
//                     width={2222}
//                     height={2222}
//                     src='https://langfordk.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1640256977030%2FLrBHfh8g64.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75'
//                     alt='blog title'
//                     className='blog-grid-banner' />
//                 <div className="mt-5">
//                     <div className="mb-2">
//                         <small>16 Jun, 2020 | 4 min read | 23K views</small>
//                     </div>
//                     <b className="text-[#000]">MongoDB and Vercel: from idea to global fullstack app in seconds</b>
//                 </div>
//             </li>
//         </>
//     )
// }

import Link from "next/link"

// export default BlogCard


/* eslint-disable @next/next/no-img-element */
const BlogCard = () => {
    return (
        <>
            <li className="border-b border-b-borderGray lg:pb-10 cursor-pointer lg:mb-8 pb-16 mb-16 blog-card">
                <Link href='/read?a-random-title'>
                    <div className='flex items-center flex-col lg:flex-row justify-between'>
                        <div className='max-w-3xl'>
                            <b className='lg:text-2xl text-xl font-bold'>MongoDB and Vercel: from idea to global fullstack app in seconds</b>
                            <div className='opacity-50'><small>16 Jun, 2020 | 4 min read | 23K views</small></div>
                            <p className='mt-5 opacity-70 multiline--6'>Lets build a desktop app with Deno. Yes. A desktop app. No Electron. Actually, lets make it harder on ourselves! lets make a 3D desktop app! Will it be a GOOD desktop app? Of course not! Whose blo…</p>
                        </div>
                        <img className='w-full mt-5 lg:w-[320px]' src='https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1655321193841%2FUqh2tSGdF.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75' alt='blog title' />
                    </div>
                </Link>
            </li>
        </>
    )
}

export default BlogCard