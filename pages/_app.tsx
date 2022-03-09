import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import Layout from '@/components/Layout'
import ScrollToTop from '@/components/ScrollToTop'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
            <ScrollToTop />
          </Layout>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
