import { useContext } from "react"
import { BlogContext } from "../../context/context"
import Link from "next/link"
import Button from "../button"
import { styles } from "./styles"
import { modalStyles } from "../styles/modal.styles"
import { tagTabs } from "../../content"

const Drawer = () => {
    const { showDrawer } = useContext(BlogContext)

    if (showDrawer) return (
        <section className={modalStyles.drawerWrapper}>
            <div className={styles.drawer}>
                {tagTabs.map((tag, i) => {
                    return <Link passHref key={i} href={`/tag?${tag.toLocaleLowerCase().replace(' ', '-')}`}>
                        <p className={styles.link}>{tag}</p>
                    </Link>
                })}

                <div className="m-3" />
                <Button page='/write' label='Write a blog' />

                {/* <Link href='/' passHref><p className={styles.link}>Home</p></Link>
                <Link href='/' passHref><p className={styles.link}>About</p></Link>
                <Link href='/' passHref><p className={styles.link}>Posts</p></Link>
                <Link href='/' passHref><p className={styles.link}>About</p></Link> */}

            </div>
        </section>
    )

    return null
}

export default Drawer