import Container from '@/components/Container'
import type { GetStaticProps, NextPage } from 'next'
import { allSnippets } from '@/lib/snippetLoader'
import Head from 'next/head'
import ISnippet from '@/types/snippet'
import FunctionCard from '@/components/FunctionCard'
import { SimpleGrid, Center } from '@chakra-ui/react'

type Data = {
  snippets: [ISnippet];
}

const Snippets: NextPage<Data> = ({ snippets }) => {
  return (
    <Container 
    title='Code Snippets - RealPenguin Blog' 
    description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks.">
        <Center py={6}>
        <SimpleGrid columns={[1, 2, 1, 2]}>
            {snippets.map((snippet) => (
              <FunctionCard 
                key={snippet.slug}
                snippet={snippet}
              />
            ))}
        </SimpleGrid>
        </Center>   
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const snippets = allSnippets([
    'title',
    'description',
    'slug',
    'content',
    'logo',
    'createdAt'
  ]);

  return {
      props: {
        snippets
      }
  }
}

export default Snippets
