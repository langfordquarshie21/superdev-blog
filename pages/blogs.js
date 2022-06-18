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
                    {/* <ul className="grid grid-cols-3"> */}
                    <ul className="">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </ul>
                </div>
            </BasicLayout>
            <footer className='text-greyText flex items-center justify-center p-10 border-t border-t-borderGray'>
                &copy; 2022 | All Rights Reserved | superdevv
            </footer>
        </>
    )
}

export default Blogs