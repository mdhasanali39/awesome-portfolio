import { Link } from "react-scroll";

const Navbar = () => {



    return (
        <nav>
            <div>
            <Link
              to="banner"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass={`text-blue-500`}
              className={`font-bold text-blue-700 text-xl cursor-pointer transition duration-200`}
            //   onClick={()=>setIsMenuOpen(false)}
            >
              Awesome
            </Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        activeClass="text-blue-500"
                        className="font-bold"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        activeClass="text-blue-500"
                        className="font-bold"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        activeClass="text-blue-500"
                        className="font-bold"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        activeClass="text-blue-500"
                        className="font-bold"
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                        activeClass="text-blue-500"
                        className="font-bold"
                        >
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;