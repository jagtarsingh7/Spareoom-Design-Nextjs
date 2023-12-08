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
            url: 'https://SpareOom.com/sustainability',
            lastModified: new Date(),
        },
        {
            url: 'https://SpareOom.com/products',
            lastModified: new Date(),
        },
        {
            url: 'https://SpareOom.com/projects',
            lastModified: new Date(),
        },
    ]
}