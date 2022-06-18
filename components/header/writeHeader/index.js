import Link from "next/link"
import Button from "../../button"

const WriteHeader = () => {
    return (
        <>
            <div>
                <header className="header fixed z-50 border-b border-b-borderGray top-0 left-0 w-screen">
                    <div className="p-5 py-3 max-w-7xl flex items-center justify-between m-auto">
                        <Link href='/'>
                            <b className='text-brand text-xl cursor-pointer hover:opacity-50 transition'>superdevvv</b>
                        </Link>
                        <Button page='/write' label='Publish &rarr;' />
                    </div>
                </header>
            </div>
        </>
    )
}

export default WriteHeader