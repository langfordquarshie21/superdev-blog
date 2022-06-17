/* eslint-disable @next/next/no-img-element */
import BlogCard from "../components/blogCard"
import Header from "../components/header"
import BasicLayout from "../components/layout/basicLayout"

const Blogs = () => {
    return (
        <>
            <Header />
            <BasicLayout>
                <div>
                    <ul className="grid grid-cols-3">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </ul>
                </div>
            </BasicLayout>
        </>
    )
}

export default Blogs