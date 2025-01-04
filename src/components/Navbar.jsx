import { Link } from "react-router"
import GradientText from "../shared/GradientText"
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {

    const [open, setIsOpen] = useState(false);

    return (
        <header className="bg-background sticky top-0 z-50">
            
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto flex justify-between items-center py-3">

                <Link>
                    <div>
                        <h1 className="text-4xl font-bold font-Great-Vibes bg-gradient-to-r from-[#40ffaa] via-[#40f2ff] to-blue-500 bg-clip-text text-transparent drop-shadow-[0_1px_4px_rgba(255,255,255,0.25)]">
                        Rifat
                        </h1>
                    </div>
                </Link>

                <div className="hidden lg:block">
                    <nav>
                        <ul className="flex items-center space-x-4 font-semibold">
                            <li className="hover:text-pink-500 transition-[0.5s]">
                                <Link>Home</Link>
                            </li>

                            <li className="hover:text-pink-500 transition-[0.5s]">
                                <Link>About Me</Link>
                            </li>

                            <li className="hover:text-pink-500 transition-[0.5s]">
                                <Link>Blogs</Link>
                            </li>

                            <li className="hover:text-pink-500 transition-[0.5s]">
                                <Link>Contact Me</Link>
                            </li>

                            <GradientText
                                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                animationSpeed={3}
                                showBorder={true}
                                className="custom-class py-2 px-4"
                                >
                                <button>
                                    Resume
                                </button>
                            </GradientText>

                        </ul>
                    </nav>
                </div>

                <div className='lg:hidden'>
                    <button className='text-2xl font-bold' onClick={() => setIsOpen(!open)}>
                        { open ?
                                <GradientText
                                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                animationSpeed={3}
                                showBorder={true}
                                className="custom-class py-2 px-4"
                                >
                                    <RxCross2 />
                                </GradientText>
                            :
                                <GradientText
                                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                animationSpeed={3}
                                showBorder={true}
                                className="custom-class py-2 px-4"
                                >
                                    <RiMenu3Fill/>
                                </GradientText>
                        }
                    </button>
                </div>

                { open && 
                    <div className='lg:hidden absolute top-16 left-0 w-full bg-background p-4 rounded-b-lg shadow-l shadow-slate-700 z-50 text-center text-white font-semibold'> 
                        <nav>
                            <ul className="flex flex-col items-center space-y-4 font-semibold">
                                <li className="hover:text-pink-500 transition-[0.5s]">
                                    <Link>Home</Link>
                                </li>

                                <li className="hover:text-pink-500 transition-[0.5s]">
                                    <Link>About Me</Link>
                                </li>

                                <li className="hover:text-pink-500 transition-[0.5s]">
                                    <Link>Blogs</Link>
                                </li>

                                <li className="hover:text-pink-500 transition-[0.5s]">
                                    <Link>Contact Me</Link>
                                </li>

                                <GradientText
                                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                    animationSpeed={3}
                                    showBorder={true}
                                    className="custom-class py-2 px-4"
                                    >
                                    <button>
                                        Resume
                                    </button>
                                </GradientText>

                            </ul>
                        </nav>
                    </div>
                }

            </div>

        </header>
    )
}

export default Navbar
