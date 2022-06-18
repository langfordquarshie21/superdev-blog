import Link from 'next/link'
import Button from '../button'
import CategoryTabs from '../categoryTabs'
import { useEffect, useState } from 'react'
import SubscribeNewsletter from '../subscribeNewsletter'
import SearchInput from '../inputs/searchInput'
import PageTitleBanner from '../pageTitleBanner'
import WriteHeader from './writeHeader'

const Header = ({ pageTitle }) => {
    const [route, setRoute] = useState()

    useEffect(() => {
        setRoute(window.location.pathname)
    }, [route])

    if (route === '/write') return (
        <>
            <WriteHeader />
        </>
    )

    return (
        <>
            <div>
                <header className="header fixed z-50 border-b border-b-borderGray top-0 left-0 w-screen">
                    <div className="p-5 py-3 max-w-7xl flex items-center justify-between m-auto">
                        <Link href='/'>
                            <b className='text-brand text-xl cursor-pointer hover:opacity-50 transition'>superdevvv</b>
                        </Link>
                        <div className='hidden lg:block'>
                            <SearchInput />
                        </div>
                        <nav>
                            <ul className='hidden lg:flex items-center justify-between'>
                                {/* <Image src={moon} alt='dark theme toggle' width={20} className='theme-icon' /> */}
                                <Link href="/" passHref>
                                    <p className={styles.link}>Home</p>
                                </Link>
                                <Link href="/" passHref>
                                    <p className={styles.link}>Latest</p>
                                </Link>
                                <Link href="/" passHref>
                                    <p className={styles.link}>Snippets</p>
                                </Link>
                                <Link href="/" passHref>
                                    <p className={styles.link}>Podcasts</p>
                                </Link>
                            </ul>
                        </nav>
                        <div className='hidden lg:block'>
                            <Button page='/write' label='Write a blog' />
                        </div>
                        <div className='menu-btn lg:hidden'>
                            <div />
                            <div />
                            <div />
                        </div>
                    </div>
                </header>

                {route === '/' ? <div>
                    <PageTitleBanner
                        showSocials={true}
                        title='Become a Super Devv 🚀'
                        subtitle='We focus on industry leading platforms so that you can be prepared for your next skill. Then we teach all we can about them.' />
                    <SubscribeNewsletter />
                    <CategoryTabs />
                </div> : null}

                {pageTitle ? <PageTitleBanner title={pageTitle} /> : null}
            </div>
        </>
    )
}

const styles = {
    link: `p-3 cursor-pointer hover:text-brand`,
}

export default Header