/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react"
import { useRouter } from 'next/router'

export const BlogContext = createContext()

export const BlogProvider = ({ children }) => {
    const router = useRouter()
    const [showDrawer, setShowDrawer] = useState(false)
    const [query, setQuery] = useState('')

    useEffect(() => {
        router.events.on('routeChangeComplete', onRouteChange)
        return () => router.events.off('routeChangeComplete', onRouteChange)
    }, [query, router.events])

    const onRouteChange = () => {
        console.warn('Route changed!')
        setShowDrawer(false)
    }

    const formatSearchQuery = (str) => {
        let _keywords = []
        str.split(' ').forEach(word => {
            _keywords.push(word.toLowerCase())
        })
        return _keywords.join().replaceAll(',', '-')
    }

    const cancelSearch = () => {
        window.history.back()
    }

    return <BlogContext.Provider value={{
        showDrawer, setShowDrawer,
        query, setQuery,
        formatSearchQuery,
        cancelSearch
    }}>
        {children}
    </ BlogContext.Provider>
}