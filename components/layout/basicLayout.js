import Head from "next/head"
import { defaultMeta } from "../../content"
import Footer from "../footer"

const BasicLayout = ({ children, meta = defaultMeta, hideFooter = false }) => {
    //  metaDescription = defaultMeta.description, metaImg = defaultMeta.image, metaTitle = defaultMeta.title,
    return (
        <>
            <Head>
                <title>{defaultMeta.title}</title>
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

                {/* <meta name="robots" content="follow, index" />
                <meta name="description" content={metaDescription} />
                <meta property="og:site_name" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:image" content={metaImg} />
                <meta name="twitter:card" content={metaImg} />
                <meta name="twitter:site" content="@langford_dev" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={metaImg} /> */}
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