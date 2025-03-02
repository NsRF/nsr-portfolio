import { motion } from 'framer-motion';

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/nsrf',
        icon: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="size-6">
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nasserfarhat/',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" className="size-6">
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z"/>
            </svg>
        ),
    },
    {
        name: 'Email',
        url: 'mailto:nasserfarhatt@gmail.com',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        name: 'WhatsApp',
        url: 'https://wa.me/5517982311299',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="size-6">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.72.043.433-.101.593z"/>
                <path fillRule="evenodd" d="M1.885 8.413c0-3.909 3.173-7.082 7.083-7.083 3.908.001 7.081 3.174 7.081 7.083 0 3.908-3.173 7.081-7.082 7.081-1.533 0-2.949-.485-4.108-1.305L1 15.527l1.392-4.026c-.834-1.166-1.328-2.595-1.328-4.141zm5.881-.911c.99-.002 1.97.258 2.832.756.836.479 1.515 1.161 1.99 1.999.493.854.747 1.824.744 2.803-.001 1.565-.616 3.034-1.736 4.139-1.097 1.082-2.552 1.679-4.105 1.68-1.063.001-2.098-.281-3.004-.812.003-.001-1.27.392-2.332.71l.726-2.097c-.515-.909-.786-1.941-.786-2.999.002-3.309 2.687-5.998 5.996-6 1.997.001 3.874.78 5.287 2.196 1.414 1.416 2.191 3.292 2.191 5.291-.001 4.125-3.352 7.479-7.478 7.48-1.661 0-3.253-.54-4.572-1.547l-1.975.585 1.08-2.057C1.998 14.948 1 12.544 1 9.999 1 5.14 4.965 1.176 9.824 1.174c2.245 0 4.356.85 5.968 2.393C17.4 5.108 18.285 7.221 18.286 9.47c-.003 4.682-3.813 8.49-8.495 8.492v.001h-.017c-1.415 0-2.815-.362-4.047-1.046l-.023-.013-.021-.009z"/>
            </svg>
        ),
    },
];

export default function AboutMe() {
    return (
        <div className="bg-gradient-to-b from-zinc-900 to-zinc-800 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">About Me</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        I'm a passionate senior full-stack developer with expertise in building scalable applications and leading development teams.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-8 lg:grid-cols-2">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative overflow-hidden rounded-2xl bg-zinc-800 p-8 shadow-lg border border-zinc-700"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-50"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4">My Philosophy</h3>
                            <p className="text-gray-300 mb-6">
                                I believe in creating clean, maintainable code that solves real business problems. My approach combines technical excellence with a deep understanding of business needs, ensuring that the solutions I build deliver real value.
                            </p>
                            <p className="text-gray-300">
                                I'm passionate about mentoring junior developers and sharing knowledge across teams. I thrive in collaborative environments where innovation is encouraged and quality is valued.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative overflow-hidden rounded-2xl bg-zinc-800 p-8 shadow-lg border border-zinc-700"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/10 opacity-50"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
                            <p className="text-gray-300 mb-6">
                                If my background aligns with what you're looking for, I'd be delighted to discuss how I can contribute to your projects. Feel free to reach out via any of the channels below.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-700/50 text-gray-300 hover:bg-blue-500/20 hover:text-white transition-all duration-300"
                                    >
                                        <span className="text-blue-400">{link.icon}</span>
                                        <span>{link.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-16 flex justify-center"
                >
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 blur-sm opacity-75"></div>
                        <div className="relative overflow-hidden rounded-full bg-zinc-800 p-1">
                            <img 
                                src="/yellow-backgrond.png" 
                                alt="Nasser Farhat" 
                                className="w-56 h-56 rounded-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                            <div className="flex space-x-2">
                                <a 
                                    href="https://github.com/nsrf" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-zinc-800/90 text-blue-400 hover:text-white transition-colors duration-300"
                                >
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="size-5">
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/nasserfarhat/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-zinc-800/90 text-blue-400 hover:text-white transition-colors duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" className="size-5">
                                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56c3.97,0,7.19,2.73,7.19,8.26V39z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-8 text-center"
                >
                    <h3 className="text-xl font-bold text-white">Nasser Farhat</h3>
                    <p className="text-blue-400 font-medium">Senior Full-Stack Developer</p>
                </motion.div>
            </div>
        </div>
    );
}