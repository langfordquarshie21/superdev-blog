import { textStyles } from "../styles/text.styles"
import Image from "next/image"
import twitter from '../../public/assets/svg/twitter.svg'
import github from '../../public/assets/svg/github.svg'
import linkedin from '../../public/assets/svg/linkedin.svg'
import instagram from '../../public/assets/svg/instagram.svg'
import Link from "next/link"
import WhiteButton from "../whiteButton"

const HeroBanner = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.wrapper}>
                    <div>
                        <h1 className={textStyles.pageTitle}>Grow from a dev to a <span className="gradient">Super dev</span></h1>
                        <p id='hero-subtext' className='max-w-3xl my-10 leading-[40px] lg:text-xl text-[19px] text-greyText'>
                            Hello there 👋. I&apos;m Langford, a full-stack web and software developer. I&apos;m also a Technical Writer and Content Creator ✍️. And I&apos;m here to help you grow from dev to a <span className="gradient">Superdev</span>
                        </p>
                        <div className='flex items-center w-full max-w-[170px] justify-between mt-5'>
                            <Link passHref target='_blank' href='https://github.com/langfordquarshie21'>
                                <div className="cursor-pointer opacity-50 hover:opacity-100">
                                    <Image src={github} alt='github' />
                                </div>
                            </Link>

                            <Link passHref target='_blank' href='https://twitter.com/langford_dev'>
                                <div className="cursor-pointer opacity-50 hover:opacity-100">
                                    <Image src={twitter} alt='twitter' />
                                </div>
                            </Link>

                            <Link passHref target='_blank' href='https://linkedin.com/in/langford-dev'>
                                <div className="cursor-pointer opacity-50 hover:opacity-100">
                                    <Image src={linkedin} alt='linkedin' />
                                </div>
                            </Link>

                            <Link passHref target='_blank' href='https://instagram.com/langford_dev'>
                                <div className="cursor-pointer opacity-50 hover:opacity-100">
                                    <Image src={instagram} alt='instagram' />
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

const styles = {
    main: `big-home-text-container py-10 w-screen mt-[50px]`,
    wrapper: `max-w-6xl m-auto px-5 pt-5`,
}

export default HeroBanner