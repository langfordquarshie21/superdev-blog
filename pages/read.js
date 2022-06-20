import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import BackButton from "../components/backButton"
import BackPageTitle from "../components/backPageTitle"
import Header from "../components/header"
import BasicLayout from "../components/layout/basicLayout"

const Read = () => {
    const [title, setTitle] = useState('')
    const [article, setArticle] = useState()

    const getPost = async () => {
        let _title = window.location.search.replace('?', '')
        setTitle(_title)
        let res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/post/get-post/' + _title)
        let data = await res.json()
        setArticle(data.payload)
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <>
            <Header />
            <BasicLayout metaTitle={title}>
                {article
                    ? <div>
                        <BackButton />
                        <br />
                        <br />
                        <h1 className="mb-10 capitalize">{title.split('-').join(' ')}</h1>
                        {/* <BackPageTitle title={title.split('-').join(' ')} /> */}
                        <img src={article.banner} className='mb-20' />
                        <ReactMarkdown
                            remarkRehypeOptions={{ commonmark: true }}
                            className="md-viewer">
                            {article.content}
                        </ReactMarkdown>
                    </div>
                    : null}
            </BasicLayout>
        </>
    )
}

export default Read