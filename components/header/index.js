import Link from 'next/link'
import Image from 'next/image'
import Button from '../button'
import CategoryTabs from '../categoryTabs'
import SubscribeNewsletter from '../subscribeNewsletter'
import SearchInput from '../inputs/searchInput'
import { useEffect, useState } from 'react'
import PageTitleBanner from '../pageTitleBanner'
import { textStyles } from '../styles/text.styles'

const Header = ({ pageTitle }) => {
    const [route, setRoute] = useState()

    useEffect(() => {
        setRoute(window.location.pathname)
    }, [route])

    return (
        <>
            <div>
                <header className="header fixed z-50 border-b border-b-borderGray top-0 left-0 w-screen">
                    <div className="p-5 py-3 max-w-7xl flex items-center justify-between m-auto">
                        <Link href='/'>
                            <b className='text-brand text-2xl cursor-pointer hover:opacity-50 transition'>superdevvv</b>
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
                        <Button label='Write a blog' />
                    </div>
                </header>
                {/* <p>Your daily dose of <strike>coffee</strike> code </p> */}
                {/* <h2>Join 1412 devs and subscribe to my newsletter</h2> */}
                {/* <p className='my-4'> Hey there 👋 Im Langford a full-stack remote web developer with years of experience, and I'll help you become a web developer with bite-sized dev tips.</p> */}

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