import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import WriteHeader from '../components/header/writeHeader'
import BasicLayout from "../components/layout/basicLayout"

const Write = () => {
    const [markdown, setMarkdown] = useState()

    return (
        <>
            <WriteHeader onPublish={() => console.warn('markdown ->', markdown)} />
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