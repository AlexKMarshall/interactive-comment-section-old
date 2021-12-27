import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'
import { client } from 'src/util/genqlClient'
import { useQuery } from 'react-query'

const Home: NextPage = () => {
  const getPosts = () =>
    client.query({
      getPosts: {
        id: true,
        title: true
      }
    })
  const postsQuery = useQuery(['posts'], getPosts)

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
      {postsQuery.isLoading ? <div>Loading...</div> : null}
      {postsQuery.isError ? (
        <pre>{JSON.stringify(postsQuery.error, null, 2)}</pre>
      ) : null}
      {postsQuery.isSuccess ? (
        <ul>
          {postsQuery.data.getPosts?.map(post => (
            <li key={post.id}>
              <Link href={`posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}

export default Home
