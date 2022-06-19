import Link from "next/link"

const Logo = () => {
    return (
        <>
            <Link href='/'>
                <b className='text-brand text-xl cursor-pointer hover:opacity-50 transition'>superdev</b>
            </Link>
        </>
    )
}

export default Logo