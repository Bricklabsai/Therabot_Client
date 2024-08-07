/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
    experimental: {
        mdxRs: true,
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'therabot-strapi.azurewebsites.net' }
        ]
    }
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);