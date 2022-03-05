import Head from "next/head";
import { FC, Fragment, ReactNode } from "react";

type Data = {
    title?: string;
    description?: string;
    children?: ReactNode;
}

const Container: FC<Data> = ({ children, title, description  }): JSX.Element => {
    return(
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
            </Head>
            {children as any}
        </Fragment>
    )
}   

export default Container;