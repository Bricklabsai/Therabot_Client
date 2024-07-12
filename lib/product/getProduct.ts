import axios from "axios";
import { StrapiBase } from "../blog";
import { Product } from ".";

const STRAPI_URL = process.env.STRAPI_URL || null;
const STRAPI_AUTH_TOKEN = process.env.STRAPI_AUTH_TOKEN || null;

export const getProduct = async (slug: string) => {
    if (STRAPI_URL === null) {
        Error("STRAPI_URL not defined.")
        return null
    }
    try {
        const res = await axios.get<StrapiBase<Product>>(`${STRAPI_URL}/api/products/${slug}`,
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