import Head from 'next/head'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Interactive Comment Section</title>
        <meta
          name="description"
          content="Threaded nested comments with social features"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Interactive Comment Section</h1>
    </>
  )
}

export default Home
