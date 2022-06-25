import Head from "next/head"
import { defaultMeta } from "../../content"
import Footer from "../footer"
import WhiteButton from "../whiteButton"

const BasicLayout = ({ children, meta, hideFooter = false }) => {
    /** DYNAMIC METADATA
     * title
     * description
     * url
     * image/banner
     */

    const Newsletter = () => {
        return (
            <>
                <div className="pb-12" />
                <div className="fixed bottom-0 z-20 w-screen bg-brand left-0 text-[#fff]">
                    <div className="m-auto p-5 max-w-6xl flex items-center flex-wrap justify-between py-2">
                        <b className="lg:text-xl">Join my weekly newsletter</b>
                        <WhiteButton
                            page='https://www.getrevue.co/profile/langford_dev?via=twitter-profile'
                            label='Subscribe' />
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta name="title" content={meta.title} />
                <meta name="description" content={meta.description} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content={defaultMeta.site_name} />
                <meta property="og:url" content={meta.url} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:image" content={meta.image} />
                <meta property="og:image:alt" content={defaultMeta.image_alt} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={meta.url} />
                <meta property="twitter:title" content={meta.title} />
                <meta property="twitter:description" content={meta.description} />
                <meta property="twitter:image" content={meta.image}></meta>
                <meta property="twitter:domain" content={meta.url} />
                <meta name="twitter:creator" content={defaultMeta.twitterCreator} />
                <meta name="twitter:image:alt" content={defaultMeta.image_alt} />
            </Head>
            <main className="w-screen">
                <div className="max-w-6xl p-5 m-auto mt-[78px]">
                    {children}
                </div>
            </main>
            {!hideFooter ? <Footer /> : null}
            <Newsletter />
        </>
    )
}

export default BasicLayout