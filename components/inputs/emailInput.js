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
    input: `outline-none bg-[#00000000] ml-2 text-[#000] w-[90%]`,
    inputContainer: `border border-borderGray bg-[#00000000] rounded-md px-2 py-2 pl-3 flex items-center max-w-[700px]`,
}

export default EmailInput