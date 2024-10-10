import { BlogArticleInterface } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";

async function getBlogData(slug: string) {
  const query = `
  *[_type == 'blog' && slug.current == '${slug}']{
    title,
      "currentSlug": slug.current,
      blogImage,
      content
      
  }[0]`;

  const data = await client.fetch(query);

  return data;
}

const Blog_Article = async ({ params }: { params: { slug: string } }) => {
  const data: BlogArticleInterface = await getBlogData(params.slug);
  return (
    <React.Fragment>
      <div className="w-full flex flex-col items-center mt-8">
        <h1>
          <span className="block font-semibold text-center text-2xl text-red-600 tracking-wide">
            Sam<span className="text-black dark:text-white">Blogs</span> -{" "}
            <span className="capitalize">built to explore</span>
          </span>
          <span className="block text-center text-4xl font-extrabold mt-5 sm:text-4xl leading-8 tracking-tight">
            {data.title}
          </span>
        </h1>
        <Image
          src={urlFor(data.blogImage).url()}
          alt="blog-image"
          width={800}
          height={800}
          priority
          className="flex items-center justify-center rounded-lg mt-8 border"
        />
        <div className="mt-16 prose prose-xl prose-headings:text-2xl prose-headings:font-extrabold prose-headings:text-red-600 dark:prose-invert prose-blue">
          <PortableText value={data.content}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blog_Article;
