/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react"
import { useRouter } from 'next/router'

export const BlogContext = createContext()

export const BlogProvider = ({ children }) => {
    const router = useRouter()
    const [showDrawer, setShowDrawer] = useState(false)
    const [query, setQuery] = useState('')
    // const [showSearchView, setShowSearchView] = useState(false)
    // const [showSearchBox, setShowSearchBox] = useState(true)

    useEffect(() => {
        /** Listen for route change events */
        router.events.on('routeChangeComplete', onRouteChange)
        // toggleSearchView()
        return () => router.events.off('routeChangeComplete', onRouteChange)
    }, [query, router.events])

    const onRouteChange = () => {
        console.log('rouute chaned!')
        // if (showSearchView) setShowSearchView(false)
    }

    // const toggleSearchView = () => {
    //     if (query !== '') setShowSearchView(true)
    //     else setShowSearchView(false)
    // }

    return <BlogContext.Provider value={{
        showDrawer, setShowDrawer,
        query, setQuery,
        // showSearchView, setShowSearchView,
        // showSearchBox, setShowSearchBox
    }}>
        {children}
    </ BlogContext.Provider>
}