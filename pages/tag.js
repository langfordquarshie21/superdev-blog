import { useEffect, useState } from "react"
import BackPageTitle from "../components/backPageTitle"
import Header from "../components/header"
import BasicLayout from "../components/layout/basicLayout"

const Tag = () => {
    const [route, setRoute] = useState()

    useEffect(() => {
        setRoute(window.location.search.replace('?', '').replace('-', ' '))
    }, [route])

    return (
        <>
            <Header />
            <BasicLayout metaTitle={`Tag - ${route}`}>
                <BackPageTitle title={route} />
            </BasicLayout>
        </>
    )
}

export default Tag