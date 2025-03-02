'use client'

import Info from "@/components/Info/info";
import ContentMainPage from "@/components/content/content";
import CompaniesInfo from "@/components/companies-info/companies-info";
import MainHeader from "@/components/main-header/main-header";
import SkillsInfo from "@/components/skills/skillsinfo";
import AboutMe from "@/components/aboutme/aboutme";
import PersonalProjects from "@/components/personal-project/personal-project";
import Contact from "@/components/contact/contact";
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <main className="min-h-screen bg-background relative overflow-x-hidden">
            {/* Fixed elements */}
            <Info/>

            <div className="pb-24">
                {/* Hero Section */}
                <section className="pt-24">
                    <MainHeader/>
                </section>
                
                {/* Companies Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <CompaniesInfo/>
                </motion.section>
                
                {/* Skills Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <SkillsInfo/>
                </motion.section>
                
                {/* Projects Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <PersonalProjects/>
                </motion.section>
                
                {/* Experience Timeline */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <ContentMainPage/>
                </motion.section>
                
                {/* About Me Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <AboutMe/>
                </motion.section>
                
                {/* Contact Section */}
                <motion.section 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <Contact/>
                </motion.section>
            </div>
            
            {/* Footer */}
            <footer className="border-t border-border py-10 bg-card">
                <div className="container">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <div className="text-center sm:text-left mb-4 sm:mb-0">
                            <h3 className="text-lg font-semibold">Nasser Farhat</h3>
                            <p className="text-sm text-muted-foreground">Full-Stack Senior Developer</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">
                                © {new Date().getFullYear()} - All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}