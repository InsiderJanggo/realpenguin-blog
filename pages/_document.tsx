import { ColorModeScript } from "@chakra-ui/react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import theme from "@/lib/theme";

const meta = {
    title: 'RealPenguin Blog',
    description: `Im a 16 Years old, Coding Dreamer Currently Learning React, Postgres, Graphql, Prisma, And Typescript.`,
    image: 'https://realpenguin-blog.vercel.app/static/banner.jpg',
    type: 'website'
};

export default class PenguinDocument extends Document {
    render(): JSX.Element {
        return(
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.png" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@wisly_ong" />
                    <meta name="twitter:title" content={meta.title} />
                    <meta property='og:type' content='website' />
                    <meta name="twitter:description" content={meta.description} />
                    <meta name="twitter:image" content={meta.image} />
                    <meta name='theme-color' content='#8A2BE2' />
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}