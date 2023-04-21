type ProductionImage = {
    src:string;
    alt:string;
}

type Production = {
    key:string;
    name:string;
    href:string;
    github:string;
    description:string;
    previewImg:ProductionImage;
    mobileImg:ProductionImage;
    tags:Tag[];
}

type Tag = {
    key:string;
    name:string;
}

const tags = {
    nextjs13app: {
        key: "nextjs13app",
        name: "NextJS 13 (appDir)"
    },
    tailwindcss: {
        key: "tailwindcss",
        name: "TailwindCSS"
    },
    typescript: {
        key: "typescript",
        name: "Typescript"
    },
    turbopack: {
        key: "turbopack",
        name: "Turbopack"
    },
    verceldeploy: {
        key: "verceldeploy",
        name: "Déploiement Vercel"
    },
    aspnetcore7mvc: {
        key: "aspnetcore7mvc",
        name: "ASP.NET Core 7 MVC"
    },
    bootstrap: {
        key: "bootstrap",
        name: "Bootstrap"
    },
    sqlserver: {
        key: "sqlserver",
        name: "SQL Server"
    },
    azuredeploy: {
        key: "azuredeploy",
        name: "Déploiement Azure"
    },
    github: {
        key: "github",
        name: "GitHub"
    },
}

export const productions:Production[] = [
    {
        key: "slvv",
        name: "SLVV",
        href: "https://slvv.vercel.app",
        github: "https://github.com/ArvoisWebDesign/slvv-website",
        description: "Site vitrine de compositeur indépendant",
        previewImg: {
            src: "/productions/slvv-vercel-app-home.JPG",
            alt: "SLVV Website preview"
        },
        mobileImg: {
            src: "/productions/slvv-vercel-app-home-mobile.JPG",
            alt: "SLVV website responsive preview"
        },
        tags: [
            tags.nextjs13app,
            tags.tailwindcss,
            tags.typescript,
            tags.turbopack,
            tags.verceldeploy,
            tags.github
        ]
    },
    {
        key: "portfolio",
        name: "Portfolio",
        href: "https://arvoiswebdesign.vercel.app",
        github: "https://github.com/ArvoisWebDesign/arvoiswebdesign",
        description: "Site regroupant mes réalisations, un description de leur stack technique, mon cv, etc...",
        previewImg: {
            src: "/productions/arvoiswebdesign-cv.JPG",
            alt: "Portfolio preview"
        },
        mobileImg: {
            src: "/productions/arvoiswebdesign-cv-mobile.JPG",
            alt: "Portfolio responsive preview"
        },
        tags: [
            tags.nextjs13app,
            tags.tailwindcss,
            tags.typescript,
            tags.turbopack,
            tags.verceldeploy,
            tags.github
        ]
    },
    {
        key: "awmm",
        name: "AW Mouse Management",
        href: "https://aw-mouse-management.azurewebsites.net",
        github: "https://github.com/ArvoisWebDesign/aw-mouse-management",
        description: "Site test fullstack ASP.NET Core 7 (MVC) avec base de donnée SQL Server",
        previewImg: {
            src: "/productions/aw-mouse-management-home.JPG",
            alt: "AW mouse management preview"
        },
        mobileImg: {
            src: "/productions/aw-mouse-management-home-mobile.JPG",
            alt: "AW mouse management responsive preview"
        },
        tags: [
            tags.aspnetcore7mvc,
            tags.bootstrap,
            tags.sqlserver,
            tags.azuredeploy,
            tags.github
        ]
    }
]