import { sortedPostsData } from '@/lib/posts';

export default async function sitemap(){
   let blogs = sortedPostsData().map((post)=>({
      url:`https://example-blogzz.vercel.app/blogs/${post.slug}`,
      lastModified: post.date   
      
   }))

   let routes = ['', '/blogs'].map((route)=>({
      url : `https://example-blogzz.vercel.app${route}`,
      lastModified: new Date().toISOString().split('T')[0]
   }))

   return [...routes, ...blogs]
}