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
            let _posts
            if (!data.status) return
            _posts = data.payload
            _posts.reverse()
            setPosts(_posts)
            setLoading(false)
            console.log(_posts[0])
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
                <BlogCardShimmer show={loading} />
            </BasicLayout>
        </>
    )
}

export default Articles