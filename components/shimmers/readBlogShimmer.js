const ReadBlogShimmer = ({ show }) => {
    if (show) return (
        <>
            <section>
                <div className='shimmer w-full h-[250px] mt-5' />
                <div className="w-full p-[15px] my-10 shimmer" />
                <div className="w-full p-[5px] my-5 shimmer" />
                <div className="w-full p-[5px] my-5 shimmer" />
                <div className="w-full p-[5px] my-5 shimmer" />
                <div className="w-full p-[5px] my-5 shimmer" />
                <div className="w-full p-[5px] my-5 shimmer" />
            </section>
        </>
    )

    return null
}

export default ReadBlogShimmer