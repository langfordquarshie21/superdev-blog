/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import Link from "next/link"
import ReadLayout from "../components/layout/readLayout"
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

export async function getServerSideProps(context) {
    const _query = context.query
    const _queryValue = Object.keys(_query)[0]
    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/post/get-post/' + _queryValue)
    const data = await res.json()

    if (data.payload) return {
        props: { article: data.payload }
    }

    return {
        props: { article: data }
    }
}

const Read = ({ article }) => {
    const [title, setTitle] = useState('')

    useEffect(() => {
        let _title = window.location.search.replace('?', '')
        setTitle(_title)
    }, [article])

    useEffect(() => {
        document.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightAll(el);
        })
    }, [article])

    if (article.content) return (
        <>
            <ReadLayout
                title={article.title}
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
                    <ReactMarkdown
                        remarkRehypeOptions={{ commonmark: true }}
                        className="md-viewer lg:text-xl text-[17px] pb-56">
                        {article.content}
                    </ReactMarkdown>
                </div>
            </ReadLayout>
        </>
    )

    return (
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
}

const styles = {
    tag: `border text-[#707070] border-borderGray w-max py-[8px] px-3 rounded-md mr-3 mb-3 text-sm hover:bg-[#000] hover:text-[#fff] cursor-pointer`
}

export default Read