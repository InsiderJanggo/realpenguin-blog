import * as fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '/_posts');

export function getPostSlugs(): string[] {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: any[]): any {
    const realSlug = slug.replace(/\.md$/, '')
    const path = join(postsDirectory, `${realSlug}.md`)
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

export function getAllPost(fields: any[]): any[] {
    const slugs = getPostSlugs();
    const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.createdAt > post2.createdAt ? -1 : 1))

    return posts
}