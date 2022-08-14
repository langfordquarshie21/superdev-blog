import { BlogProvider } from '../context/context'
import ReactGA from 'react-ga';
import '../styles/globals.css'

const TRACKING_ID = "UA-183754063-1"
ReactGA.initialize(TRACKING_ID)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BlogProvider>
        <Component {...pageProps} />
      </BlogProvider>
    </>
  )
}

export default MyApp
