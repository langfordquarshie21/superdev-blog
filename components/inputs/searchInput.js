import { inputStyles } from "../styles/input.styles"
import Image from "next/image"
import search from '../../public/assets/svg/search.svg'
import Link from "next/link"

const SearchInput = () => {
    return (
        <>
            <Link passHref href='/search'>
                <div className={inputStyles.inputContainer}>
                    <Image src={search} width={16} alt='search' className='search-icon' />
                    <div className={inputStyles.input}>
                        <p className="opacity-70">Search posts...</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SearchInput
