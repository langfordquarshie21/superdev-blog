import Image from "next/image"
import Link from "next/link"
import twitter from '../../public/assets/svg/twitter.svg'
import github from '../../public/assets/svg/github.svg'
import linkedin from '../../public/assets/svg/linkedin.svg'
import instagram from '../../public/assets/svg/instagram.svg'

const Footer = () => {
    return (
        <>
            <footer className='text-greyText flex text-center items-center flex-col justify-center p-10 border-t border-t-borderGray'>
                <small>&copy; 2022 • All Rights Reserved • superdev</small>
                <small className="mt-3">Made with 💛 by Langford</small>
                <div className='flex items-center w-full max-w-[170px] justify-between mt-5'>
                    <Link passHref target='_blank' href='https://github.com/langfordquarshie21/superdev-blog'>
                        <div className="cursor-pointer opacity-50 hover:opacity-100">
                            <Image src={github} alt='github' />
                        </div>
                    </Link>

                    <Link passHref target='_blank' href='https://github.com/langfordquarshie21/superdev-blog'>
                        <div className="cursor-pointer opacity-50 hover:opacity-100">
                            <Image src={twitter} alt='twitter' />
                        </div>
                    </Link>

                    <Link passHref target='_blank' href='https://github.com/langfordquarshie21/superdev-blog'>
                        <div className="cursor-pointer opacity-50 hover:opacity-100">
                            <Image src={linkedin} alt='linkedin' />
                        </div>
                    </Link>

                    <Link passHref target='_blank' href='https://github.com/langfordquarshie21/superdev-blog'>
                        <div className="cursor-pointer opacity-50 hover:opacity-100">
                            <Image src={instagram} alt='instagram' />
                        </div>
                    </Link>
                </div>
            </footer>
        </>
    )
}

export default Footer