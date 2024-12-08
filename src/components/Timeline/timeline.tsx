
type TimeLineInfos = {
    title: string;
    date: string;
    role?: string;
    description: string;
}

const timeLineInformations: TimeLineInfos[] = [
    {
        title: "Comgás",
        date: "03/2024 - Present",
        role: "Tech Lead Cross",
        description: "• Lead and guide cross-functional teams, ensuring all teams are aligned with project goals, timelines, and best \n" +
            "practices.\n" +
            " • Architect and design new solutions from the ground up, ensuring that they meet both current and future \n" +
            "business needs. This includes defining the overall structure, technology stack, and ensuring seamless \n" +
            "integration across all components.\n" +
            " • Collaborate with architects and senior developers to develop scalable, maintainable, and high-performance \n" +
            "systems using Angular, ASP.NET, and Kotlin.\n" +
            " • Oversee the creation and management of CI/CD pipelines using Azure Portal and Kubernetes, ensuring \n" +
            "smooth deployment and hosting of services.\n" +
            " • Directly manage the process for opening production changes, ensuring each release is thoroughly tested, \n" +
            "secure, and deployable with minimal disruption.\n" +
            " • Work closely with development teams to mentor and support them, providing expertise in solving complex \n" +
            "technical problems and guiding them in architectural decisions.\n" +
            " • Ensure seamless communication across teams to facilitate the implementation of new features and \n" +
            "improvements, maintaining a consistent approach to development and deployment"
    },
    {
        title: "Prover Soluções em Tecnologia",
        date: "03/2019 - 03/2024",
        role: "Senior Developer, Tech Lead, and DevOps Specialist",
        description: "•\tPlayed multiple roles, from senior developer to solution architect, across diverse projects.\n" +
            "\n" +
            "•\tRefactored legacy code into clean, efficient solutions, primarily focusing on JavaScript technologies like Node.js, NestJS, and Angular.\n" +
            "\n" +
            "•\tDesigned and implemented secure authentication systems using JWT and other security best practices.\n" +
            "\n" +
            "•\tManaged databases across various platforms: SQL Server, Postgres, MongoDB, Redis, MySQL, Oracle, and CosmosDB.\n" +
            "\n" +
            "•\tBuilt APIs using ASP.NET, NestJS, and Node.js, and implemented frontends with React, React Native, Next.js, Redux, Angular, and AngularJS.\n" +
            "\n" +
            "•\tWorked with Kubernetes and Docker to containerize applications and ensure smooth deployment pipelines.\n" +
            "\n" +
            "•\tAutomated deployments with GitHub Actions, incorporating CI/CD pipelines for seamless delivery.\n" +
            "\n" +
            "•\tCreated microservices to segment application responsibilities and improve scalability\n"
    },
    {
        title: "Pieracciani (PierX Project)",
        date: "01/2021 - 06/2023 (Part-time)",
        role: "Senior Node.js Developer",
        description: "•\tDeveloped and maintained APIs using Node.js and NestJS, ensuring efficient and scalable backend services.\n" +
            "\n" +
            "•\tCreated reports with GraphQL to streamline data queries for client applications.\n" +
            "\n" +
            "•\tRefactored and implemented new features in frontend frameworks, including React and Angular.\n" +
            "\n" +
            "•\tFixed bugs and optimized business logic to enhance system reliability and performance.\n" +
            "\n" +
            "•\tManaged and administered MongoDB databases, ensuring data integrity and availability.\n" +
            "•\tDelivered high-quality solutions, maintaining consistent uptime and optimal performance.\n" +
            "\n" +
            "•\tCollaborated in agile environments, leveraging Scrum to manage sprints effectively.\n"
    },
    {
        title: "Seguralta Insurance Broker",
        date: "10/2019 - 03/2021",
        role: "Mid-Level .NET Developer",
        description: "•\tDeveloped and maintained automation tools using C#, focusing on improving business processes.\n" +
            "\n" +
            "•\tCreated robots for data acquisition in the insurance field, streamlining critical data collection tasks.\n" +
            "\n" +
            "•\tManaged and optimized databases, including SQL Server, MySQL, and MongoDB, to ensure reliability and performance.\n" +
            "\n" +
            "•\tMaintained the entire IT infrastructure, including cloud environments, servers, and VPNs.\n" +
            "\t\n• Successfully implemented automations that reduced manual work and improved operational efficiency.\n" +
            "\n" +
            "•\tConsistently delivered clean, well-structured code, adhering to industry best practices.\n" +
            "\n" +
            "•\tActively worked with agile methodologies, such as Scrum and Kanban, to ensure efficient project management and delivery.\n"
    }
]

export default function TimeLine() {
    return (
        <div className="flex  justify-center items-center min-h-screen">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
                <h3 className="text-2xl text-white font-bold mb-6">Career Timeline</h3>
                <ol>
                    {timeLineInformations.map((info, index) => (
                        <li key={index}
                            className={`border-l-2 ${index % 2 === 0 ? 'border-slate-600' : 'border-slate-500'}`}>
                            <div className="md:flex flex-start">
                                <div
                                    className={`w-6 h-6 flex  items-center justify-center rounded-full -ml-3.5 ${
                                        index % 2 === 0 ? 'bg-red-500' : 'bg-slate-500'
                                    }`}
                                >
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        className="text-white w-3 h-3"
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
                                <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
                                    <div className="flex justify-between mb-4">
                                        <a
                                            className="font-medium text-zinc-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                                        >
                                            {info.title}
                                        </a>
                                        <a
                                            className="ml-4 font-medium text-red-500 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                                        >
                                            {info.date}
                                        </a>
                                    </div>
                                    <a
                                        className="mt-4 mb-4 font-semibold text-zinc-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm"
                                    >
                                        {info.role}
                                    </a>
                                    <p className="text-gray-700 mt-2 mb-6">  {info.description.split('\n').map((line, index) => (
                                        <span key={index}>
      {line}
                                            <br/>
    </span>
                                    ))}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
