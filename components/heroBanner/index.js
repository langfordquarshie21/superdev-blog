import { textStyles } from "../styles/text.styles";
import Image from "next/image";
import twitter from "../../public/assets/svg/twitter.svg";
import github from "../../public/assets/svg/github.svg";
import linkedin from "../../public/assets/svg/linkedin.svg";
import instagram from "../../public/assets/svg/instagram.svg";
import Link from "next/link";
import WhiteButton from "../whiteButton";
import Newsletter from "../subscribeNewsletter";

const HeroBanner = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <h1 className={textStyles.h1}>Want to learn how to code?</h1>
          <br />
          <h2 className={textStyles.h4}>
            We&apos;ve got tutorials and resources geared towards self-taught web
            developers. Check it out below!
          </h2>
          <br />
          <WhiteButton
            page="https://www.getrevue.co/profile/langford_dev?via=twitter-profile"
            label="Subscribe to my newsletter"
          />

          {/* <div className="flex justify-center items-center"> */}
          {/* </div> */}
          {/* <h1> */}
          {/* <br /> */}
          {/* Grow from a dev to a <span className="gradient">Super dev</span> */}
          {/* </h1> */}
          {/* <div>
                        <h1>Grow from a dev to a <span className="gradient">Super dev</span></h1>
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

                    </div> */}
        </div>

        {/* <Newsletter /> */}
      </div>
    </>
  );
};

const styles = {
  main: `py-10 pt-32 w-screen mt-[50px] bg-[#8e38ff] text-[#fff] lg:h-[460px] -mt-[75px]`,
  wrapper: `max-w-5xl m-auto px-5 text-center flex items-center justify-center flex-col h-full`,
};

export default HeroBanner;
