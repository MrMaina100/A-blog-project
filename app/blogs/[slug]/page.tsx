import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import formattedDate from '@/lib/formatDate';
import ScrollTop from '@/app/components/ScrollTop';
import Balancer from 'react-wrap-balancer'

import { MDXRemote } from 'next-mdx-remote/rsc';
import { GetAllMDXComponents, GetMdxOptions } from '@/lib/mdxHelpers';
import TableOfContents from '@/app/components/TableOfContents';

import { Metadata, ResolvedMetadata } from 'next';
import { Suspense } from 'react';
import { ImageSkeleton } from '@/components/skeleton';

type Props = {
  params: {slug:string}
}

export async function generateMetadata(
  {params}: Props,
  
):Promise<Metadata>{

  const blog = getBloggdata(params)
  const image = blog.frontMatter.image

  const ogImage = image && `https://example-blogzz.vercel.app/${image}`

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.summary,
    openGraph:{
      
      images:[
        {
          url:ogImage,
          width:1200,
          height:630,
          alt: blog.frontMatter.title

        }
      ],
      url: `https://example-blogzz.vercel.app/blogs/${blog.slug}`
      

    },

    twitter:{
      title:blog.frontMatter.title,
      description: blog.frontMatter.summary,
       images:[
        {
          url:ogImage,
          width:576,
          height:1024,
          alt: blog.frontMatter.title

        }
      ]

    }
  }
}

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
        <div className="p-4 md:p-0 max-w-[840px] mx-auto">
          <header className="py-3.5 space-y-6">

            <h1 className=" text-2xl font-extrabold leading-9 tracking-tight  transition-colors dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              <Balancer>
                {props.frontMatter.title}
              </Balancer>
            </h1>
            <Suspense fallback={<ImageSkeleton/>}>
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
            </Suspense>
          </header>


          <div className="pb-8 transition-colors lg:grid lg:grid-cols-4 lg:gap-x-8 mt-10">
            <div className=' pb-8 transition-colors  lg:col-span-3 w-[95%]  prose prose-sm md:prose-base lg:prose-md prose-slate dark:prose-invert'>
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
