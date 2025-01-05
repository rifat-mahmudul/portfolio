/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { TbWorldShare } from "react-icons/tb";
import SpotlightCard from "../Animation/SpotlightCard";

const Project = ({ project }) => {
    const { name, description, image, type, ClientRepository, ServerRepository, technologies, link } = project;

    return (
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">

            <div className="flex gap-10 items-start">
                        <motion.div
                            className="overflow-hidden h-[400px] w-[60%] relative rounded-lg"
                            style={{
                                height: "300px",
                                width: "100%",
                                overflow: "hidden",
                                position: "relative",
                            }}
                        >
                            <motion.img
                                src={image}
                                alt={name}
                                className="absolute top-0 left-0 w-full"
                                style={{ height: "auto", width: "100%" }}
                                initial={{ y: 0 }}
                                whileHover={{ y: "-100%" }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            />
                        </motion.div>

                    {/* Description */}
                        <div>
                            
                            <div className="flex items-start justify-between text-pink-500">
                                <h1 className="text-3xl font-russo mb-4 bg-gradient-to-r text-transparent bg-clip-text from-sky-400 via-pink-400 to-pink-500">{name}</h1>

                                <p>{type}</p>
                            </div>

                            <p className="text-gray-300">{description}</p>

                            <div className="mt-5 flex items-center gap-14">

                                <div>
                                    <a href={ClientRepository} target="_blank">
                                        <div className="border rounded-full h-14 w-14 flex items-center justify-center">
                                            <FaGithub className="text-4xl"></FaGithub>
                                        </div>
                                    </a>

                                    <p className="h-14 w-14 mt-1 font-semibold text-center">Client</p>
                                </div>

                                <div>
                                    <a href={ServerRepository} target="_blank">
                                        <div className="border rounded-full h-14 w-14 flex items-center justify-center">
                                            <FaGithub className="text-4xl"></FaGithub>
                                        </div>
                                    </a>

                                    <p className="h-14 w-14 mt-1 font-semibold text-center">Server</p>
                                </div>

                                <div>
                                    <a href={link} target="_blank">
                                        <div className="border rounded-full h-14 w-14 flex items-center justify-center">
                                            <TbWorldShare className="text-4xl text-blue-500"></TbWorldShare>
                                        </div>
                                    </a>

                                    <p className="h-14 w-14 mt-1 font-semibold text-center">Live</p>
                                </div>

                            </div>


                            <div className="grid sm:grid-cols-5 gap-5">
                                {
                                    technologies.map((tech, index) => (
                                        <div key={index}>

                                            <div className="rounded-3xl text-center py-2 px-5 text-blue-600 font-bold text-lg bg-[#0000ff1c]">
                                                <h1>{tech}</h1>
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>

                        </div>
            </div>

            
        </SpotlightCard>
    );
};

export default Project;
