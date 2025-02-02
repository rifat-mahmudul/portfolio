import { FaLocationDot } from "react-icons/fa6";
import {
    FaFacebook,
    FaGithub,
    FaLinkedinIn,
} from "react-icons/fa";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
    return (
        <section id="contactMe" className="pb-16 -mt-10 max-w-[90%] xl:max-w-[1200px] mx-auto">
            
            <div>
                <h1 className="text-center text-5xl font-bold">Contact<span className="text-[#5c29b4]"> Me</span></h1>
                <p className="text-center mt-4 text-lg text-gray-300 max-w-[90%] sm:max-w-xl mx-auto">If you have any questions or concerns, please do not hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
            </div>

            <div className="flex lg:flex-row flex-col gap-10 mt-10">

                <div className="lg:w-[48%] w-[90%]">
                    
                    <form>
                        <div className="flex sm:flex-row flex-col gap-8 mb-5">
                            <div className="sm:w-[50%]">
                                <input className="w-full p-3 rounded-md bg-[#80808018] text-white placeholder:text-gray-400 border border-gray-800" type="text" placeholder="Enter Your Name" />
                            </div>

                            <div className="sm:w-[50%]">
                                <input className="w-full p-3 rounded-md bg-[#80808018] text-white placeholder:text-gray-400 border border-gray-800" type="email" placeholder="Enter Your Email" />
                            </div>
                        </div>

                        <div>
                            <textarea className="w-full p-3 rounded-md bg-[#80808018] text-white placeholder:text-gray-400 h-40 border border-gray-800" placeholder="Write Your Message..."></textarea>
                        </div>

                        <div>
                            <button 
                            type="submit"
                            className="w-full p-3 rounded-md bg-[#80808018] text-white mt-4 border border-gray-800 hover:bg-gradient-to-r from-[#32116d] via-[#32116d] to-[#695582] transition" >Send Message</button>
                        </div>
                    </form>

                </div>

                <div className="lg:w-[48%] w-[90%] flex flex-col gap-5">
                    
                    <div className="bg-[#80808018] h-[50%] flex flex-col justify-center items-center rounded-md p-4 lg:p-0">
                        <div className="border-2 mx-auto border-dashed border-gray-400 rounded-full p-5 h-16 w-16 flex items-center justify-center">
                            <div>
                                <FaLocationDot className="mx-auto text-2xl"></FaLocationDot>
                            </div>
                        </div>

                        <h1 className="text-center text-lg mt-2">Kishoregonj, Dhaka, Bangladesh</h1>
                    </div>


                    <div className="h-[50%] flex sm:flex-row flex-col gap-5">

                        <div className="lg:w-[50%] h-full flex flex-col items-center justify-center bg-[#80808018] p-3 rounded-md">
                            <div className="border-2 mx-auto border-dashed border-gray-400 rounded-full p-5 h-16 w-16 flex items-center justify-center mb-5">
                                <div>
                                    <FaBuildingCircleArrowRight className="mx-auto text-2xl"></FaBuildingCircleArrowRight>
                                </div>
                            </div>

                            <div className="flex gap-5 items-center">
                                <a href="https://web.facebook.com/mhrifat123" target="_blank">
                                    <div className="h-10 w-10 border border-gray-500 flex items-center justify-center rounded-lg">
                                        <FaFacebook className="text-2xl text-gray-500"></FaFacebook>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/mahmudul-hasan-rifat-3a8420318/" target="_blank">
                                    <div className="h-10 w-10 border border-gray-500 flex items-center justify-center rounded-lg">
                                        <FaLinkedinIn className="text-2xl text-gray-500"></FaLinkedinIn>
                                    </div>
                                </a>
                                <a href="https://github.com/rifat-mahmudul" target="_blank">
                                    <div className="h-10 w-10 border border-gray-500 flex items-center justify-center rounded-lg">
                                        <FaGithub className="text-2xl text-gray-500"></FaGithub>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="lg:w-[50%] lg:h-full flex flex-col items-center justify-center bg-[#80808018] p-3 rounded-md">
                            <div className="border-2 mx-auto border-dashed border-gray-400 rounded-full p-5 h-16 w-16 flex items-center justify-center">
                                <div>
                                    <MdOutlineMail className="mx-auto text-2xl"></MdOutlineMail>
                                </div>
                            </div>
                            
                            <h1 className="text-center text-sm mt-2">mahmudulhasanrifat220@gmail.com</h1>
                        </div>

                    </div>


                </div>

            </div>

        </section>
    )
}

export default Contact
