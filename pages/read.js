import { useEffect, useState } from "react"
import BackPageTitle from "../components/backPageTitle"
import Header from "../components/header"
import BasicLayout from "../components/layout/basicLayout"

const Read = () => {
    const [title, setTitle] = useState()

    useEffect(() => {
        setTitle(window.location.search.replace('?', '').trim())
    }, [title])

    return (
        <>
            <Header />
            <BasicLayout metaTitle={`Read - ${title}`}>
                <BackPageTitle title={title} />
            </BasicLayout>
        </>
    )
}

export default Read