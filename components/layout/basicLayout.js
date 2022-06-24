import Head from "next/head"
import { defaultMeta } from "../../content"
import Footer from "../footer"

const BasicLayout = ({ children, meta, hideFooter = false }) => {
    /** DYNAMIC METADATA
     * title
     * description
     * url
     * image/banner
     */

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
                <div className="max-w-7xl p-5 m-auto mt-[78px]">
                    {children}
                </div>
            </main>
            {!hideFooter ? <Footer /> : null}
        </>
    )
}

export default BasicLayout