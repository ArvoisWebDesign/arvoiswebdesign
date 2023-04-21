import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://arvoiswebdesign.vercel.app",
            lastModified: new Date()
        },
        {
            url: "https://arvoiswebdesign.vercel.app/productions",
            lastModified: new Date()
        },
        {
            url: "https://arvoiswebdesign.vercel.app/cv",
            lastModified: new Date()
        },
        {
            url: "https://arvoiswebdesign.vercel.app/contact",
            lastModified: new Date()
        }
    ]
}