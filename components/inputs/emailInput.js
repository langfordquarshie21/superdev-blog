import Image from "next/image"
import Button from "../button"
import search from '../../public/assets/svg/search.svg'
import { inputStyles } from "../styles/input.styles"

const EmailInput = () => {
    return (
        <div className={inputStyles.inputContainer}>
            <Image src={search} width={23} alt='search' className='search-icon' />
            <input className={inputStyles.input} placeholder='Enter your email' />
            <Button label='Sign up' />
        </div>
    )
}

export default EmailInput