import Head from 'next/head'
import { BlogProvider } from '../context/context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head> */}
      <BlogProvider>
        <Component {...pageProps} />
      </BlogProvider>
    </>
  )
}

export default MyApp
