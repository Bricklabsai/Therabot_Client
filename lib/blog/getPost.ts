import axios from "axios";

import { StrapiBase, PostSummary, Post } from ".";

const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || null;
const STRAPI_AUTH_TOKEN = process.env.STRAPI_AUTH_TOKEN || null;


export const getPosts = async () => {
    if (NEXT_PUBLIC_STRAPI_URL === null) {
        Error("NEXT_PUBLIC_STRAPI_URL not defined.")
        return null
    }
    try {
        const res = await axios.get<StrapiBase<PostSummary[]>>(`${NEXT_PUBLIC_STRAPI_URL}/api/posts?fields[0]=title&fields[1]=excerpt&fields[2]=slug&fields[3]=updatedAt&populate[0]=featuredImage&populate[1]=author&populate[author][populate]=image`, {
            headers:
                { 'Authorization': `bearer ${STRAPI_AUTH_TOKEN}` }
        })
        return res.data
    }
    catch (error: any) {
        console.error("Error: ", error)
        return null;
    }
}


export const getPost = async (slug: string) => {
    if (NEXT_PUBLIC_STRAPI_URL === null) {
        Error("NEXT_PUBLIC_STRAPI_URL not defined.")
        return null
    }
    try {
        const res = await axios.get<StrapiBase<Post>>(`${NEXT_PUBLIC_STRAPI_URL}/api/posts/${slug}`,
            {
                headers:
                    { 'Authorization': `bearer ${STRAPI_AUTH_TOKEN}` }
            }
        )
        return res.data
    }
    catch (error: any) {
        console.error("Error: ", error.message)
        return null;
    }
}