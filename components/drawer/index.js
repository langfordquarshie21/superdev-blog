import { useContext } from "react"
import { BlogContext } from "../../context/context"
import Link from "next/link"
import Button from "../button"
import { styles } from "./styles"

const Drawer = () => {
    const { showDrawer } = useContext(BlogContext)

    if (showDrawer) return (
        <section className={styles.drawerWrapper}>
            <div className={styles.drawer}>
                <Link href='/' passHref><p className={styles.link}>Home</p></Link>
                <Link href='/' passHref><p className={styles.link}>About</p></Link>
                <Link href='/' passHref><p className={styles.link}>Posts</p></Link>
                <Link href='/' passHref><p className={styles.link}>About</p></Link>
                <Button page='/write' label='Write a blog' />
            </div>
        </section>
    )

    return null
}

export default Drawer