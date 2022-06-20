/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import BlogCard from "../components/blogCard"
import Header from "../components/header"
import BasicLayout from "../components/layout/basicLayout"

const Articles = () => {
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        let res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/post/get-posts')
        let data = await res.json()
        if (!data.status) return
        setPosts(data.payload)
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
            </BasicLayout>
        </>
    )
}

export default Articles