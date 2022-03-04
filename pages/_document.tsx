import { ColorModeScript } from "@chakra-ui/react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import theme from "../lib/theme";

export default class PenguinDocument extends Document {
    render(): JSX.Element {
        return(
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
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