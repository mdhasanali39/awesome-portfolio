import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Services from "../../components/Services/Services";
import Skills from "../../components/Skills/Skills";
import Testimonials from "../../components/Testimonials/Testimonials";
import Timeline from "../../components/Timeline/Timeline";

const Home = () => {
    return (
        <div>
            <Hero/>
            {/* <About/> */}
            <Services/>
            <Skills/>
            <Projects/>
            <Timeline/>
            <Testimonials/>
            <Contact/>
        </div>
    );
};

export default Home;