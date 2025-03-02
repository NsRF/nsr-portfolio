
import { motion } from 'framer-motion';

type TimeLineInfos = {
    title: string;
    date: string;
    role?: string;
    description: string;
    logo?: string;
}

const timeLineInformations: TimeLineInfos[] = [
    {
        title: "Comgás",
        date: "03/2024 - Present",
        role: "Tech Lead Cross",
        logo: "/companies/comgas-logo.png",
        description: "• Lead and guide cross-functional teams, ensuring all teams are aligned with project goals, timelines, and best practices.\n" +
            "• Architect and design new solutions from the ground up, ensuring that they meet both current and future business needs.\n" +
            "• Collaborate with architects and senior developers to develop scalable, maintainable, and high-performance systems using Angular, ASP.NET, and Kotlin.\n" +
            "• Oversee the creation and management of CI/CD pipelines using Azure Portal and Kubernetes.\n" +
            "• Directly manage the process for opening production changes, ensuring each release is thoroughly tested.\n" +
            "• Mentor development teams, providing expertise in complex technical problems and architectural decisions.\n" +
            "• Ensure seamless communication across teams to facilitate the implementation of new features."
    },
    {
        title: "Prover Soluções em Tecnologia",
        date: "03/2019 - 03/2024",
        role: "Senior Developer, Tech Lead, and DevOps Specialist",
        description: "• Played multiple roles, from senior developer to solution architect, across diverse projects.\n" +
            "• Refactored legacy code into clean, efficient solutions, primarily focusing on JavaScript technologies like Node.js, NestJS, and Angular.\n" +
            "• Designed and implemented secure authentication systems using JWT and other security best practices.\n" +
            "• Managed databases across various platforms: SQL Server, Postgres, MongoDB, Redis, MySQL, Oracle, and CosmosDB.\n" +
            "• Built APIs using ASP.NET, NestJS, and Node.js, and implemented frontends with React, React Native, Next.js, Redux, and Angular.\n" +
            "• Worked with Kubernetes and Docker to containerize applications and ensure smooth deployment pipelines.\n" +
            "• Automated deployments with GitHub Actions, incorporating CI/CD pipelines for seamless delivery.\n" +
            "• Created microservices to segment application responsibilities and improve scalability."
    },
    {
        title: "Pieracciani (PierX Project)",
        date: "01/2021 - 06/2023 (Part-time)",
        role: "Senior Node.js Developer",
        description: "• Developed and maintained APIs using Node.js and NestJS, ensuring efficient and scalable backend services.\n" +
            "• Created reports with GraphQL to streamline data queries for client applications.\n" +
            "• Refactored and implemented new features in frontend frameworks, including React and Angular.\n" +
            "• Fixed bugs and optimized business logic to enhance system reliability and performance.\n" +
            "• Managed and administered MongoDB databases, ensuring data integrity and availability.\n" +
            "• Delivered high-quality solutions, maintaining consistent uptime and optimal performance.\n" +
            "• Collaborated in agile environments, leveraging Scrum to manage sprints effectively."
    },
    {
        title: "Seguralta Insurance Broker",
        date: "10/2019 - 03/2021",
        role: "Mid-Level .NET Developer",
        description: "• Developed and maintained automation tools using C#, focusing on improving business processes.\n" +
            "• Created robots for data acquisition in the insurance field, streamlining critical data collection tasks.\n" +
            "• Managed and optimized databases, including SQL Server, MySQL, and MongoDB, to ensure reliability and performance.\n" +
            "• Maintained the entire IT infrastructure, including cloud environments, servers, and VPNs.\n" +
            "• Successfully implemented automations that reduced manual work and improved operational efficiency.\n" +
            "• Consistently delivered clean, well-structured code, adhering to industry best practices.\n" +
            "• Actively worked with agile methodologies, such as Scrum and Kanban, to ensure efficient project management and delivery."
    }
]

export default function TimeLine() {
    return (
        <div className="bg-zinc-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">Professional Journey</h2>
                    <p className="mt-4 text-lg text-gray-300">A timeline of my career progression and key roles.</p>
                </motion.div>
                
                <div className="mx-auto mt-16 max-w-4xl">
                    {timeLineInformations.map((info, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="mb-16 relative"
                        >
                            <div className={`absolute top-0 left-1/2 w-px h-full bg-gradient-to-b ${
                                index % 2 === 0 ? 'from-blue-500 to-zinc-700' : 'from-zinc-700 to-blue-500'
                            } -ml-px ${index === timeLineInformations.length - 1 ? 'hidden' : ''}`}></div>
                            
                            <div className="flex items-center justify-center mb-4">
                                <div className={`w-12 h-12 rounded-full bg-zinc-800 border-2 ${
                                    index % 2 === 0 ? 'border-blue-500' : 'border-zinc-600'
                                } flex items-center justify-center z-10`}>
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        className={`w-6 h-6 ${index % 2 === 0 ? 'text-blue-500' : 'text-zinc-400'}`}
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            
                            <div className={`bg-zinc-800 rounded-xl overflow-hidden shadow-lg border border-zinc-700 hover:border-blue-500/30 transition-all duration-300 transform hover:-translate-y-1`}>
                                <div className="p-6">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                                        <div className="flex items-center mb-2 sm:mb-0">
                                            {info.logo && (
                                                <img 
                                                    src={info.logo} 
                                                    alt={info.title} 
                                                    className="w-8 h-8 mr-3 rounded object-contain"
                                                />
                                            )}
                                            <h3 className="text-xl font-bold text-white">{info.title}</h3>
                                        </div>
                                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-500/20 text-blue-400">
                                            {info.date}
                                        </span>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <span className="text-lg font-medium text-gray-300">
                                            {info.role}
                                        </span>
                                    </div>
                                    
                                    <div className="text-gray-400 space-y-2">
                                        {info.description.split('\n').map((line, lineIndex) => (
                                            <p key={lineIndex} className="leading-relaxed">
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
