const BlogCardShimmer = ({ show }) => {
    if (show) return (
        <>
            <Shimmer />
            <Shimmer />
            <Shimmer />
        </>
    )

    return null
}

const Shimmer = () => {
    return (
        <>
            <section className="lg:pb-10 mb-8 pb-16 lg:-mt-[50px] blog-card">
                <div className='flex items-center flex-col lg:flex-row justify-between'>
                    <div className='w-full lg:max-w-3xl'>
                        <div className="w-full p-[10px] mb-3 shimmer" />
                        <div className="w-full p-[5px] mb-3 shimmer" />
                        <div className="w-full p-[5px] mb-3 shimmer" />
                        <div className="w-full p-[5px] mb-3 shimmer" />
                        <div className="w-full p-[5px] mb-3 shimmer" />
                    </div>
                    <div className='shimmer w-full h-[200px] mt-5 lg:w-[200px]' />
                </div>
            </section>
        </>
    )
}

export default BlogCardShimmer