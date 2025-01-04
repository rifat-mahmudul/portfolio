import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";

const AboutMe = () => {
    const glowEffect = {
        animate: {
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <section className="relative py-16">
            {/* Background Glow */}
            <motion.div
                className="absolute inset-0 mx-auto top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-pink-500 to-purple-600 -z-10 hidden sm:block"
                variants={glowEffect}
                animate="animate"
                style={{
                    filter: "blur(150px)",
                }}
            ></motion.div>

            {/* Section Content */}
            <h1 className="text-center text-4xl sm:text-6xl mb-5 font-bold">
                Who Am I <span className="text-pink-700">!</span>
            </h1>
            <div className="max-w-[90%] sm:max-w-2xl mx-auto tracking-widest text-center">
                <p>
                    My name is <span className="text-pink-600">Mahmudul Hasan Rifat</span>, and I am a dedicated and passionate{" "}
                    <span className="text-pink-600">MERN Stack</span> Developer with a proven track record of building dynamic,
                    efficient, and scalable web applications. My expertise encompasses the complete MERN stack:{" "}
                    <span className="text-green-600">MongoDB</span>, <span className="text-slate-300">Express.js</span>,{" "}
                    <span className="text-sky-500">React</span>, and <span className="text-emerald-400">Node.js</span>, enabling me to
                    create seamless and impactful digital solutions.
                </p>

                <p className="mt-3">
                    I am a self-motivated programmer who thrives on continuous learning and exploration of emerging technologies. With a
                    strong foundation in JavaScript, I take pride in leveraging its versatility to craft robust solutions, ensuring a
                    user-centric and performance-driven approach.
                </p>

                <p className="mt-3">
                    In addition to my technical skills, I possess a problem-solving mindset and an eagerness to tackle challenges head-on.
                    I am committed to enhancing my expertise while contributing to meaningful projects that align with my skills and
                    interests.
                </p>

                <p className="mt-3">
                    I am open to exciting job opportunities where I can apply my skills, grow professionally, and contribute to the
                    success of innovative teams. Let’s collaborate to bring impactful ideas to life!
                </p>
            </div>

            <div className="text-center mt-5">
                <button>
                    <FaArrowDown className="animate-bounce text-4xl text-pink-700 mx-auto mt-5" />
                </button>
            </div>
        </section>
    );
};

export default AboutMe;
