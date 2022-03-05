import { FC, Fragment } from "react";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { atomDark  } from 'react-syntax-highlighter/dist/cjs/styles/prism'

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
                    },
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                          <SyntaxHighlighter
                            style={atomDark}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        )
                      }
                }}
            >
                {children as string}
            </ReactMarkdown>
        </Fragment>
    )
}   

export default Markdown;