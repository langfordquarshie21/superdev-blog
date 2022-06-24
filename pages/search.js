import { useContext, useState, useEffect } from "react"
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

    const meta = {
        title: 'Search 🔍',
        description: 'Search for an article on Superdev',
        url: 'https://superdev.dev/search',
        banner: ''
    }

    const searchPosts = async (searchQuery) => {
        try {
            if (query === '') return
            setLoading(true)
            const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/post/search-posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(searchQuery)
            })
            let data = await res.json()
            if (!data.status) return
            setPosts(data.payload)
            setLoading(false)
            console.warn(data.payload[0])
        }

        catch (e) {
            console.warn(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        searchPosts(formatSearchQuery(query))
        return () => { }
    }, [query])


    return (
        <>
            <BasicLayout meta={meta}>
                <div className='fixed top-0 left-0 w-screen bg-[#fff] z-20 p-2 px-5 flex items-center justify-center'>
                    <div className="w-[90%] max-w-7xl">
                        <div className="flex items-center w-full border border-borderGray p-1 px-3 rounded-md">
                            <Image src={search} width={16} alt='search' className='search-icon' />
                            <input value={query} onChange={e => {
                                setQuery(e.target.value)
                            }} className='w-full ml-3 outline-none' placeholder='Search posts...' />
                        </div>
                    </div>
                    <p className='ml-2 cursor-pointer hover:text-brand' onClick={cancelSearch}>Cancel</p>
                </div>

                {!loading
                    ? <div className='w-screen z-10 bg-[#fff] fixed top-0 left-0'>
                        <BasicLayout meta={meta}>
                            <ul className="overflow-scroll h-[94vh] -mt-10 pt-10">
                                <b className='mb-5 block opacity-50'>Showing results for &lsquo;{query}&rsquo;</b>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 p-0">
                                    {posts.map((article, i) => {
                                        return <BlogCard article={article} key={i} />
                                    })}
                                </ul>
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