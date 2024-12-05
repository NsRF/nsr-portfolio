export default function MainHeader() {
    return (
        <div className="relative isolate overflow-hidden bg-zinc-800 px-6 py-24 sm:py-32 lg:px-8">
            <img
                alt=""
                src="https://st2.depositphotos.com/2702639/10537/i/450/depositphotos_105373622-stock-photo-lines-of-code-on-computer.jpg"
                className="absolute rounded-b blur-sm inset-0 opacity-20 -z-10 h-full w-full object-cover"
            />
            <div className="mx-auto max-w-2xl text-center space-y-8">
                <h2 className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-pulse sm:text-7xl">
                    Nasser Farhat
                </h2>
                <h2 className="text-5xl font-bold tracking-tight text-white sm:text-sm">
                    Full-Stack Senior Developer
                </h2>

                <div className="text-start text-base text-gray-300 leading-relaxed">
                    <p className="">
                        Hello! I’m a seasoned Senior Developer with a strong foundation in backend and frontend
                        technologies. With expertise in languages and frameworks like C#, Node.js, React, Next.js, and
                        NestJS, I specialize in building scalable, efficient, and secure solutions. Beyond my technical
                        skills, I pride myself on being communicative, proactive, and a true team player. I thrive in
                        collaborative environments, where I can contribute to innovation, mentor others, and
                        continuously learn.
                        Whether it’s designing robust architectures, optimizing deployments with tools like Kubernetes
                        and Docker, or implementing agile methodologies for smooth project delivery, I am passionate
                        about creating impact-driven solutions. Let’s connect and explore the exciting possibilities
                        that technology can offer!
                    </p>
                    {/*<h3 className="text-xl font-semibold text-white mt-6 mb-4">My Journey</h3>*/}
                    {/*<p>*/}
                    {/*    My career began in the IT sector, where I worked diligently to ensure that my company's systems*/}
                    {/*    and technology infrastructure operated efficiently.*/}
                    {/*    Curious and eager to learn, I explored the field of programming within the same organization.*/}
                    {/*    With dedication, I mastered various languages and technologies.*/}
                    {/*</p>*/}

                    {/*<h3 className="text-xl font-semibold text-white mt-6 mb-4">Skills</h3>*/}
                    {/*<p>*/}
                    {/*    I am proficient in:*/}
                    {/*</p>*/}
                    {/*<ul className="list-disc list-inside">*/}
                    {/*    <li>C#</li>*/}
                    {/*    <li>React</li>*/}
                    {/*    <li>Node.js</li>*/}
                    {/*    <li>Next.js</li>*/}
                    {/*    <li>Nest.js</li>*/}
                    {/*</ul>*/}

                    {/*<h3 className="text-xl font-semibold text-white mt-6 mb-4">Experience</h3>*/}
                    {/*<p>*/}
                    {/*    Throughout my journey, I&#39;ve contributed to exciting and challenging projects, applying my*/}
                    {/*    technical knowledge to create innovative solutions. Programming is not just my profession but*/}
                    {/*    also my passion, and I am always seeking new ways to tackle challenges and achieve outstanding*/}
                    {/*    results.*/}
                    {/*</p>*/}

                    {/*<h3 className="text-xl font-semibold text-white mt-6 mb-4">Connect With Me</h3>*/}
                    {/*<p>*/}
                    {/*    I'm excited to continue growing professionally and collaborating with talented colleagues. If*/}
                    {/*    you're interested in discussing collaboration opportunities or exchanging ideas about*/}
                    {/*    technology, please feel free to reach out to me. Let's connect and explore the limitless*/}
                    {/*    possibilities in the tech world!*/}
                    {/*</p>*/}
                </div>
            </div>
        </div>
    );
}
