import Image from "next/image"
import { useContext } from "react"
import BlogCard from "../components/blogCard"
import BasicLayout from "../components/layout/basicLayout"
import { inputStyles } from "../components/styles/input.styles"
import { BlogContext } from "../context/context"
import search from '../public/assets/svg/search.svg'

const Search = () => {
    const { setQuery, query } = useContext(BlogContext)

    const cancelSearch = () => {
        window.history.back()
    }

    return (
        <>
            <BasicLayout metaTitle="🔍 Search">
                <div className='fixed top-0 left-0 w-screen bg-[#fff] z-20 p-2 px-5 flex items-center justify-center'>
                    <div className="w-[90%] lg:w-[30%]">
                        <div className={inputStyles.inputContainer}>
                            <Image src={search} width={16} alt='search' className='search-icon' />
                            <input value={query} onChange={e => setQuery(e.target.value)} className={inputStyles.input} placeholder='Search posts...' />
                        </div>
                    </div>
                    <p className='ml-2 cursor-pointer hover:text-brand' onClick={cancelSearch}>Cancel</p>
                </div>

                {query !== ''
                    ? <div className='w-screen z-10 bg-[#fff] fixed top-0 left-0'>
                        <BasicLayout>
                            <ul className="overflow-scroll h-[94vh] -mt-10 pt-10">
                                <b className='mb-5 block opacity-50'>Showing results for &lsquo;{query}&rsquo;</b>
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                            </ul>
                        </BasicLayout>
                    </div>
                    : null}
            </BasicLayout>
        </>
    )
}

export default Search