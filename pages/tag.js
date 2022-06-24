import { useEffect, useState } from "react"
import BackPageTitle from "../components/backPageTitle"
import BlogCard from "../components/blogCard"
import Header from "../components/header"
import BasicLayout from "../components/layout/basicLayout"

export async function getServerSideProps(context) {
    const _query = context.query
    const _queryValue = Object.keys(_query)

    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/post/get-posts-by-tags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(_queryValue)
    })
    const data = await res.json()

    if (data.payload) return {
        props: { articles: data.payload }
    }

    return {
        props: { articles: data }
    }
}

const Tag = ({ articles }) => {
    const [route, setRoute] = useState()

    useEffect(() => {
        setRoute(window.location.search.replace('?', ''))
    }, [route])

    if (articles.length > 0) return (
        <>
            <Header />
            <BasicLayout metaTitle={`Tag - ${route}`}>
                <BackPageTitle title={route} />
                <ul className="grid grid-cols-1 sm:grid-cols-2 p-0">
                    {articles.map((article, i) => {
                        return <BlogCard article={article} key={i} />
                    })}
                </ul>
            </BasicLayout>
        </>
    )

    return (
        <>
            <Header />
            <BasicLayout metaTitle={`Tag - ${route}`}>
                <BackPageTitle title={route} />
                <h3 className="opacity-50 mb-20">Oops! No posts relating to tag found</h3>
            </BasicLayout>
        </>
    )
}

export default Tag