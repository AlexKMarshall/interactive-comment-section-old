import { Comment } from 'src/components'
import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'
import { client } from 'src/util/genqlClient'
import { useQuery } from 'react-query'

const Home: NextPage = () => {
  const getComments = () =>
    client.query({
      getComments: {
        id: true,
        content: true,
      },
    })
  const commentsQuery = useQuery(['comments'], getComments)

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
      {commentsQuery.isLoading ? <div>Loading...</div> : null}
      {commentsQuery.isError ? (
        <pre>{JSON.stringify(commentsQuery.error, null, 2)}</pre>
      ) : null}
      {commentsQuery.isSuccess ? (
        <ul>
          {commentsQuery.data.getComments?.map((comment) => (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  )
}

export default Home
