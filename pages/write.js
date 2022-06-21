import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import WriteHeader from '../components/header/writeHeader'
import BasicLayout from "../components/layout/basicLayout"

const Write = () => {
    const [markdown, setMarkdown] = useState()
    const [title, setTitle] = useState()
    const [banner, setBanner] = useState()

    const uploadFile = async () => {
        try {
            const data = new FormData()
            data.append("file", banner)
            data.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET)
            data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME)
            const res = await fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
                method: "POST",
                body: data
            })
            const resData = await res.json()
            return resData.url
        }
        catch (e) {
            console.error('upload error', e.message)
            return undefined
        }
    }

    const getReadingTime = () => {
        const text = document.querySelector(".md-viewer").innerText;
        const wpm = 225;
        const words = text.trim().split(/\s+/).length;
        const time = Math.ceil(words / wpm);
        return time
    }

    const addPost = async () => {
        try {

            let conf = window.prompt("Enter passcode to share article")
            if (conf !== "passw0rd?") {
                alert('Wrong passcode')
                return
            }

            let _searchTitle
            let _keywords = []

            title.split(' ').forEach(word => {
                _keywords.push(word.toLowerCase())
            })

            _searchTitle = _keywords.join().replaceAll(',', '-')

            const postData = {
                id: Date.now(),
                timestamp: Date().substring(4, 15),
                banner: await uploadFile(),
                title: title,
                search_title: _searchTitle,
                read_length: getReadingTime(),
                keywords: _keywords,
                content: markdown,
                reads: 0,
                views: 0,
                writer: {
                    name: 'Langford Kwabena',
                    avatar: '',
                    socials: {
                        facebook: '',
                        github: '',
                        instagram: '',
                        twitter: '',
                    }
                },
            }

            let res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/post/add-post', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            })

            let data = await res.json()

            console.log(data)

            setMarkdown('')
            setTitle('')

        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <>
            <WriteHeader onPublish={addPost} />
            <div className='max-w-7xl m-auto p-5 lg:p-10 py-0 flex flex-col'>
                <input onChange={e => setTitle(e.target.value)} placeholder='Post title' className='mb-10 outline-none mt-[100px]' />
                <input type='file' onChange={e => setBanner(e.target.files[0])} accept='image/*' />
            </div>

            <BasicLayout metaTitle='Write an article'>
                <div className='flex flex-col lg:flex-row h-screen'>
                    <div className='lg:h-screen h-full lg:px-5 pt-5 bg-[#fff] -mt-10 w-full overflow-y-scroll'>
                        <textarea
                            className='w-full h-full outline-none resize-none'
                            onChange={e => setMarkdown(e.target.value)}
                            placeholder='Write something ✍️ ...' />
                    </div>
                    {markdown ? <div className='bg-borderGray p-[.5px] -mt-10' /> : null}
                    {markdown
                        ? <div className='lg:h-screen h-full lg:px-5 pt-5 bg-[#fff] border-t border-t-borderGray lg:border-0 -mt-10 w-full overflow-y-scroll'>
                            {banner
                                ? <img className='mb-20' src={URL.createObjectURL(banner)} alt={title} />
                                : null}
                            <ReactMarkdown
                                remarkRehypeOptions={{ commonmark: true }}
                                className="md-viewer">
                                {markdown}
                            </ReactMarkdown>
                        </div>
                        : null}
                    <div>

                        {/* <div className='flex items-center justify-between bg-greyBg p-2 px-4 border border-borderGray'>
                        <p>Preview</p>
                        <p>Guide</p>
                        <div className='flex items-center justify-between'>
                            <p>H</p>
                            <p>B</p>
                            <p>I</p>
                            <p>&quot;</p>
                            <p>&lt;/&gt;</p>
                            <p>link</p>
                            <p>bullet list</p>
                            <p>num list</p>
                            <p>image</p>
                        </div>
                    </div>
                    <br /> */}
                    </div>
                </div>
            </BasicLayout>
        </>
    )
}

export default Write