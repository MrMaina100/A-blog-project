'use client'

import Link from 'next/link';
import formattedDate from '@/lib/formatDate';
import { useState } from 'react';

export default function Blogs({blogs}:any) {
  // const blogs = sortedPostsData();
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogs = blogs.filter((blog:any)=> blog.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

  return (
    <div>
      <div className='max-w-lg'>
          <input
       type="text"
       placeholder='search for title blogs'
       onChange={(e)=>setSearchValue(e.target.value)}
       className='block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 transition-colors focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100 outline-none'
       
       />

      </div>
    
      <ul className='divide-y divide-gray-200 transition-colors dark:divide-gray-700'>
      {!filteredBlogs && 'No posts :('}
      {filteredBlogs.map((post:any) => (
        <li key={post.slug} className="group transition-colors">
            <Link href={`/blogs/${post.slug}`}>
              <article className="space-y-2 rounded-xl p-4 transition-colors group-hover:bg-gray-100 dark:group-hover:bg-gray-800 xl:grid xl:grid-cols-4  xl:items-baseline xl:space-y-0">
                 <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-sm font-medium leading-6 text-gray-500 transition-colors dark:text-gray-400 md:text-base">
                    <p>
                      {formattedDate(post.date)}
                    </p>
                  </dd>
                </dl>
                <div className="space-y-3 xl:col-span-3">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-gray-900 transition-colors dark:text-gray-100 sm:text-xl md:text-2xl">
                      {post.title}
                    </h3>
                  </div>
                  <div className="prose prose-sm max-w-none text-gray-500 transition-colors dark:text-gray-400 md:prose-base">
                    {post.summary}
                  </div>
                </div>

              </article>

            </Link>

          
        </li>
      ))}

    </ul>

    </div>
    
    
  );
}
