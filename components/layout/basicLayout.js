import Head from "next/head"
import Footer from "../footer"

const BasicLayout = ({ children, metaTitle = 'Superdev blog⚡', hideFooter = false }) => {
    return (
        <>
            <Head>
                <title>{metaTitle}</title>
            </Head>
            <main className="w-screen">
                <div className="max-w-7xl p-5 m-auto mt-[78px]">
                    {children}
                </div>
            </main>
            {!hideFooter ? <Footer /> : null}
        </>
    )
}

export default BasicLayout