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
    blockchain,
    javascriptCert,
    pythonCert,
    cpp,
    htmlCert,
    javaCert,
    javascriptMeta,
    leadership,
    reactMeta,
    versionMeta,
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

const certifications = [
    {
        name: "Programming in JavaScript Course",
        description:
            "In the JavaScript course, I learned how to create simple JavaScript code, manipulate objects and arrays, and write unit tests using Jest.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "Jest",
                color: "green-text-gradient",
            },
        ],
        image: javascriptMeta,
        live_link: 'https://www.coursera.org/account/accomplishments/certificate/UG7FFTDCECJ5'
    },
    {
        name: "React Basics Course",
        description:
            "In this React course, I've gained the ability to use reusable components to render views with dynamic data, organize React projects for scalability, use props for efficient data sharing between components, create dynamic and interactive web pages and apps, and implement forms for user interaction, ultimately allowing me to build applications with React.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "props",
                color: "green-text-gradient",
            },
        ],
        image: reactMeta,
        live_link: 'https://www.coursera.org/account/accomplishments/certificate/29UMVV9VS7EH'
    },
    {
        name: "HTML and CSS In Depth Course",
        description: "In the HTML and CSS course, I've learned to create a straightforward responsive form with HTML5 and CSS, design responsive layouts using CSS, develop user interfaces using Bootstrap, and utilize debugging tools for web development.",
        tags: [
            {
                name: "HTML5",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: htmlCert,
        live_link: 'https://www.coursera.org/account/accomplishments/certificate/2PVNCGHRDXNT'
    },
    {
        name: "Version Control Course",
        description:
            "In the 'Version Control Course,' I've acquired the skills to implement version control systems, use the command line for navigation and configuration, create and use GitHub repositories, and effectively manage code revisions, enhancing my abilities in software development.",
        tags: [
            {
                name: "git",
                color: "blue-text-gradient",
            },
            {
                name: "github",
                color: "green-text-gradient",
            },
            {
                name: "Command-line",
                color: "pink-text-gradient",
            },
        ],
        image: versionMeta,
        live_link: 'https://www.coursera.org/account/accomplishments/certificate/QK5MRN2MMBK5'
    },
    {
        name: "Blockchain Specialization Course",
        description:
            "In this specialization, I grasped key concepts for building a blockchain protocol. The courses included encryption, hashing, consensus, transactions, blocks, and private-public keys. I also gained experience in designing, developing, and testing smart contracts and decentralized applications on a private Ethereum blockchain.",
        tags: [
            {
                name: "solidity",
                color: "blue-text-gradient",
            },
            {
                name: "smart-contract",
                color: "green-text-gradient",
            },
            {
                name: "blockchain",
                color: "pink-text-gradient",
            },
        ],
        image: blockchain,
        live_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/MELBL87CNBPD"
    },
    {
        name: "JavaScript Specialization Course",
        description: "In this Specialization, I honed foundational programming skills with JavaScript. Over four courses, I covered JavaScript basics, web content manipulation, and jQuery. Projects demonstrated jQuery's use and differences from JavaScript. I also tackled complex scripts, data handling, and user inputs.",
        tags: [
            {
                name: "HTML5",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "jQuery",
                color: "pink-text-gradient",
            },
        ],
        image: javascriptCert,
        live_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/ABV5JTSG8J93"
    },
    {
        name: "Python Specialization Course",
        description: "In this specialization, I mastered Python 3, covering everything from basics like variables, conditionals, and loops to more advanced concepts such as keyword parameters, list comprehensions, and class inheritance.Through practical exercises, I improved my debugging skills and gained the ability to work with Internet APIs and extract valuable data.",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "json",
                color: "green-text-gradient",
            },
            {
                name: "APIs",
                color: "pink-text-gradient",
            },
        ],
        image: pythonCert,
        live_link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/J9QXC5Z3S74J'
    },
    {
        name: "Java Programming Specialization Course",
        description: "In this Specialization, I gained a strong foundation in software development. It covered key concepts, including algorithm development, data representation, and debugging, utilizing tools like HTML/CSS, Javascript, and Java.",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "DSA",
                color: "pink-text-gradient",
            },
            {
                name: "Debugging",
                color: "green-text-gradient",
            },
        ],
        image: javaCert,
        live_link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/9BVM8HK7YN7S'
    },
    {
        name: "C and C++ For Everyone Course",
        description: "In this Specialization, I learned the foundational C and C++ programming languages, gaining a deep understanding of computer programming, algorithms, and the conversion from C to C++. This knowledge equips me to effectively solve complex problems.",
        tags: [
            {
                name: "C",
                color: "green-text-gradient",
            },
            {
                name: "C++",
                color: "pink-text-gradient",
            },
        ],
        image: cpp,
        live_link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/WEUP3SJQDBY4'
    },
    {
        name: "Teamwork and Leadership Management Course",
        description:
            "One important lesson I've learned is the value of effective communication. I've found that clear and open communication is essential in both personal and professional relationships. It not only prevents misunderstandings but also fosters trust and cooperation",
        tags: [
            {
                name: "Leadership",
                color: "blue-text-gradient",
            },
            {
                name: "Teamwork",
                color: "pink-text-gradient",
            },
            {
                name: "Negotiation",
                color: "green-text-gradient",
            },
        ],
        image: leadership,
        live_link: 'https://www.coursera.org/account/accomplishments/certificate/RS8Y8L7T7UPV'
    },
];

export { services, technologies, experiences, testimonials, projects, certifications };