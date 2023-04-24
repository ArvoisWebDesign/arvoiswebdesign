const URL = "https://arvoiswebdesign.vercel.app"

function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>${URL}</loc>
            </url>
            <url>
                <loc>${URL}/productions</loc>
            </url>
            <url>
                <loc>${URL}/cv</loc>
            </url>
            <url>
                <loc>${URL}/contact</loc>
            </url>
        </urlset>
    `
}

export function GET() {
    const body = generateSiteMap()

    return new Response(
        body,
        {
            status: 200,
            headers: {
                "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
                "content-type": "application/xml"
            }
        }
    )
}
