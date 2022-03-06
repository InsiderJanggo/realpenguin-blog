import { FC } from "react";
import Link from 'next/link';
import Image from 'next/image';
import ISnippet from "@/types/snippet";

// /static/

type Props = {
    snippet: ISnippet;
}

const FunctionCard: FC<Props> = ({ snippet, ...rest }): JSX.Element => {
    return(
        <Link href={`/snippets/${snippet.slug}`}>
          <a
        className="border border-grey-200 dark:border-gray-800 rounded p-4 w-full bg-white dark:bg-gray-900"
        {...rest}
      >
        <Image
          alt={snippet.title}
          height={32}
          width={32}
          src={`/static/${snippet.logo}`}
          className="rounded-full"
        />
        <h3 className="text-lg font-bold text-left mt-2 text-gray-900 dark:text-gray-100">
          {snippet.title}
        </h3>
        <p className="mt-1 text-gray-700 dark:text-gray-400">{snippet.description}</p>
      </a>

        </Link>
    )
}   

export default FunctionCard;