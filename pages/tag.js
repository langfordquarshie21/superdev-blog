import { useEffect, useState } from "react"
import BackPageTitle from "../components/backPageTitle"
import BlogCard from "../components/blogCard"
import Header from "../components/header"
import BasicLayout from "../components/layout/basicLayout"
import BlogCardShimmer from "../components/shimmers/blogCardShimmer"

// export async function getServerSideProps(context) {
//     const _query = context.query
//     const _queryValue = Object.keys(_query)

//     const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/post/get-posts-by-tags', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(_queryValue)
//     })
//     const data = await res.json()

//     if (data.payload) return {
//         props: { articles: data.payload }
//     }

//     return {
//         props: { articles: data }
//     }
// }

const Tag = () => {
    const [route, setRoute] = useState()
    const [exist, setExists] = useState(true)
    const [loading, setLoading] = useState(true)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        setRoute(window.location.search.replace('?', ''))
        getPostsByTag()
    }, [])

    const meta = {
        title: `Tag - ${route}`,
        description: `Find articles with tag #${route}`,
        url: `https://superdev.dev/tag?${route}`,
        image: '',
    }

    const getPostsByTag = async () => {
        try {
            setLoading(true)
            const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/post/get-posts-by-tags', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([route])
            })
            const data = await res.json()

            if (!data.status) {
                setExists(false)
                return
            }

            setArticles(data.payload)
            setLoading(false)
        }

        catch (e) {
            setLoading(false)
        }
    }

    if (!exist) return (
        <>
            <Header />
            <BasicLayout meta={meta}>
                <BackPageTitle title={route} />
                <h3 className="opacity-50 mb-20">Oops! No posts relating to tag found</h3>
            </BasicLayout>
        </>
    )

    return (
        <>
            <Header />
            <BasicLayout meta={meta}>
                <BackPageTitle title={route} />
                <ul className="grid grid-cols-1 sm:grid-cols-2 p-0">
                    {articles.map((article, i) => {
                        return <BlogCard article={article} key={i} />
                    })}
                </ul>
                <BlogCardShimmer show={loading} />
            </BasicLayout>
        </>
    )
}

export default Tag