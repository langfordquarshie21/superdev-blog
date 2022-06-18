/* eslint-disable @next/next/no-img-element */
import BlogCard from "../components/blogCard"
import Header from "../components/header"
import BasicLayout from "../components/layout/basicLayout"

const Blogs = () => {
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
            <footer className='text-greyText flex text-center items-center justify-center p-10 border-t border-t-borderGray'>
                <small>&copy; 2022 | All Rights Reserved | superdevv</small>
            </footer>
        </>
    )
}

export default Blogs