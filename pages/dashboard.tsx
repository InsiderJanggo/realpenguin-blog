import GitHubCard from '@/components/metrics/Github'
import { Center, SimpleGrid } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Container from '@/components/Container'
import Head from 'next/head'

const Dashboard: NextPage = () => {
  return (
    <Container
      title="Dashboard – RealPenguin Blog"
      description="My personal dashboard, built with Next.js API routes deployed as serverless functions."
    >
      <SimpleGrid columns={[1, 3, 1, 3]}>
        <Center py={6}>
            <GitHubCard />
        </Center>
      </SimpleGrid>
    </Container>
  )
}

export default Dashboard
