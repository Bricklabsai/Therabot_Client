import axios from "axios";
import { StrapiBase } from "../blog";
import { Product } from ".";

const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || null;
const STRAPI_AUTH_TOKEN = process.env.STRAPI_AUTH_TOKEN || null;

export const getProduct = async (slug: string) => {
    if (NEXT_PUBLIC_STRAPI_URL === null) {
        Error("NEXT_PUBLIC_STRAPI_URL not defined.")
        return null
    }
    try {
        const res = await axios.get<StrapiBase<Product>>(`${NEXT_PUBLIC_STRAPI_URL}/api/products/${slug}?populate=*`,
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