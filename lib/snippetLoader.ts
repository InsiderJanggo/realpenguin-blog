import matter from "gray-matter";
import { join } from "path";
import * as fs from 'fs'

const snippetsDirectory = join(process.cwd(), '/data/snippets');

export const getSnippetSlug = (): string[] => {
    return fs.readdirSync(snippetsDirectory);
}

export const getSnippetBySlug = (slug: string, fields: string[]) => {
    const realSlug = slug.replace(/\.md$/, '')
    const path = join(snippetsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(path, 'utf8')
    const { data, content } = matter(fileContents)
    
    const items: any = {};

    fields.forEach((field: any) => {
        if (field === 'slug') {
            items[field] = slug
        }
        if (field === 'content') {
            items[field] = content
        }
      
        if (typeof data[field] !== 'undefined') {
            items[field] = data[field]
        }
    })

    return items;
}

export const allSnippets = (fields: string[]) => {
    const slugs = getSnippetSlug();
    const snippets = slugs
    .map((slug) => getSnippetBySlug(slug, fields))
    .sort((post1, post2) => (post1.createdAt > post2.createdAt ? -1 : 1))

    return snippets;
}