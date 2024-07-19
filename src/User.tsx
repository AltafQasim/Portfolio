import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Altaf Sheikh",
    stack: ["Software Engineer", "Front-End Developer", "React Expert", "Competitive Programmer", "Open Source Contributor"],
    bio: "I'm a passionate software engineer specialized in crafting efficient and scalable solutions, deliver top-notch web applications. Let's connect and create something amazing together!"
}



const ProjectInfo = [
    {
        title: "MyCart E-comm App",
        desc: "MyCart is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Heroicons, and HeadlessUI, offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. MyCart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
        image: "MyCart.png",
        live: true,
        technologies: ["React", "Tailwind", "Redux", "Heroicons", "HeadlessUI"],
        link: "https://altafqasim.github.io/MyCart/",
        github: "https://github.com/AltafQasim/MyCart/"
    },
    {
        title: "WatsUpLife Info App",
        desc: "WatsUpLife is a modern UI/UX base fully responsive information platform built using Next, TailwindCSS, Custom Figma Icon and SEO freindly. This site provides a snapshot of which City has to offer, guiding travelers to make the most of their visit with essential information on events, blogs, places of interest, dining options, nightlife, and transportation.",
        image: "watsuplife.png",
        live: true,
        technologies: ["Next", 'Figma', "Instagram Graph API", "Tailwind", 'Sculpin'],
        link: "https://watsuplife.in",
        github: "https://github.com/AltafQasim/watsuplife"
    },
    {
        title: "Infused Analytics",
        desc: "Infused Analytics Project is a comprehensive web application developed using React for dynamic front-end components and Bootstrap and Material UI for responsive design.Implements robust CSV import functionality for easy management of diverse insurance plans, including medical, vision, dental, and more.Integrates Formik for streamlined form management and Yup for schema-based validation, ensuring accurate data entry and reducing errors. Includes Sisense Single Sing on (SSO) and powerful data visualization and analytics, offering insights into insurance plan utilization, claims statistics, and member demographics.",
        image: "InfusedAnalytics.png",
        live: true,
        technologies: ["React", "Sisense", 'Redux', "Bootstrap", "Material UI", "Formik", "Yup",],
        link: "https://infusedanalytics.online",
        github: "https://github.com/AltafQasim/Insurance-App"
    },
    // {
    //     title: "Travel Tracker",
    //     desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
    //     image: "Travel.png",
    //     live: false,
    //     technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
    //     link: "https://github.com/Code-Mars/Travel-Tracker",
    //     github: "https://github.com/Code-Mars/Travel-Tracker"
    // },
    // {
    //     title: "Instagram Clone",
    //     desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
    //     image: "Instagram.png",
    //     live: false,
    //     technologies: ["React", "Springboot", "Tailwind", "Heroicons", "Firebase", "MongoDB"],
    //     link: "https://github.com/Code-Mars/Instagram-Clone",
    //     github: "https://github.com/Code-Mars/Instagram-Clone"
    // },
    // {
    //     title: "CodeX Code Editor",
    //     desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, offering a seamless coding experience across all devices. It features syntax highlighting for popular programming languages, including HTML, CSS, JavaScript, Python, and Java. Users can create, edit, and save code files, with the option to download them as text files. CodeX combines robust functionality with a sleek, intuitive design, making coding effortless and enjoyable.",
    //     image: "CodeX.png",
    //     live: false,
    //     technologies: ["React", "Tailwind", "Ace Editor"],
    //     link: "https://github.com/Code-Mars/CodeX",
    //     github: "https://github.com/Code-Mars/CodeX"
    // }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Next JS", "Redux", "Tailwind CSS", "Sisense", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MongoDB"]
    },
    {
        title: "Languages",
        skills: ["C", "JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
        title: "Tools",
        skills: ["Github", 'Sourcetree', "VS Code", "Postman", "MongoDB Compass"]
    }
]
const socialLinks = [
    { link: "https://github.com/AltafQasim", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/altaf-shekh-096542210/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/code.marshal_", icon: IconBrandInstagram },
    { link: "https://www.youtube.com/channel/UC1ki6jaFvFiH_E79b9FYptw", icon: IconBrandYoutube },
    { link: "https://www.leetcode.com/u/CodeMars", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Front-End Developer",
        company: "Buoyancy Software Pvt. Ltd",
        date: "February 2023 - Present",
        desc: [
            'Contributed to frontend development with a primary focus on React-based application',
            'Skillfully implementing applications utilizing an array of modern technologies, such as ReactJS, NodeJS, HTML5, and CSS3.',
            'Precision-engineering web applications with React JS and Flux, while maintaining a well-organized JavaScript code.',
            ' Exhibiting proficiency in developing applications from the ground up, utilizing React Native in tandem with Redux to ensure optimal performance and user experience.'
        ],
        skills: ["React JS", 'Next JS', 'Material UI', "Tailwind CSS", 'Formik', 'Yup', 'Sisense', "Node JS", "JIRA"]
    },
    {
        role: "Web Development Intern",
        company: "Appsile Info. Technology & Services",
        date: "May 2022 - February 2023",
        desc: [
            'Gained hands-on experience with JavaScript, React and TypeScript, contributing to various development projects.',
            'Assisted in maintaining and troubleshooting portfolio of websites ensuring seamless user experience.',
            'Implementing applications using a modern technology stack, incorporating ReactJS, HTML5, and CSS3.',
            'Developing the applications from scratch using React JS and Redux.'
        ],
        skills: ["Javascript", "React JS", 'Redux', "Bootstrap", "CSS3", "HTML5", "Click Up"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };