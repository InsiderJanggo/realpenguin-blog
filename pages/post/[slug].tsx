import { Container } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'
import Markdown from '@/components/Markdown'
import { getAllPost, getPostBySlug } from '@/lib/markdownApi'
import IPost from '@/types/post'

interface IParams extends ParsedUrlQuery {
    slug: string
}

type Data = {
  post: IPost;
}

const Post: NextPage<Data> = ({ post }) => {
  return (
    <div>
      <Head>
        <title>{`${post.title} - RealPenguin Blog`}</title>
        <meta name='title' content={post?.title} />
        <meta name="description" content={post?.desc} />
        <meta name='image' content={post?.image} />
        <meta property="og:title" content={post?.title} />
        <meta property="og:url" content={`https://realpenguin-blog.vercel.app/post/${post?.slug}`} />
        <meta property="og:image" content={post?.image} />
      </Head>
      <Container>
        <Markdown>
          {post?.content}
        </Markdown>
      </Container>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPost(['slug']);

  return {
      paths: posts.map((post) => {
        return {
            params: {
              slug: post.slug,
            }
        }
      }),
      fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const post = getPostBySlug(slug, [
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
        post
      }
  }
}

export default Post
