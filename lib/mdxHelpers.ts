import CustomLink from "@/app/components/mdx/CustomLink";

import rehypeHighlight from "rehype-highlight";
import remarkGfm from 'remark-gfm'

import rehypeSlug from 'rehype-slug'


export function GetAllMDXComponents(){
    return { a: CustomLink}//, code: Code}
}

export function GetMdxOptions(){
    return {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [rehypeHighlight, { languages: true }],
            rehypeSlug
        ],
        }
    }
}