import { textStyles } from "../styles/text.styles"
import Image from "next/image"
import twitter from '../../public/assets/svg/twitter.svg'
import github from '../../public/assets/svg/github.svg'
import linkedin from '../../public/assets/svg/linkedin.svg'
import instagram from '../../public/assets/svg/instagram.svg'

const PageTitleBanner = ({ title, subtitle, showSocials }) => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.wrapper}>
                    <div className='max-w-3xl'>
                        <h1 className={textStyles.pageTitle}>{title}</h1>
                        <p className='mt-5 leading-[30px]'>{subtitle}</p>
                        {showSocials
                            ? <div className='flex items-center w-full max-w-[170px] justify-between mt-5 opacity-50'>
                                <Image src={twitter} alt='twitter' />
                                <Image src={github} alt='github' />
                                <Image src={instagram} alt='instagram' />
                                <Image src={linkedin} alt='linkedin' />
                            </div>
                            : null}
                    </div>
                </div>
            </div>

            {/* {route === '/'
                ? <div className={styles.main}>
                    <div className={styles.wrapper}>
                        <div className='max-w-3xl'>
                            <h1 className={textStyles.pageTitle}>{title}</h1>
                            <p className='mt-5 leading-[30px]'>{subtitle}</p>
                        </div>
                    </div>
                </div>
                : <div className='big-home-text-container border-b border-b-borderGray w-screen mt-[50px]'>
                    <div className='max-w-7xl m-auto px-5 py-20'>
                        <div className='max-w-3xl'>
                            <h1 className={textStyles.pageTitle}>Become a Super Devv 🚀</h1>
                            <p className='mt-5 leading-[30px]'>We focus on industry leading platforms so that you can be prepared for your next skill. Then we teach all we can about them.</p>
                            <div className='flex items-center w-full max-w-[170px] justify-between mt-5 opacity-50'>
                                <Image src={twitter} alt='twitter' />
                                <Image src={github} alt='github' />
                                <Image src={instagram} alt='instagram' />
                                <Image src={linkedin} alt='linkedin' />
                            </div>
                        </div>
                    </div>
                </div>} */}
        </>
    )
}

const styles = {
    main: `big-home-text-container py-10 lg:py-20 border-b border-b-borderGray w-screen mt-[50px]`,
    wrapper: `max-w-7xl m-auto px-5 pt-5`,
}

export default PageTitleBanner