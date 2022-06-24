import { useContext } from "react"
import { BlogContext } from "../../context/context"
import Link from "next/link"
import Button from "../button"
import { styles } from "./styles"
import { modalStyles } from "../styles/modal.styles"
import { navLinks } from "../../content"

const Drawer = () => {
    const { showDrawer } = useContext(BlogContext)

    if (showDrawer) return (
        <section className={modalStyles.drawerWrapper}>
            <div className={styles.drawer}>
                {navLinks.map((tag, i) => {
                    return <Link passHref key={i} href={`/${tag.toLocaleLowerCase().replace(' ', '-')}`}>
                        <p className={styles.link}>{tag}</p>
                    </Link>
                })}

                <div className="m-3" />
                <Button page='/write' label='Write a blog' />

            </div>
        </section>
    )

    return null
}

export default Drawer