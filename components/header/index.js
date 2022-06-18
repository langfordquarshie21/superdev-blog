import Link from 'next/link'
import Image from 'next/image'
import moon from '../../public/assets/svg/moon.svg'
import Button from '../button'
import CategoryTabs from '../categoryTabs'
import SubscribeNewsletter from '../subscribeNewsletter'
import SearchInput from '../inputs/searchInput'
import twitter from '../../public/assets/svg/twitter.svg'
import github from '../../public/assets/svg/github.svg'
import linkedin from '../../public/assets/svg/linkedin.svg'
import instagram from '../../public/assets/svg/instagram.svg'

const Header = () => {
    return (
        <>
            <div>
                <header className="header fixed z-50 border-b border-b-borderGray top-0 left-0 w-screen">
                    <div className="p-5 py-3 max-w-7xl flex items-center justify-between m-auto">
                        <b className='text-brand text-2xl'>superdevvv</b>
                        <SearchInput />
                        <nav>
                            <ul className='flex items-center justify-between'>
                                <Image src={moon} alt='dark theme toggle' width={20} className='theme-icon' />
                                <Link href="/" passHref>
                                    <p className={styles.link}>Home</p>
                                </Link>
                                <Link href="/" passHref>
                                    <p className={styles.link}>Latest</p>
                                </Link>
                                <Link href="/" passHref>
                                    <p className={styles.link}>For you</p>
                                </Link>
                                <Link href="/" passHref>
                                    <p className={styles.link}>Today</p>
                                </Link>
                            </ul>
                        </nav>
                        <Button label='Write a blog' />
                    </div>
                </header>
                {/* <p>Your daily dose of <strike>coffee</strike> code </p> */}
                {/* <h2>Join 1412 devs and subscribe to my newsletter</h2> */}
                {/* <p className='my-4'> Hey there 👋 Im Langford a full-stack remote web developer with years of experience, and I'll help you become a web developer with bite-sized dev tips.</p> */}

                <div className='border-b border-b-borderGray w-screen mt-[78px]'>
                    <div className='max-w-7xl  m-auto px-5 py-20'>
                        <div className='max-w-2xl'>
                            <h1 className="text-5xl font-medium text-[#000]">Become a Super Devv 🚀</h1>
                            <p className='mt-5 leading-[30px]'>We focus on industry leading platforms so that you can be prepared for your next skill. Then we teach all we can about them.</p>
                            <div className='flex items-center w-full max-w-[170px] justify-between mt-5 opacity-50'>
                                <Image src={twitter} alt='twitter' />
                                {/* <div className='m-2' /> */}
                                <Image src={github} alt='github' />
                                {/* <div className='m-2' /> */}
                                <Image src={instagram} alt='instagram' />
                                {/* <div className='m-2' /> */}
                                <Image src={linkedin} alt='linkedin' />
                            </div>
                        </div>
                    </div>
                </div>

                <SubscribeNewsletter />
                <CategoryTabs />
            </div>
        </>
    )
}

const styles = {
    link: `p-3 cursor-pointer hover:text-brand`,
}

export default Header