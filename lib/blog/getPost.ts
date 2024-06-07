import axios from "axios";

import { StrapiBase, PostSummary, Post } from ".";

const STRAPI_URL = process.env.STRAPI_URL;

//http://localhost:1337/api/posts?fields[0]=title&fields[1]=excerpt&fields[2]=slug&fields[3]=updatedAt&populate[0]=featuredImage&populate[1]=author&populate[author][populate]=image

export const getPosts = async () => {
    if (STRAPI_URL === undefined) {
        throw Error("STRAPI_URL not defined.")
    }
    try {
        const res = await axios.get<StrapiBase<PostSummary[]>>(`${STRAPI_URL}/api/posts?fields[0]=title&fields[1]=excerpt&fields[2]=slug&fields[3]=updatedAt&populate[0]=featuredImage&populate[1]=author&populate[author][populate]=image`, {
            headers:
                { 'Authorization': 'bearer 9ba42f0298a059ef1e2583e49c14c1fa9f7b5a7a561ef500944ac976131536776545c7a9f14d3c3de61a621fd84238abc203185be2224898dfc84be9c9f32de95cc3742bfba2fb8fdeea039e20282d8c2f68b716734de641de13261739643f18e4a86d4c1c9e8947e27e2bd24ece163db17abd661ab683d4ee0751690aa514d0' }
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
                    { 'Authorization': 'bearer 9ba42f0298a059ef1e2583e49c14c1fa9f7b5a7a561ef500944ac976131536776545c7a9f14d3c3de61a621fd84238abc203185be2224898dfc84be9c9f32de95cc3742bfba2fb8fdeea039e20282d8c2f68b716734de641de13261739643f18e4a86d4c1c9e8947e27e2bd24ece163db17abd661ab683d4ee0751690aa514d0' }
            }
        )
        return res.data
    }
    catch (error: any) {
        console.error("Error: ", error.message)
        return null;
    }
}