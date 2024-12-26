import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Push to deploy.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
        icon: ServerIcon,
    },
]

export default function PersonalProjects() {
    return (
        <div className="py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative overflow-hidden bg-zinc-800 rounded-3xl shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-8 lg:py-16 lg:px-14 text-white space-y-6">
                            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                                Ambar Performance - Personal Budget System and Invoicing Platform
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                This project was created to facilitate the generation of budgets
                                and monthly, weekly, or daily reports for services executed by the client.
                                A central requirement was the need to emit government-integrated invoices directly.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                The backend was initially developed with ASP.NET 6 along with various APIs to meet
                                invoice requirements, while the design of the platform was customized together with the client.
                                Recently, it was upgraded to ASP.NET 8 using MongoDB for faster data handling,
                                employing Hexagonal Architecture with Domain-Driven Design (DDD).
                            </p>

                            <div>
                                <h3 className="text-xl font-semibold text-indigo-400">Tech Stack</h3>
                                <ul className="space-y-2 mt-4 text-gray-300 list-disc list-inside">
                                    <li>**Backend:** ASP.NET 8</li>
                                    <li>**Database:** MongoDB</li>
                                    <li>**Frontend:** NextJS, TypeScript</li>
                                    <li>**Deployment:** CI/CD with Github Actions deploying to Azure Portal</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-indigo-400">Key Functionalities</h3>
                                <ul className="space-y-2 mt-4 text-gray-300 list-disc list-inside">
                                    <li>Generate invoices with government integration</li>
                                    <li>Role-based authentication for invoice access</li>
                                    <li>Fast and scalable data retrieval</li>
                                </ul>
                            </div>
                        </div>

                        {/* Video and Media Section */}
                        <div className="p-8 flex justify-center items-center">
                            <div className="w-full">
                                <video
                                    className="rounded-lg shadow-lg max-w-full"
                                    controls
                                    autoPlay={true}
                                >
                                    <source src="/ambar-preview.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <p className="mt-4 text-center text-sm text-gray-400">
                                    *Example Video: Interface displaying route orders and invoice functions.*
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
