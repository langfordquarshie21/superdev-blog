const BasicLayout = ({ children }) => {
    return (
        <>
            <main className="w-screen">
                {/* <div className="max-w-7xl border border-t-0 border-borderGray p-5 m-auto mt-[78px]"> */}
                <div className="max-w-7xl p-5 m-auto mt-[78px]">
                    {children}
                </div>
            </main>
        </>
    )
}

export default BasicLayout