import axios from "axios";

import { StrapiBase, PostSummary, Post } from ".";

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_AUTH_TOKEN = process.env.STRAPI_AUTH_TOKEN;


export const getPosts = async () => {
    if (STRAPI_URL === undefined) {
        throw Error("STRAPI_URL not defined.")
    }
    try {
        const res = await axios.get<StrapiBase<PostSummary[]>>(`${STRAPI_URL}/api/posts?fields[0]=title&fields[1]=excerpt&fields[2]=slug&fields[3]=updatedAt&populate[0]=featuredImage&populate[1]=author&populate[author][populate]=image`, {
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
    if (STRAPI_URL === undefined) {
        throw Error("STRAPI_URL not defined.")
    }
    try {
        const res = await axios.get<StrapiBase<Post>>(`${STRAPI_URL}/api/posts/${slug}`,
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