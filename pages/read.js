import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import BackButton from "../components/backButton"
import Header from "../components/header"
import BasicLayout from "../components/layout/basicLayout"

const Read = () => {
    const [title, setTitle] = useState('')
    const [article, setArticle] = useState({
        title: '',
        banner: '',
        description: ''
    })

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
            <BasicLayout
                metaTitle={article.title}
                metaDescription={article.description}
                metaImg={article.banner}
            >
                <div>
                    {/* <BackPageTitle title={title.split('-').join(' ')} /> */}
                    <div className="max-w-4xl m-auto lg:border lg:border-borderGray lg:p-5 p-0 -mt-10 -mb-5 lg:border-b-0 pt-20">
                        <BackButton />
                        <br />
                        <br />
                        <h1 className="mb-10 capitalize">{title.split('-').join(' ')}</h1>
                        <img src={article.banner} className='mb-20 border border-borderGray rounded-md' />
                        <ReactMarkdown
                            remarkRehypeOptions={{ commonmark: true }}
                            className="md-viewer lg:text-xl text-[17px]">
                            {article.content}
                        </ReactMarkdown>
                    </div>
                </div>
            </BasicLayout>
        </>
    )
}

export default Read