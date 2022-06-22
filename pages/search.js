import { useContext, useState } from "react"
import { BlogContext } from "../context/context"
import Image from "next/image"
import BlogCard from "../components/blogCard"
import BasicLayout from "../components/layout/basicLayout"
import BlogCardShimmer from "../components/shimmers/blogCardShimmer"
import search from '../public/assets/svg/search.svg'

const Search = () => {
    const { setQuery, query, formatSearchQuery, cancelSearch } = useContext(BlogContext)
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const searchPosts = async () => {
        try {
            if (query === '') return

            setLoading(true)

            let res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/post/search-posts/' + formatSearchQuery(query))
            let data = await res.json()
            if (!data.status) return
            setPosts(data.payload)
            setLoading(false)
        }

        catch (e) {
            console.warn(e.message)
            setLoading(false)
        }
    }

    return (
        <>
            <BasicLayout metaTitle="🔍 Search">
                <div className='fixed top-0 left-0 w-screen bg-[#fff] z-20 p-2 px-5 flex items-center justify-center'>
                    <div className="w-[90%] max-w-7xl">
                        {/* <div className={inputStyles.inputContainer}> */}
                        <div className="flex items-center w-full border border-borderGray p-1 px-3 rounded-md">
                            <Image src={search} width={16} alt='search' className='search-icon' />
                            <input value={query} onChange={e => {
                                setQuery(e.target.value)
                                searchPosts()
                            }} className='w-full ml-3 outline-none' placeholder='Search posts...' />
                        </div>
                    </div>
                    <p className='ml-2 cursor-pointer hover:text-brand' onClick={cancelSearch}>Cancel</p>
                </div>

                {!loading
                    ? <div className='w-screen z-10 bg-[#fff] fixed top-0 left-0'>
                        <BasicLayout>
                            <ul className="overflow-scroll h-[94vh] -mt-10 pt-10">
                                <b className='mb-5 block opacity-50'>Showing results for &lsquo;{query}&rsquo;</b>
                                {posts.map((post, i) => {
                                    return <BlogCard article={post} key={i} />
                                })}
                            </ul>
                        </BasicLayout>
                    </div>
                    : null}

                {/* {posts.length <= 0 ? "No posts found" : null} */}

                <BlogCardShimmer show={loading} />
            </BasicLayout>
        </>
    )
}

export default Search