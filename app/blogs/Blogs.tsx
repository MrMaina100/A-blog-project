import { sortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import formattedDate from '@/lib/formatDate';

export default function Blogs() {
  const blogs = sortedPostsData();

  return (
    <ul className='divide-y divide-gray-200 transition-colors dark:divide-gray-700'>
      {blogs.map((post) => (
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
    
  );
}
