import Head from "next/head"
import { defaultMeta } from "../../content"
import Footer from "../footer"

const BasicLayout = ({ children, metaDescription = defaultMeta.description, metaImg = defaultMeta.image, metaTitle = defaultMeta.title, hideFooter = false }) => {
    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                <meta name="robots" content="follow, index" />
                <meta name="description" content={metaDescription} />
                <meta property="og:site_name" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:image" content={metaImg} />
                <meta name="twitter:card" content={metaImg} />
                <meta name="twitter:site" content="@langford_dev" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={metaImg} />
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