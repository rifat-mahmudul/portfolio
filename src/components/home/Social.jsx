import {
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router";
    
    const Social = () => {
        return (
        <div className="flex gap-4 *:border *:border-[#315779] *:cursor-pointer *:size-[40px] *:rounded-full *:bg-[#0E161E] *:text-white *:flex *:justify-center *:items-center ">
            <Link
            className="hover:bg-[#32116d] transition duration-300 hover:rotate-360 hover:scale-110"
            to="https://web.facebook.com/mhrifat123"
            target="_blank"
            >
            <FaFacebook></FaFacebook>
            </Link>
    
            <Link
            className="hover:bg-[#32116d] transition duration-300 hover:rotate-360 hover:scale-110"
            to="https://www.linkedin.com/in/mahmudul-hasan-rifat-dev25/"
            target="_blank"
            >
            <FaLinkedinIn></FaLinkedinIn>{" "}
            </Link>
    
            <Link 
            className="hover:bg-[#32116d] transition duration-300 hover:rotate-360 hover:scale-110"
            to="https://x.com/rifat67661" 
            target="_blank"
            >
            <FaTwitter></FaTwitter>
            </Link>
    
            <Link 
            className="hover:bg-[#32116d] transition duration-300 hover:rotate-360 hover:scale-110"
            to="https://www.instagram.com/mahmudulhasan3891/" 
            target="_blank"
            >
            <FaInstagram></FaInstagram>
            </Link>
    
            <Link 
            className="hover:bg-[#32116d] transition duration-300 hover:rotate-360 hover:scale-110"
            to="https://github.com/rifat-mahmudul"
            target="_blank">
            <FaGithub></FaGithub>
            </Link>
        </div>
        );
    };
    
    export default Social;