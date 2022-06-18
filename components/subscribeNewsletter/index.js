import EmailInput from "../inputs/emailInput"

const SubscribeNewsletter = () => {
    return (
        <>
            <div className='border-b border-b-borderGray w-screen bg-brand text-[#fff]'>
                <div className='max-w-7xl flex items-center justify-between lg:flex-row flex-col p-5 m-auto'>
                    <b className='lg:text-2xl text-left'>Join <span className='text-accent'>1412</span> devs and subscribe to my newsletter</b>
                    <div className="m-3 lg:hidden" />
                    <EmailInput />
                </div>
            </div>
        </>
    )
}

export default SubscribeNewsletter