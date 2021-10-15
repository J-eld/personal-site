import '../styles/globals.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jad Eldik | Full Stack Developer</title>
        <link rel="icon" type="image/png" href="JLogo.png"/>
      </Head>
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
