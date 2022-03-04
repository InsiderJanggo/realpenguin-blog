import { FC, Fragment } from "react";
import ReactMarkdown from 'react-markdown'

const Markdown: FC = ({ children }): JSX.Element => {
    return(
        <Fragment>
            <ReactMarkdown>
                {children as string}
            </ReactMarkdown>
        </Fragment>
    )
}   

export default Markdown;