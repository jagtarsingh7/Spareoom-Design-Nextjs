import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://SpareOom.com',
            lastModified: new Date(),
        },
        {
            url: 'https://SpareOom.com/about',
            lastModified: new Date(),
        },
        {
            url: 'https://SpareOom.com/services',
            lastModified: new Date(),
        },
        {
            url: 'https://SpareOom.com/development',
            lastModified: new Date(),
        },
        {
            url: 'https://SpareOom.com/services',
            lastModified: new Date(),
        },
        {
            url: 'https://SpareOom.com/policy',
            lastModified: new Date(),
        },
    ]
}