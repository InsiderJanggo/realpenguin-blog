import { FC, ReactNode } from "react";
import Image from 'next/image';
import ISnippet from "../../types/snippet";
import Container from "../Container";
import { Center } from "@chakra-ui/react";

type Data = {
    snippet: ISnippet;
    children?: ReactNode;
}

const SnippetLayout: FC<Data> = ({ snippet, children }): JSX.Element => {
    return(
        <Container
            title={`${snippet.title} - Code Snippet`}
            description="A collection of code snippets – including serverless functions, Node.js scripts, and CSS tricks."
        >   
        <Center py={6}>
            <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
            <div className="flex justify-between w-full mb-8">
            <div>
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                {snippet.title}
                </h1>
                <p className="text-gray-700 dark:text-gray-300">
                {snippet.description}
                </p>
            </div>
            <div className="mt-2 sm:mt-0">
                <Image
                alt={snippet.title}
                height={48}
                width={48}
                src={`/static/${snippet.logo}`}
                className="rounded-full"
                />
            </div>
            </div>
            <div className="prose dark:prose-dark w-full">{children as any}</div>
            </article>
        </Center>
        </Container>
    )
}   

export default SnippetLayout;