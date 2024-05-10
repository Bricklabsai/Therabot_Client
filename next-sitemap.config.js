/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://trytherabot.com',
    generateRobotsTxt: true, // (optional)
    generateIndexSitemap: false,
    changefreq: false,
    priority: false,
}