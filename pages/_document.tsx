import { ColorModeScript } from "@chakra-ui/react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import theme from "../lib/theme";

const meta = {
    title: 'RealPenguin Blog',
    description: `Im a 16 Years old, Coding Dreamer Currently Learning React, Postgres, Graphql, Prisma, And Typescript.`,
    image: 'https://localhost:3000/static/banner.jpg',
    type: 'website'
};

export default class PenguinDocument extends Document {
    render(): JSX.Element {
        return(
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@leeerob" />
                    <meta name="twitter:title" content={meta.title} />
                    <meta name="twitter:description" content={meta.description} />
                    <meta name="twitter:image" content={meta.image} />
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