import Image from "next/image"
import Button from "../button"
import search from '../../public/assets/svg/search.svg'

const EmailInput = () => {
    return (
        <div className={styles.inputContainer}>
            <Image src={search} width={23} alt='search' className='search-icon' />
            <input className={styles.input} placeholder='Enter your email' />
            <Button label='Sign up &rarr;' />
        </div>
    )
}

const styles = {
    inputContainer: `bg-[#fff] rounded-md px-2 py-2 pl-3 flex items-center w-full lg:max-w-[400px]`,
    input: `outline-none bg-[#00000000] ml-2 text-[#000] w-[90%]`,
}

export default EmailInput