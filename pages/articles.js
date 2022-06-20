/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import BlogCard from "../components/blogCard"
import Header from "../components/header"
import BasicLayout from "../components/layout/basicLayout"
import BlogCardShimmer from "../components/shimmers/blogCardShimmer"

const Articles = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    const getPosts = async () => {
        try {
            let res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/post/get-posts')
            let data = await res.json()
            if (!data.status) return
            setPosts(data.payload)
            setLoading(false)
        }

        catch (e) {
            setLoading(false)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
            <Header />
            <BasicLayout>
                <ul className="-mt-10">
                    {posts.map((post, i) => {
                        return <BlogCard post={post} key={i} />
                    })}
                </ul>

                {/* <div className="flex">
                    <div>
                        <div className="w-full p-[5px] mb-3 shimmer" />
                        <div className="w-full p-[5px] mb-3 shimmer" />
                        <div className="w-full p-[5px] mb-3 shimmer" />
                        <div className="w-full p-[5px] mb-3 shimmer" />
                    </div>
                    <div className="w-full h-full p-20 shimmer" />
                </div> */}

                <BlogCardShimmer show={loading} />
            </BasicLayout>
        </>
    )
}

export default Articles