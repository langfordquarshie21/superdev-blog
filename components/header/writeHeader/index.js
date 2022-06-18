import Link from "next/link"
import BackButton from "../../backButton"
import Button from "../../button"

const WriteHeader = ({ onPublish }) => {
    return (
        <>
            <div>
                <header className="header fixed z-50 border-b border-b-borderGray top-0 left-0 w-screen">
                    <div className="p-5 py-3 max-w-7xl flex items-center justify-between m-auto">
                        <BackButton />
                        <Link href='/'>
                            <b className='text-brand text-xl cursor-pointer hover:opacity-50 transition'>superdevvv</b>
                        </Link>
                        <Button action={onPublish} label='Publish' />
                    </div>
                </header>
            </div>
        </>
    )
}

export default WriteHeader