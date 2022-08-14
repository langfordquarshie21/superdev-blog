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
          <h1 className={textStyles.h1}>
            Become a <span className="gradient-text">master</span> developer
          </h1>
          <div className="my-7">
            <h2 className={textStyles.h4}>
              Daily articles, tutorials, and courses to help you learn web &amp;
              software development!
            </h2>
          </div>
          <WhiteButton
            page="https://www.getrevue.co/profile/langford_dev?via=twitter-profile"
            label="Subscribe to a newsletter"
          />
        </div>
      </div>
    </>
  );
};

const styles = {
  main: `py-10 pt-32 w-screen mt-[50px] bg-brand text-[#fff] lg:h-[460px] h-[500px] -mt-[75px]`,
  wrapper: `max-w-4xl m-auto px-5 text-center flex items-center justify-center flex-col h-full`,
};

export default HeroBanner;
