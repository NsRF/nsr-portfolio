'use client'
import { motion } from 'framer-motion';

export default function CompaniesInfo() {


    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-3xl justify-center text-center -mt-2 mb-4 font-sans tracking-tight text- sm:text-4xl">Companies I've already worked with</h2>
                <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
                    {[{
                        alt: "Comgas",
                        src: "/companies/comgas-logo.png"
                    }, {
                        alt: "CCAB",
                        src: "https://ccab.org.br/wp-content/uploads/Logos-18-CCAB.png"
                    }, {
                        alt: "MedGrupo",
                        src: "/companies/medgrupo.png"
                    }, {
                        alt: "Pncp",
                        src: "/companies/pncp.webp"
                    },
                    {
                        alt: "Intelltech",
                        src: "/companies/intelltech.png"
                    }].map((company, index) => (
                        <div key={index} className="bg-white/5 p-8 sm:p-10">
                            <motion.div
                                key={index}
                                className="p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition"
                                whileHover={{scale: 1.1}}
                                initial={{opacity: 0, translateY: 20}}
                                animate={{opacity: 1, translateY: 0}}
                                transition={{duration: 0.5, delay: index * 0.2}}
                            >
                                <img
                                    alt={company.alt}
                                    src={company.src}
                                    className="max-h-12 w-auto mx-auto"
                                />
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
