/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import BackButton from "../components/backButton"
import Header from "../components/header"
import BasicLayout from "../components/layout/basicLayout"
import ReadBlogShimmer from "../components/shimmers/readBlogShimmer"
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import Link from "next/link"
import ReadLayout from "../components/layout/readLayout"

const Read = () => {
    const [title, setTitle] = useState('')
    const [loading, setLoading] = useState(true)
    const [exists, setExists] = useState(true)
    const [article, setArticle] = useState({
        title: '',
        banner: '',
        description: '',
        tags: [],
        writer: {}
    })

    const getPost = async () => {
        try {
            let _title = window.location.search.replace('?', '')
            setTitle(_title)
            let res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/post/get-post/' + _title)
            let data = await res.json()
            console.log('data', data)

            if (!data.status) {
                setExists(false)
                return
            }

            setArticle(data.payload)
            showLoader(false)
        }

        catch (e) {
            setLoading(false)
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    useEffect(() => {
        document.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightAll(el);
        })
    }, [article])

    if (!exists) return (
        <>
            <ReadLayout
                title={title}
                meta={{
                    title: 'Post not found',
                    description: '',
                    images: '',
                }}>
                <h3 className="opacity-50 mb-20">Oops! Post not found</h3>
            </ReadLayout>
        </>
    )

    return (
        <>

            <ReadLayout
                title={title}
                meta={{
                    title: article.title,
                    description: article.description,
                    images: article.banner
                }}>
                <div>
                    <ul className="flex flex-wrap mb-10 -mt-5">
                        {article.tags.map((tag, i) => {
                            return <Link key={i} href={`/tag?${tag}`}>
                                <li className={styles.tag}>#{tag}</li>
                            </Link>
                        })}
                    </ul>
                    <img src={article.banner} alt={article.title} className='mb-20 border border-borderGray rounded-md' />
                    {article.content
                        ? <ReactMarkdown
                            remarkRehypeOptions={{ commonmark: true }}
                            className="md-viewer lg:text-xl text-[17px] pb-56">
                            {article.content}
                        </ReactMarkdown>
                        : null}
                    <ReadBlogShimmer show={loading} />
                </div>
            </ReadLayout>



            {/* <Header />
            <BasicLayout
                
            >
                <div>
                    <div className="max-w-4xl m-auto lg:border lg:border-borderGray lg:p-5 p-0 -mt-10 -mb-5 lg:border-b-0 pt-20">
                        <div className="-mt-10 lg:mt-5">
                            <BackButton />
                        </div>
                        <h1 className="mb-10 capitalize">{title.split('-').join(' ')}</h1>
                        
                    </div>
                </div>
            </BasicLayout> */}
        </>
    )
}

const styles = {
    tag: `border text-[#707070] border-borderGray w-max py-[8px] px-3 rounded-md mr-3 mb-3 text-sm hover:bg-[#000] hover:text-[#fff] cursor-pointer`
}

export default Read