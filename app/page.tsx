import { Card, CardContent } from "@/components/ui/card";
import { BlogInterface } from "./lib/iterface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-8">
      {data.map((blog: BlogInterface, idx) => (
        <Card key={idx}>
          <Image
            className="rounded-t-lg"
            src={urlFor(blog.blogImage).url()}
            alt="blog-image"
            width={550}
            height={550}
          />
          <CardContent className="mt-5">
            <h1 className="text-2xl font-bold line-clamp-2">{blog.title}</h1>
            <p className="mt-3 text-pretty line-clamp-2 text-gray-600 dark:text-gray-400">
              {blog.description}
            </p>
            <Button
              asChild
              className="w-full mt-5 bg-red-600 text-white font-semibold text-xl dark:hover:text-black"
            >
              <Link href={`/blog/${blog.currentSlug}`}>Read more</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
