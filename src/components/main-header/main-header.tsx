export default function MainHeader() {
    return (
        <div className="relative bg-gray-800 bg-opacity-80 isolate overflow-hidden rounded-2xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-center space-y-8">
                <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-700 animate-pulse">
                    Nasser Farhat
                </h1>
                <h2 className="text-2xl font-semibold tracking-wide text-gray-200">
                    Full-Stack Senior Developer
                </h2>
                <div className="text-left text-base text-gray-300 leading-relaxed space-y-4">
                    <p>
                        Hello! I’m a seasoned Senior Developer with a strong foundation in backend and frontend
                        technologies. With expertise in languages and frameworks like C#, Node.js, React, Next.js, and
                        NestJS, I specialize in building scalable, efficient, and secure solutions. Beyond my technical
                        skills, I pride myself on being communicative, proactive, and a true team player. I thrive in
                        collaborative environments, where I can contribute to innovation, mentor others, and
                        continuously learn.
                    </p>
                    <p>
                        Whether it’s designing robust architectures, optimizing deployments with
                        tools like Kubernetes and Docker, or implementing agile methodologies for smooth
                        project delivery, I am passionate about creating impact-driven solutions. Let’s connect
                        and explore the exciting possibilities that technology can offer!
                    </p>
                </div>
            </div>
        </div>
    );
}
