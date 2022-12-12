import Head from 'next/head'
import Link from 'next/link'
import styles from '/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>NewsAPI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-yellow-200 grid place-content-center h-24'>
        <Link className='text-3xl font-bold' href="/">NewsAPI</Link>
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
