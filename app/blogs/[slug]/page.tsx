import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import formattedDate from '@/lib/formatDate';
import ScrollTop from '@/app/components/ScrollTop';

import { MDXRemote } from 'next-mdx-remote/rsc';
import { GetAllMDXComponents, GetMdxOptions } from '@/lib/mdxHelpers';
import TableOfContents from '@/app/components/TableOfContents';

// export async function generateMetadata({slug}:any){
//    const blog = getBloggdata(slug)

//    return {
//       title: blog.frontMatter.title,

//    }
// }

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('blogdata'));

  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return paths;
}

function getBloggdata({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join('blogdata', slug + '.mdx'),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export default async function page({ params }: { params: { slug: string } }) {
  const props = getBloggdata(params);
  return (
    <>
      <ScrollTop />
      <div>
        <div className="p-4 md:p-0 prose prose-sm md:prose-base lg:prose-md prose-slate !prose-invert max-w-[840px] mx-auto">
          <header className="py-3.5">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 transition-colors dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {props.frontMatter.title}
            </h1>
            <div className="relative h-[200px]  md:h-[360px]">
              <Image
                src={props.frontMatter.image}
                alt="image"
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </header>
          <div className="pb-8 transition-colors lg:grid lg:grid-cols-4 lg:gap-x-16">
            <div className=' pb-8 transition-colors  lg:col-span-3 w-[95%]'>
              <MDXRemote
                source={props.content}
                components={{ ...GetAllMDXComponents() }}
                options={{ ...GetMdxOptions() }}
              />
            </div>
            <aside className=''>
              <div className="hidden lg:sticky lg:top-24 lg:col-span-1 lg:block ">
                <TableOfContents source={getBloggdata({ slug: params.slug })} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
