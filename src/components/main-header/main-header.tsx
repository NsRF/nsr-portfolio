'use client'

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function MainHeader() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative isolate overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-32 lg:pb-40">
            {/* Background gradient */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted"
                    style={{
                        opacity: Math.min(1, 1 - scrollY / 500)
                    }}
                />
                <motion.div 
                    className="absolute -top-40 right-0 -z-10 h-[800px] w-[800px] rounded-full bg-primary/30 blur-3xl"
                    animate={{ 
                        x: [0, 30, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ 
                        repeat: Infinity,
                        duration: 20,
                    }}
                />
                <motion.div 
                    className="absolute -bottom-40 -left-40 -z-10 h-[600px] w-[600px] rounded-full bg-secondary/20 blur-3xl"
                    animate={{ 
                        x: [0, -20, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{ 
                        repeat: Infinity,
                        duration: 15,
                        delay: 1
                    }}
                />
            </div>

            <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="flex justify-center">
                            <motion.div
                                className="inline-block"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.7 }}
                            >
                                <span className="inline-flex gap-1 text-xs sm:text-sm p-2 bg-muted border border-border rounded-full text-muted-foreground">
                                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">Open to work</span>
                                    <span className="px-2 py-1">Available for global opportunities</span>
                                </span>
                            </motion.div>
                        </div>

                        <motion.h1 
                            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                        >
                            <span className="block text-gradient">Nasser Farhat</span>
                        </motion.h1>

                        <motion.h2 
                            className="text-xl sm:text-2xl font-semibold tracking-wide text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.7 }}
                        >
                            Full-Stack Senior Developer
                        </motion.h2>

                        <motion.div 
                            className="max-w-2xl mx-auto prose text-center text-muted-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.7 }}
                        >
                            <p className="text-balance">
                                I build scalable, efficient and secure web applications with modern technologies.
                                Specializing in <span className="text-primary font-medium">Node.js</span>, <span className="text-primary font-medium">React</span>, 
                                <span className="text-primary font-medium"> .NET</span>, and cloud infrastructure.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="flex flex-wrap justify-center gap-4 mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.7 }}
                        >
                            <a 
                                href="/nasser_farhat_resume.pdf" 
                                target="_blank"
                                className="inline-flex h-11 items-center justify-center rounded-md border border-primary bg-primary px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
                                rel="noopener noreferrer"
                            >
                                Download Resume
                            </a>
                            <a 
                                href="#contact" 
                                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                            >
                                Contact Me
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}