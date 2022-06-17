import { createContext } from "react"
export const BlogContext = createContext()
export const BlogProvider = ({ children }) => {
    return <BlogContext.Provider value={{}}>
        {children}
    </ BlogContext.Provider>
}