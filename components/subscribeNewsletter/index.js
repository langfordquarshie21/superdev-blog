// import EmailInput from "../inputs/emailInput"

import WhiteButton from "../whiteButton";

// const SubscribeNewsletter = () => {
//     return (
//         <>
//             <div className='border-b border-b-borderGray w-screen text-[#fff]'>
//                 <div className='max-w-6xl flex items-center justify-between lg:flex-row flex-col p-5 py-10 lg:py-8 m-auto'>
//                     <b className='lg:text-2xl text-left'>Join <span className='text-accent'>1412</span> devs and subscribe to my newsletter</b>
//                     <div className="m-3 lg:hidden" />
//                     <EmailInput />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default SubscribeNewsletter

const Newsletter = () => {
  return (
    <>
      {/* <div className="pb-12" /> */}
      <div className="w-screen left-0 text-[#fff]">
        <div className="m-auto p-5 max-w-6xl flex items-center flex-wrap justify-between py-2">
          {/* <b className="lg:text-xl">
            Stay up to date with my posts and updates
          </b> */}
          <WhiteButton
            page="https://www.getrevue.co/profile/langford_dev?via=twitter-profile"
            label="Subscribe to my newsletter"
          />
        </div>
      </div>
    </>
  );
};

export default Newsletter;
