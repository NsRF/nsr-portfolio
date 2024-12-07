export default function SkillsInfo() {
    return (
        <div className="py-24 bg-zinc-800 mb-5 bg-opacity-40 rounded-2xl sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div className="mx-auto w-full max-w-xl lg:mx-0">
                        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Main Skills
                        </h2>
                        <p className="mt-6 text-lg/8 text-gray-300">
                            Proficient in C#, React, Node.js, Next.js, and NestJS, with strong expertise in backend and frontend development. Experienced in building scalable APIs, managing databases (SQL Server, MySQL, MongoDB, and more), and implementing microservices architecture. Skilled in DevOps practices, including CI/CD pipelines with GitHub Actions, containerization using Docker and Kubernetes, and agile methodologies like Scrum and Kanban. Adept at optimizing system performance and delivering innovative, efficient solutions for complex challenges.                        </p>
                    </div>
                    <div className="mx-auto grid w-full max-w-xl grid-cols-3 items-center gap-y-8 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:pl-8">
                        <div className="flex items-center justify-center bg-gray-100 bg-opacity-5  p-4 rounded-md">
                            <img
                                alt=".NET"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1024px-Microsoft_.NET_logo.svg.png"
                                className="h-16 object-contain"
                            />
                        </div>
                        <div className="flex items-center justify-center bg-gray-100  ml-2 mr-2 bg-opacity-80  p-4 rounded-md">
                            <img
                                alt="Node.js"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png?20170401104355"
                                className="h-16 object-contain"
                            />
                        </div>
                        <div className="flex items-center justify-center bg-gray-100 bg-opacity-5 p-4 rounded-md">
                            <img
                                alt="React"
                                src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
                                className="h-16 object-contain"
                            />
                        </div>
                        <div className="flex items-center justify-center bg-gray-100 bg-opacity-5  p-4 rounded-md">
                            <img
                                alt="Angular"
                                src="https://cdn.worldvectorlogo.com/logos/angular-3.svg"
                                className="h-16 object-contain"
                            />
                        </div>
                        <div className="flex items-center justify-center bg-gray-100 ml-2 mr-2 bg-opacity-80 p-4 rounded-md">
                            <img
                                alt="SQL Server"
                                src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
                                className="h-16 object-contain"
                            />
                        </div>
                        <div className="flex items-center justify-center bg-gray-100 bg-opacity-5  p-4 rounded-md">
                            <img
                                alt="MongoDB"
                                src="https://www.svgrepo.com/show/303232/mongodb-logo.svg"
                                className="h-16 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}