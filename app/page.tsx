import { Card, CardContent } from "@/components/ui/card";
import { BlogInterface } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hero from "./components/hero";
import React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

async function getBlogData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc){
  title,
    description,
    "currentSlug": slug.current,
    blogImage
}`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: BlogInterface[] = await getBlogData();
  // console.log(data);
  return (
    <React.Fragment>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-8 justify-center">
        {data.map((blog: BlogInterface, idx) => (
          <Card
            key={idx}
            className="flex flex-col justify-between hover:scale-105 transition-all ease-linear cls"
          >
            <Image
              className="rounded-t-lg"
              src={urlFor(blog.blogImage).url()}
              alt="blog-image"
              sizes="100vw"
              width={800}
              height={800}
              priority
              objectFit="cover"
              quality={75}
              style={{ aspectRatio: "16/9" }}
            />
            <h1 className="text-2xl font-bold line-clamp-2 px-5 py-3">
              {blog.title}
            </h1>
            <CardContent className="mt-5">
              <p className="mt-3 text-pretty line-clamp-2 text-gray-600 dark:text-gray-400">
                {blog.description}
              </p>
              <Link
                href={`/blog/${blog.currentSlug}`}
                className="mt-6 group transition-all ease-in bg-[#D9413B] px-5 py-3 flex text-white w-[100%] rounded-lg items-center justify-center text-lg font-semibold"
              >
                Read more
                <FaArrowUpRightFromSquare
                  size={20}
                  className="ml-2 group-hover:-translate-y-1 group-hover:translate-x-1  font-bold transition-all ease-in"
                />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </React.Fragment>
  );
}
