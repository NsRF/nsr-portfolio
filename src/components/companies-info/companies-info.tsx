'use client'

import { motion } from 'framer-motion';

const companies = [
  {
    name: "Comgas",
    logo: "/companies/comgas-logo.png",
    role: "Senior Full-Stack Developer",
    industry: "Energy",
    period: "2022-2023"
  },
  {
    name: "CCAB",
    logo: "https://ccab.org.br/wp-content/uploads/Logos-18-CCAB.png",
    role: "Tech Lead",
    industry: "Agriculture",
    period: "2021-2022"
  },
  {
    name: "MedGrupo",
    logo: "/companies/medgrupo.png",
    role: "Senior Backend Developer",
    industry: "Healthcare",
    period: "2020-2021"
  },
  {
    name: "PNCP",
    logo: "/companies/pncp.webp",
    role: "Software Architect",
    industry: "Government",
    period: "2019-2020"
  },
  {
    name: "Intelltech",
    logo: "/companies/intelltech.png",
    role: "Lead Developer",
    industry: "Technology",
    period: "2018-2019"
  }
];

export default function CompaniesInfo() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="container">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.span 
              className="inline-block text-sm font-medium text-primary mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Professional Experience
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Companies I've Worked With
            </motion.h2>
            <motion.p 
              className="mt-4 text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              My experience spans diverse industries across international markets, 
              delivering high-impact solutions for renowned organizations.
            </motion.p>
          </div>

          <div className="relative">
            {/* Infinite scrolling company marquee */}
            <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-background after:to-transparent">
              <div className="flex animate-infinite-scroll">
                {[...companies, ...companies].map((company, index) => (
                  <motion.div
                    key={`${company.name}-${index}`}
                    className="relative flex-shrink-0 px-8 py-6 mx-4 rounded-lg bg-card border border-border shadow-sm w-60 flex-col flex items-center justify-center"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="h-20 flex items-center justify-center mb-4">
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="max-h-16 w-auto object-contain"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-base">{company.name}</h3>
                      <div className="text-sm text-muted-foreground mt-1 mb-2">{company.role}</div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{company.industry}</span>
                        <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">{company.period}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm">
              Currently open to new opportunities with forward-thinking companies globally.
            </p>
            <div className="mt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors"
              >
                Discuss Your Project
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}