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
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta name="description" content={meta.description} />
                <meta property="og:site_name" content={defaultMeta.site_name} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:url" content={meta.url} />
                <meta property="og:image" content={meta.image} />
                <meta property="og:image:alt" content={defaultMeta.image_alt} />
                <meta name="twitter:image:alt" content={defaultMeta.image_alt} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content={meta.url} />
                <meta name="twitter:creator" content={defaultMeta.twitterCreator} />
                <meta property="twitter:url" content={meta.url} />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
            </Head>
            {/* <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta name="description" content={meta.description} />
                <meta property="og:site_name" content={meta.site_name} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:url" content={meta.domain} />
                <meta property="og:image" content={meta.image} />
                <meta property="og:image:alt" content={meta.image_alt} />
                <meta name="twitter:image:alt" content={meta.image_alt} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content={meta.url} />
                <meta name="twitter:creator" content={meta.twitterCreator} />
                <meta property="twitter:url" content={meta.domain} />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
            </Head> */}
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