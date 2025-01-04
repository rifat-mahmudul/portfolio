import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMongodb, SiExpress } from "react-icons/si";

const Skill = () => {
    const skills = [
        { icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
        { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS" },
        { icon: <SiTailwindcss className="text-cyan-500" />, label: "Tailwind" },
        { icon: <FaJsSquare className="text-yellow-400" />, label: "JavaScript" },
        { icon: <FaReact className="text-sky-400" />, label: "React" },
        { icon: <FaNodeJs className="text-green-500" />, label: "Node.js" },
        { icon: <SiExpress className="text-gray-600" />, label: "Express.js" },
        { icon: <SiMongodb className="text-green-600" />, label: "MongoDB" },
        { icon: <SiFirebase className="text-yellow-500" />, label: "Firebase" },
        { icon: <FaGithub className="text-gray-800" />, label: "GitHub" },
    ];

    const containerVariants = {
        animate: {
            rotate: [0, 360],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
            },
        },
    };
    

    return (
        <section>
            <div className="max-w-[90%] xl:max-w-[1160px] mx-auto flex flex-col xl:flex-row justify-between items-start text-center space-y-8">
                {/* Rotating Skill Icons */}
                <motion.div
                    className="relative sm:flex items-center justify-center w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full border-4 border-dashed border-gray-300 overflow-hidden hidden"  
                    variants={containerVariants}
                    animate="animate"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="absolute w-16 h-16 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow-lg"
                            style={{
                                transform: `rotate(${(360 / skills.length) * index}deg) translate(150px) rotate(-${(360 / skills.length) * index}deg)`,
                            }}
                            whileHover={{
                                scale: 1.2,
                                rotate: [0, 15, -15, 0],
                                transition: { duration: 0.3 },
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                        >
                            {skill.icon}
                        </motion.div>
                    ))}
                </motion.div>


                {/* Skill Description */}

                <div className="text-start">
                    <h1 className="sm:text-5xl text-3xl flex gap-2 font-bold">
                        <span className="text-sky-500">Web</span>
                        <span className="bg-gradient-to-r text-transparent bg-clip-text from-sky-400 via-pink-400 to-pink-500">
                            Development
                        </span>
                    </h1>
                    <p className="max-w-2xl text-lg mt-4">
                        I have been passionately learning web development for nearly 2 years, and I am dedicated and efficient as a full-stack developer. After doing three courses in web development, I chose to take on project-based jobs, which have helped me to improve my skills further. 
                        I enjoy solving challenges, fixing bugs, and growing every day as a developer.
                    </p>

                    <p className="text-5xl font-bold mt-5">
                            <span className="text-sky-400">Sk</span><span className="bg-gradient-to-r text-transparent bg-clip-text from-sky-400 via-pink-400 to-pink-500">ills</span>
                    </p>

                    {/* Skill List */}
                    <div className="mt-8">

                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
                                
                            <div>
                                <div className="h-24 w-24 flex items-center justify-center rounded-full border-4 border-orange-500 bg-[#ffae0041]">
                                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-orange-300">
                                        <FaHtml5 className="text-orange-700 text-5xl font-bold" />
                                    </div>
                                </div>

                                <h1 className="text-center h-24 w-24 font-semibold mt-2 text-xl">Html</h1>
                            </div>
                                
                            <div>
                                <div className="h-24 w-24 flex items-center justify-center rounded-full border-4 border-blue-500 bg-[#0040ff41]">
                                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-300">
                                        <FaHtml5 className="text-blue-700 text-5xl font-bold" />
                                    </div>
                                </div>

                                <h1 className="text-center h-24 w-24 font-semibold mt-2 text-xl">Css</h1>
                            </div>
                                
                            <div>
                                <div className="h-24 w-24 flex items-center justify-center rounded-full border-4 border-blue-500 bg-[#0040ff41]">
                                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-300">
                                        <SiTailwindcss className="text-blue-700 text-5xl font-bold" />
                                    </div>
                                </div>

                                <h1 className="text-center h-24 w-24 font-semibold mt-2 text-xl">Tailwind</h1>
                            </div>
                                
                            <div>
                                <div className="h-24 w-24 flex items-center justify-center rounded-full border-4 border-gray-500 bg-[#babbbd41]">
                                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-white">
                                        <FaGithub className="text-black text-5xl font-bold" />
                                    </div>
                                </div>

                                <h1 className="text-center h-24 w-24 font-semibold mt-2 text-xl">Github</h1>
                            </div>
                                
                            <div>
                                <div className="h-24 w-24 flex items-center justify-center rounded-full border-4 border-yellow-500 bg-[#eeff0041]">
                                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-yellow-300">
                                        <FaJsSquare className="text-yellow-700 text-5xl font-bold" />
                                    </div>
                                </div>

                                <h1 className="text-center h-24 w-24 font-semibold mt-2 text-xl">Javascript</h1>
                            </div>

                            <div>
                                <div className="h-24 w-24 flex items-center justify-center rounded-full border-4 border-sky-500 bg-[#00bfff41]">
                                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-sky-300">
                                        <FaReact className="text-sky-700 text-5xl font-bold" />
                                    </div>
                                </div>

                                <h1 className="text-center h-24 w-24 font-semibold mt-2 text-xl">React</h1>
                            </div>

                            <div>
                                <div className="h-24 w-24 flex items-center justify-center rounded-full border-4 border-orange-500 bg-[#ffae0041]">
                                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-orange-300">
                                        <SiFirebase className="text-orange-700 text-5xl font-bold" />
                                    </div>
                                </div>

                                <h1 className="text-center h-24 w-24 font-semibold mt-2 text-xl">Firebase</h1>
                            </div>

                            <div>
                                <div className="h-24 w-24 flex items-center justify-center rounded-full border-4 border-green-500 bg-[#00ff2f41]">
                                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-300">
                                        <FaNodeJs className="text-green-700 text-5xl font-bold" />
                                    </div>
                                </div>

                                <h1 className="text-center h-24 w-24 font-semibold mt-2 text-xl">Node js</h1>
                            </div>

                            <div>
                                <div className="h-24 w-24 flex items-center justify-center rounded-full border-4 border-gray-500 bg-[#c0c3c141]">
                                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-white">
                                        <SiExpress className="text-black text-5xl font-bold" />
                                    </div>
                                </div>

                                <h1 className="text-center h-24 w-24 font-semibold mt-2 text-xl">Node js</h1>
                            </div>

                            <div>
                                <div className="h-24 w-24 flex items-center justify-center rounded-full border-4 border-emerald-500 bg-[#50da655d]">
                                    <div className="h-16 w-16 flex items-center justify-center rounded-full bg-emerald-400">
                                        <SiMongodb className="text-emerald-700 text-5xl font-bold" />
                                    </div>
                                </div>

                                <h1 className="text-center h-24 w-24 font-semibold mt-2 text-xl">Mongo db</h1>
                            </div>

                        </div>

                    </div>
                </div>

                
            </div>
        </section>
    );
};

export default Skill;
