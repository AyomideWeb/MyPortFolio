import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    gpt5,
    defi,
    recylox,
    xpactix,
    grandida,
    upwork,
    unizik,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "Solidity Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Technical Writer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Xpactix LLC",
        icon: xpactix,
        iconBg: "#383E56",
        date: "March 2023 - September, 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Solidity Developer",
        company_name: "Grandida LLC",
        icon: grandida,
        iconBg: "#E6DEDD",
        date: "May 2022 - March 2023",
        points: [
            "Development of smart contracts using rust and solidity programming languages",
            "Deployment of smart contracts using Blockchain technologies such as Truffle, Ganache and Hardhat.",
            "Building of Personal DeFi and Decentralized Exchange projects.",
            "Prove Successful working with tight deadlines and fast paced atmosphere.",
            "Development of DeFi projects using Solidity for smart contracts development and deployment using hardhat.",
            "Understanding of Web3.py and Web3.js libraries with their respective frameworks such as Brownie and Hardhat.",
            "Adhered to quality and service standards to support operational goals.",
            "Worked with coworkers to complete tasks.",
        ],
    },
{
    title: "Freelance Web Developer",
        company_name: "Upwork",
            icon: upwork,
                iconBg: "#383E56",
                    date: "Jan 2022 - April 2023 ",
                        points: [
                            "Collaborated with cross-functional teams to design and implement visually appealing and responsive web applications.",
                            "Translated design mockups and wireframes into pixel-perfect, user-friendly interfaces, ensuring a seamless user experience.",
                            "Developed mobile-first, responsive websites to cater to a wide range of devices and screen sizes, enhancing accessibility and user engagement.",
                            "Utilized Git for version control and collaborative development, ensuring a well-organized codebase and streamlined team workflows.",
                        ],
    },
{
    title: "Frontend Developer Intern",
        company_name: "Nnamdi Azikiwe University, Sofware Unit",
            icon: unizik,
                iconBg: "#E6DEDD",
                    date: "Jan 2022 - September 2022",
                        points: [
                            "Assisted in the maintenance and regular updates of the university's website, ensuring that information is current and accurate.",
                            "Collaborated with the web development team to create and update web pages using HTML, CSS, and JavaScript, following university branding guidelines.",
                            "Provided technical support to faculty, staff, and students who encountered issues with the university's web services, addressing their concerns promptly and effectively.",
                            "Assisted in creating documentation and training materials to help university staff and faculty navigate content management systems and basic web development tasks.",
                        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Gabriel proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Gabriel does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Gabriel optimized our website, our traffic increased by 50%. We can't thank him enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "GPT5 Demo Project",
        description:
            "Web application that shows the User Interface for an AI platform. This is not a rel-world project but a demo landing page that shows my work.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "figma",
                color: "pink-text-gradient",
            },
        ],
        image: gpt5,
        source_code_link: "https://github.com/AyomideWeb/gpt5_demoproject",
        live_link: "https://gpt5-demoproject.vercel.app/"
    },
    {
        name: "DeFi For All",
        description:
            "Web3-based platform that allows users to be acquainted with blockchain technology and other opportunities it offers including Decentralized Finance(DeFi)",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "solidity",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "hardhat",
                color: "blue-text-gradient",
            }
        ],
        image: defi,
        source_code_link: "https://github.com/AyomideWeb/DEFI-FOR-ALL-PROJECT",
        live_link: "https://defi-for-all-project.vercel.app/"
    },
    {
        name: "Recylox Web3 Project",
        description:
            "Recylox is a groundbreaking digital currency specifically designed to revolutionize the world of recycling. Built on the principles of blockchain technology.This is a project built by a team of developers which i also contributed to as a developer.",
        tags: [
            {
                name: "solidity",
                color: "blue-text-gradient",
            },
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "ThirdWeb",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: recylox,
        source_code_link: "https://github.com/AyomideWeb/reccoin-frontend",
        live_link: 'https://recylox.netlify.app/'
    },
];

export { services, technologies, experiences, testimonials, projects };