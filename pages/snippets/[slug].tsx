import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Fragment } from 'react'
import SnippetLayout from '@/components/layout/snippet'
import Markdown from '@/components/Markdown'
import { allSnippets, getSnippetBySlug } from '@/lib/snippetLoader'
import ISnippet from '@/types/snippet'

interface IParams extends ParsedUrlQuery {
  slug: string
}

type Props = {
  snippet: ISnippet;
}

const SnippetPage: NextPage<Props> = ({ snippet }) => {
  return (
    <Fragment>
        <SnippetLayout snippet={snippet}>
            <Markdown>
                {snippet.content}
            </Markdown>
        </SnippetLayout>
    </Fragment>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const snippets = allSnippets(['slug']);

    return {
        paths: snippets.map((snippet) => {
            return {
                params: {
                    slug: snippet.slug
                }
            }
        }),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const snippet = getSnippetBySlug(slug, [
    'title',
    'description',
    'slug',
    'content',
    'logo',
    'createdAt'
  ])

  return {
      props: {
        snippet
      }
  }
}

export default SnippetPage
