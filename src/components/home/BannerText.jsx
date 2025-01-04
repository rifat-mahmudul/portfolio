import { MdWavingHand } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-router";
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";
import Social from "./Social";

const BannerText = () => {
    return (
        <div>
                <h1 className="flex items-center space-x-2 text-xl mb-3">
                    <span className="text-pink-500">Hi There, </span>
                    <span>
                        <motion.div
                            animate={{
                            rotate: [0, 15, -15, 0], // Rotate back and forth
                            }}
                            transition={{
                            duration: 2, // Animation duration
                            repeat: Infinity, // Repeat animation infinitely
                            ease: "easeInOut", // Smooth easing
                            }}
                        >
                            <MdWavingHand className="text-[#FAD76B] text-2xl" />
                        </motion.div>
                    </span> 
                </h1>

            <div className="text-5xl font-russo">
                
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className="mb-3">I'm Rifat</h1>

                <Typewriter
                        words={['Mern Stack Developer', 'FullStack Developer', 'Frontend Developer', 'React Developer']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                />

            </div>

            <div className="mt-5 mb-2">
                <Social></Social>
            </div>

            <div className="flex items-center space-x-4 mt-5">
                <Link>
                    <button className="flex items-center space-x-2 py-3 px-4 bg-gradient-to-r from-[#32116d] via-[#32116d] to-[#695582] text-white font-semibold rounded-lg">
                        <span>Contact Me</span>
                        <span><RiContactsFill></RiContactsFill></span>
                    </button>
                </Link>

                <div>
                    <button className="flex items-center space-x-2 py-3 px-4 bg-gradient-to-r from-[#32116d] via-[#32116d] to-[#695582] text-white font-semibold rounded-lg">
                        <span>Download Resume</span>
                        <span><FaDownload></FaDownload></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BannerText
