import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Header from "../components/header"
import BasicLayout from "../components/layout/basicLayout"

const Write = () => {
    const [markdown, setMarkdown] = useState()

    // const md = "Test \nTest \n # Test \n ## uigf"

    return (
        <>
            <Header />
            <BasicLayout>
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
                    <div className='flex flex-col lg:flex-row h-[76vh]'>
                        <div className='flex-1 h-1/2'>
                            <textarea
                                className='outline-none w-full h-full overflow-y-scroll resize-none'
                                onChange={e => setMarkdown(e.target.value)}
                                placeholder='Write something ✍️ ...' />
                        </div>
                        {markdown
                            ? <div className='lg:border-l lg:border-l-borderGray lg:border-t-0 border-t border-t-borderGray overflow-y-scroll pt-5 lg:pt-0 lg:pl-5 flex-1 h-1/2'>
                                <ReactMarkdown
                                    remarkRehypeOptions={{ commonmark: true }}
                                    className="md-viewer">
                                    {markdown}
                                </ReactMarkdown>
                            </div>
                            : null
                        }
                    </div>
                </div>
            </BasicLayout>
        </>
    )
}

export default Write