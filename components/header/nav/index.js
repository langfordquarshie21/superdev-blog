import { navLinks } from "../../../content"
// import { styles } from "./styles"
import Link from "next/link"
import styles from './styles';

const Nav = () => {
    return (
        <>
            <nav>
                <ul className='hidden lg:flex items-center justify-between'>
                    {navLinks.map((link, i) => {
                        return <Link passHref key={i} href={`/${link.toLocaleLowerCase().replace(' ', '-')}`}>
                            <li className={styles.link}>{link}</li>
                        </Link>
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Nav