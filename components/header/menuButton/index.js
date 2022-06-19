import { useContext } from "react"
import { BlogContext } from "../../../context/context"

const MenuButton = () => {
    const { showDrawer, setShowDrawer } = useContext(BlogContext)

    if (!showDrawer) return (
        <div className='menu-btn ml-5' onClick={() => setShowDrawer(true)}>
            <div />
            <div />
            <div />
        </div>
    )

    return <p className='ml-5' onClick={() => setShowDrawer(false)}>Close</p>
}

export default MenuButton