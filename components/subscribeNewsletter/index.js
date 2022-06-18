import EmailInput from "../inputs/emailInput"

const SubscribeNewsletter = () => {
    return (
        <>
            <div className='border-b border-b-borderGray w-screen bg-brand text-[#fff]'>
                <div className='max-w-7xl flex items-center justify-between p-5 m-auto'>
                    <b className='text-2xl'>Join <span className='text-yellow'>1412</span> devs and subscribe to my newsletter</b>
                    <EmailInput />
                </div>
            </div>
        </>
    )
}

export default SubscribeNewsletter