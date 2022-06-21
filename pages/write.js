import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Button from '../components/button'
import WriteHeader from '../components/header/writeHeader'
import BasicLayout from "../components/layout/basicLayout"
import { inputStyles } from '../components/styles/input.styles'
import { modalStyles } from '../components/styles/modal.styles'

const Write = () => {
    const [markdown, setMarkdown] = useState()
    const [title, setTitle] = useState()
    const [banner, setBanner] = useState()
    const [tags, setTags] = useState()
    const [showModal, setShowModal] = useState(false)
    const [loading, setLoading] = useState(false)

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

            if (!markdown) return
            if (!title) return
            if (!tags) return
            if (!banner || typeof banner !== 'object') return

            let conf = window.prompt("Enter passcode to share article")

            if (conf !== "passw0rd?") {
                alert('Wrong passcode')
                return
            }

            setLoading(true)

            let _searchTitle
            let _keywords = []
            let _tags = []

            tags.split(",").forEach(_word => {
                _tags.push(_word.toLowerCase().trim())
            })

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
                tags: _tags,
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
            setTags('')
            setBanner()
            setTitle('')
            setShowModal(false)
            setLoading(false)
            alert("Posted! 🎉")

        } catch (e) {
            console.log(e.message)
            setLoading(false)
            alert("An error occured! ❌")
        }
    }

    // if (loading) return <WriteHeader />

    return (
        <>
            {loading
                ? <div className='w-screen h-screen bg-[#00357252] flex items-center justify-center fixed top-0 left-0'>
                    Posting...</div>
                : null}

            {showModal && !loading
                ? <div className={modalStyles.modalWrapper}>
                    <div className='bg-[#fff] p-5 rounded-xl flex flex-col'>
                        <b className='cursor-pointer mb-5' onClick={() => setShowModal(false)}>Close &times;</b>
                        <p>Tags</p>
                        <input value={tags} className='outline p-3 py-2 rounded-md my-10 mt-3 border border-borderGray outline-none' onChange={e => setTags(e.target.value)} placeholder='Tech,web3,HTML' />
                        <Button action={addPost} label='Upload' />
                    </div>
                </div>
                : null}

            <WriteHeader onPublish={() => setShowModal(true)} />

            <BasicLayout metaTitle='Write an article'>
                <div className='flex flex-col lg:flex-row h-screen'>
                    <div className='lg:h-screen h-full lg:px-5 pt-5 bg-[#fff] -mt-10 w-full overflow-y-scroll'>
                        <input type='file' className={inputStyles.fileInput} onChange={e => setBanner(e.target.files[0])} accept='image/*' />
                        <input value={title} onChange={e => setTitle(e.target.value)} placeholder='Post title' className='my-10 rounded-md outline-none' />
                        <textarea
                            className='w-full h-full outline-none resize-none'
                            onChange={e => setMarkdown(e.target.value)}
                            value={markdown}
                            placeholder='Write something ✍️ ...' />
                    </div>

                    {markdown ? <div className='bg-borderGray p-[.5px] -mt-10' /> : null}

                    {markdown || title !== '' || banner
                        ? <div className='lg:h-screen h-full lg:px-5 pt-5 bg-[#fff] border-t border-t-borderGray lg:border-0 -mt-10 w-full overflow-y-scroll'>
                            {banner
                                ? <img className='mb-5 h-[300px] w-full object-cover rounded-md border border-borderGray' src={URL.createObjectURL(banner)} alt={title} />
                                : null}
                            <h2>{title}</h2>
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