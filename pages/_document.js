import { Html, Head, Main, NextScript } from 'next/document'
import { useEffect } from 'react'
import { defaultMeta } from '../content'

export default function Document() {

    useEffect(() => {
        var ads = document.getElementsByClassName("adsbygoogle").length;
        for (var i = 0; i < ads; i++) {
            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) { }
        }
    }, [])

    return (
        <Html lang="en">
            <Head>
                <meta name="robots" content="follow, index" />
                <meta name="description" content={defaultMeta.description} />
                <meta property="og:site_name" content={defaultMeta.site_name} />
                <meta property="og:title" content={defaultMeta.title} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={defaultMeta.description} />
                <meta property="og:url" content={defaultMeta.domain} />
                <meta property="og:image" content={defaultMeta.image} />
                <meta property="og:image:alt" content={defaultMeta.image_alt} />
                <meta name="twitter:image:alt" content={defaultMeta.image_alt} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content={defaultMeta.url} />
                <meta name="twitter:creator" content={defaultMeta.twitterCreator} />
                <meta property="twitter:url" content={defaultMeta.domain} />
                <meta name="twitter:title" content={defaultMeta.title} />
                <meta name="twitter:description" content={defaultMeta.description} />
                <meta name="twitter:image" content={defaultMeta.image} />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3725774437684608" crossOrigin="anonymous"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
