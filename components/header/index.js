import Link from 'next/link'
import Image from 'next/image'
import search from '../../public/assets/svg/search.svg'
import moon from '../../public/assets/svg/moon.svg'
import Button from '../button'

const Header = () => {
    return (
        <>
            <div>
                <header className="header fixed border-b border-b-borderGray top-0 left-0 w-screen">
                    {/* <header className=""> */}
                    <div className="p-5 max-w-7xl flex items-center justify-between m-auto">
                        <b className='text-brand text-2xl'>superdevvv</b>
                        <div className={styles.searchBox}>
                            <Image src={search} width={16} alt='search' className='search-icon' />
                            <input className={styles.input} placeholder='Search posts...' />
                        </div>
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
                    <div className='max-w-7xl  m-auto px-5 py-10'>
                        <h1 className="text-[#000]">Become a Super Devv 🚀</h1>
                    </div>
                </div>

                <div className='border-b border-b-borderGray w-screen'>
                    <div className='max-w-7xl flex items-center justify-between p-5 m-auto'>
                        <p className='opacity-30 text-2xl'>Join 1412 devs and subscribe to my newsletter</p>
                        <div className={styles.searchBox}>
                            <Image src={search} width={23} alt='search' className='search-icon' />
                            <input className={styles.input} placeholder='Enter your email' />
                            <Button label='Sign up' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const styles = {
    // input: `outline-none ml-2 text-[#000] w-[90%] bg-[#f1f1f1ab]`,
    // searchBox: `border border-borderGray rounded-md px-2 py-2 flex items-center bg-[#f1f1f1ab] max-w-[400px]`,
    input: `outline-none ml-2 text-[#000] w-[90%]`,
    link: `p-3 cursor-pointer hover:text-brand`,
    searchBox: `border border-borderGray rounded-md px-2 py-2 flex items-center max-w-[700px]`,
}

export default Header