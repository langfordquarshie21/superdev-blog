import Head from "next/head"
import { defaultMeta } from "../../content"
import BackButton from "../backButton"
import Footer from "../footer"
import Header from "../header"

const ReadLayout = ({ children, meta }) => {
    return (
        <>
            <Head>
                {/* <title>{meta.title}</title>
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
                <meta name="twitter:image" content={meta.image} /> */}

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
            <Header />
            <main className="w-screen">
                <div className="max-w-7xl p-5 m-auto mt-[78px]">
                    <div className="max-w-4xl m-auto lg:border lg:border-borderGray lg:p-5 p-0 -mt-10 -mb-5 lg:border-b-0 pt-20">
                        <div className="-mt-10 lg:mt-5">
                            <BackButton />
                        </div>
                        <h1 className="mb-10 capitalize">{meta.title.split('-').join(' ')}</h1>
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ReadLayout