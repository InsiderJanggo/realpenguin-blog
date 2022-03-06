import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
