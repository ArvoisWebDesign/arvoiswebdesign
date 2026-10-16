type Skill = {
    key:string;
    name:string;
    cssClass:string;
}

export const languages:Skill[] = [
    {
        key: "htmlcssjs",
        name: "HTML / CSS / JS",
        cssClass: "legendary"
    },
    {
        key: "csharp",
        name: "C#",
        cssClass: "legendary"
    },
    {
        key: "razor",
        name: "Razor",
        cssClass: "legendary"
    },
    {
        key: "xml",
        name: "XML",
        cssClass: "epic"
    },
    {
        key: "xsl",
        name: "XSL",
        cssClass: "epic"
    },
    {
        key: "sql",
        name: "SQL",
        cssClass: "epic"
    },
    {
        key: "pascal",
        name: "Pascal",
        cssClass: "rare"
    },
    {
        key: "typescript",
        name: "Typescript",
        cssClass: "rare"
    }
]

export const frameworks:Skill[] = [
    {
        key: "aspnet",
        name: "ASP.NET",
        cssClass: "legendary"
    },
    {
        key: "jquery",
        name: "JQuery",
        cssClass: "legendary"
    },
    {
        key: "tailwindcss",
        name: "TailwindCSS",
        cssClass: "epic"
    },
    {
        key: "bootstrap",
        name: "Bootstrap",
        cssClass: "epic"
    },
    {
        key: "quasar",
        name: "Quasar",
        cssClass: "rare"
    },
    {
        key: "nextjs",
        name: "NextJS",
        cssClass: "rare"
    },
    {
        key: "react",
        name: "ReactJS",
        cssClass: "rare"
    },
    {
        key: "vuejs",
        name: "VueJS",
        cssClass: "common"
    },
    {
        key: "nestjs",
        name: "NestJS",
        cssClass: "common"
    }
]

export const sgbd_orm:Skill[] = [
    {
        key: "sqlserver",
        name: "SQL Server",
        cssClass: "epic"
    },
    {
        key: "entityframework",
        name: "Entity Framework",
        cssClass: "epic"
    }
]

export const devops:Skill[] = [
    {
        key: "azure",
        name: "Azure DevOps",
        cssClass: "epic"
    },
    {
        key: "github",
        name: "GitHub",
        cssClass: "common"
    }
]