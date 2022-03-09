import Container from '@/components/Container'
import PostCard from '@/components/PostCard'
import { getAllPost, getPostBySlug } from '@/lib/markdownApi'
import IPost from '@/types/post'
import { SimpleGrid } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
    name: string
}

type Data = {
    name: string;
    posts: [IPost]
}

const Category: NextPage<Data> = ({ name, posts }) => {
  return (
    <Container title={`${name} Categories - RealPenguin Blog`} description={`${name} Categories - RealPenguin Blog`}>
        <SimpleGrid columns={[1, 2, 1, 2]}>
         
        </SimpleGrid>
    </Container>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPost(['category']);

    return {
        paths: posts.map((post) => {
            return {
              params: {
                name: post.category.name
              },
            }
        }),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { name } = context.params as IParams;
    const post = getAllPost([
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
        post,
        name
      }
  }
}

export default Category