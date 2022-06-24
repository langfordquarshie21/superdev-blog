const BlogCardShimmer = ({ show }) => {
    if (show) return (
        <section>
            <ul className="grid grid-cols-1 sm:grid-cols-2 p-0">
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
                <ShimmerCard />
            </ul>
        </section>
    )

    return null
}

const ShimmerCard = () => {
    return (
        <>
            <div className="w-full lg:p-3 lg:-ml-3 lg:mb-10 mb-14">
                <div className="w-full h-[250px] rounded-[10px] mb-3 shimmer" />
                <div className="w-full p-[6px] my-3 rounded-xl shimmer" />
                <div className="w-full p-[6px] my-3 rounded-xl shimmer" />
            </div>
        </>
    )
}

export default BlogCardShimmer