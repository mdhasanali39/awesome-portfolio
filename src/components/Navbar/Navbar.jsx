import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

import './Navbar.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className="flex justify-between ">

            {/* logo here  */}
            <div className="fixed top-7 z-50 ">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-80}
              delay={200}
              duration={500}
              activeClass={`text-blue-500`}
              className={`font-bold text-blue-500 text-xl cursor-pointer transition duration-200`}
            >
              Awesome
            </Link>
            </div>

            {/* all navbar menus  */}
            <div className={` ${isMenuOpen ? "overflow-hidden":"overflow-auto"}`}>
                <div className="fixed right-8 z-50 flex justify-center px-[60px]">
                <button 
                onClick={()=>setIsMenuOpen(!isMenuOpen)}
                className="  flex items-center gap-2  text-blue-500 font-bold">Menu <FaChevronDown className={`mt-1 ${isMenuOpen && "rotate-180 "} transition duration-300`}/></button>
                </div>
                <ul 
                 className={`fixed right-8 z-50 top-14 min-h-[52vh]  px-8 py-4 space-y-4 mt-1 rounded-bl-full ${isMenuOpen ? "translate-y-[0px] opacity-100 ":"opacity-0 translate-y-[280px] pointer-events-none"} overflow-hidden transition duration-500 ease-linear navList`}>
                    {/* Home  */}
                    <li>
                        <Link
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        delay={200}
                        duration={500}
                        activeClass={`active`}
                        className="font-bold cursor-pointer hover:text-blue-500"
                        onClick={()=>setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    {/* about  */}
                    {/* <li>
                        <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        delay={200}
                        duration={500}
                        activeClass={`active`}
                        className="font-bold cursor-pointer hover:text-blue-500"
                        onClick={()=>setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                    </li> */}
                    {/* services */}
                    <li>
                        <Link
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        delay={200}
                        duration={500}
                        activeClass={`active`}
                        className="font-bold cursor-pointer hover:text-blue-500"
                        onClick={()=>setIsMenuOpen(false)}
                        >
                            Services
                        </Link>
                    </li>
                    {/* skills */}
                    <li>
                        <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        delay={200}
                        duration={500}
                        activeClass="active"
                        className="font-bold cursor-pointer hover:text-blue-500"
                        onClick={()=>setIsMenuOpen(false)}
                        >
                            Skills
                        </Link>
                    </li>
                    {/* projects */}
                    <li>
                        <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        delay={200}
                        duration={500}
                        activeClass="active"
                        className="font-bold cursor-pointer hover:text-blue-500"
                        onClick={()=>setIsMenuOpen(false)}
                        >
                            Projects
                        </Link>
                    </li>
                    {/* timeline */}
                    <li>
                        <Link
                        to="timeline"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        delay={200}
                        duration={500}
                        activeClass="active"
                        className="font-bold cursor-pointer hover:text-blue-500"
                        onClick={()=>setIsMenuOpen(false)}
                        >
                            Timeline
                        </Link>
                    </li>
                    {/* testimonials */}
                    <li>
                        <Link
                        to="testimonials"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        delay={200}
                        duration={500}
                        activeClass="active"
                        className="font-bold cursor-pointer hover:text-blue-500"
                        onClick={()=>setIsMenuOpen(false)}
                        >
                            Testimonials
                        </Link>
                    </li>
                    {/* contact */}
                    <li>
                        <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        delay={200}
                        duration={500}
                        activeClass="active"
                        className="font-bold cursor-pointer hover:text-blue-500"
                        onClick={()=>setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;