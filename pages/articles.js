/* eslint-disable @next/next/no-img-element */
import BlogCard from "../components/blogCard"
import Header from "../components/header"
import BasicLayout from "../components/layout/basicLayout"

const Articles = () => {
    return (
        <>
            <Header />
            <BasicLayout>
                <ul className="-mt-10">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </ul>
            </BasicLayout>
        </>
    )
}

export default Articles