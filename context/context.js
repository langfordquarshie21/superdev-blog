import { createContext, useState } from "react"
export const BlogContext = createContext()
export const BlogProvider = ({ children }) => {
    const [showDrawer, setShowDrawer] = useState(false)

    return <BlogContext.Provider value={{
        showDrawer, setShowDrawer
    }}>
        {children}
    </ BlogContext.Provider>
}