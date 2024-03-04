import path from "path";
import matter  from 'gray-matter'
import fs from 'fs'
import {remark} from 'remark'
import html from 'remark-html'
import {  BlogPost} from '../lib/blog-types'


const blogsDirectory = path.join(process.cwd(), 'blogdata')

 export function sortedPostsData(){
   //get file names 

   const filenames = fs.readdirSync(blogsDirectory)

   const allPostData = filenames.map((filename)=>{
      //remove .md from file name to get the slug

      const slug = filename.replace(/\.mdx$/, '')

      //read markdown file as string 
      const fullPath = path.join(blogsDirectory, filename) //blogdata/the file name
      const fileContents = fs.readFileSync(fullPath, 'utf-8')

      //gray-matter to parse the post metadata section

      const matterResult = matter(fileContents)

      const blogPost: BlogPost = {
         slug,
         title: matterResult.data.title,
         date: matterResult.data.date,
         summary:matterResult.data.summary,
         image: matterResult.data.image
      }

      return blogPost
   })

   return allPostData.sort((a, b)=> a.date < b.date ? 1 : -1)
}


export async function getBlogData(slug:string){
   const fullPath = path.join(blogsDirectory,  `${slug}.mdx`)
   const fileContents = fs.readFileSync(fullPath, 'utf-8')

   const matterResult = matter(fileContents)

   const processedContent = await remark()
   .use(html)
   .process(matterResult.content)

   const contentHtml = processedContent.toString()

   const blogswithHTML: BlogPost & {contentHtml: string}= {

      slug,
      title:matterResult.data.title,
      date: matterResult.data.date,
      image:matterResult.data.image,
      summary:matterResult.data.summary,
      contentHtml

   }
   return blogswithHTML
}


