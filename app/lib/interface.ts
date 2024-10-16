import { Url } from "next/dist/shared/lib/router/router";

export interface BlogInterface {
    title: string;
    description: string;
    currentSlug: string;
    blogImage: any
}

export interface BlogArticleInterface {
    title: string;
    currentSlug: string;
    blogImage: any;
    content: any;
}