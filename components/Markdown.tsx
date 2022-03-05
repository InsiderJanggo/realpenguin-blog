import { FC, Fragment } from "react";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const Markdown: FC = ({ children }): JSX.Element => {
    return(
        <Fragment>
            <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    h1({ children }) {
                        return <h1 style={{ fontWeight: 'bold' }}>{children}</h1>
                    },
                    h3({ children }) {
                        return <h3 style={{ fontWeight: 'bold' }}>{children}</h3>
                    }
                }}
            >
                {children as string}
            </ReactMarkdown>
        </Fragment>
    )
}   

export default Markdown;