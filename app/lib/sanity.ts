import { createClient } from "next-sanity"; // Library to connect to Sanity
import  ImageUrlBuilder  from "@sanity/image-url"; // Library to convert images to url in Sanity


// here I am creating a client to connect to Sanity and fetch data
export const client = createClient({
    apiVersion: "v2022-03-07",
    dataset: "production",
    projectId: process.env.SANITY_PROJECT_ID,
    useCdn: false
});

// here I am writing a function to convert the image to url from Sanity for type safety
const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}