'use client'
import { motion } from 'framer-motion';

export default function CompaniesInfo() {
    return (
        <div className="mt-12 mb-12 backdrop-blur-lg shadow-lg bg-gradient-to-r from-zinc-700 via-zinc-600 to-slate-500 rounded-lg p-8 sm:p-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">Some companies I&#39;ve already worked</h2>
                    <div className="mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                        {[{
                            alt: "Comgas",
                            src: "/companies/comgas-logo.png"
                        }, {
                            alt: "CCAB",
                            src: "https://ccab.org.br/wp-content/uploads/Logos-18-CCAB.png"
                        }, {
                            alt: "Intelltech",
                            src: "/companies/intelltech.png"
                        }, {
                            alt: "MedGrupo",
                            src: "/companies/medgrupo.png"
                        }, {
                            alt: "Pncp",
                            src: "/companies/pncp.webp"
                        }].map((company, index) => (
                            <motion.div
                                key={index}
                                className="p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition"
                                whileHover={{ scale: 1.1 }}
                                initial={{ opacity: 0, translateY: 20 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <img
                                    alt={company.alt}
                                    src={company.src}
                                    className="max-h-12 w-auto mx-auto"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
