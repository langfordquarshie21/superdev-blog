import { useEffect, useState } from "react"
import Header from "../components/header"
import BasicLayout from "../components/layout/basicLayout"

const Read = () => {
    const [title, setTitle] = useState()

    useEffect(() => {
        setTitle(window.location.search.replace('?', '').trim())
    }, [title])

    return (
        <>
            <Header pageTitle={title} />
            <BasicLayout>
            </BasicLayout>
        </>
    )
}

export default Read