import type { GetStaticProps, NextPage } from 'next'
import { getAllPost } from '../lib/markdownApi'
import Head from 'next/head'
import { SimpleGrid } from '@chakra-ui/react'
import PostCard from '../components/PostCard'

type Data = {
  posts: any[]
}

const Home: NextPage<Data> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>{`Home - RealPenguin Blog`}</title>
      </Head>
      <SimpleGrid columns={[1, 2, 1, 2]}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </SimpleGrid>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = getAllPost([
    'title',
    'slug',
    'desc',
    'content',
    'image',
    'author',
    'categories',
    'category',
    'createdAt'
  ]);

  return {
      props: {
        posts
      }
  }
}

export default Home
