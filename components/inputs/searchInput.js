import Image from "next/image"
import search from '../../public/assets/svg/search.svg'
import { inputStyles } from "../styles/input.styles"

const SearchInput = () => {
    return (
        <>
            <div className={inputStyles.inputContainer}>
                <Image src={search} width={16} alt='search' className='search-icon' />
                <input className={inputStyles.input} placeholder='Search posts...' />
            </div>
        </>
    )
}

export default SearchInput