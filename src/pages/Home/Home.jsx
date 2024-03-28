import About from "../../components/About/About";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Services from "../../components/Services/Services";
import Skills from "../../components/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Services/>
            <Skills/>
            <Projects/>
        </div>
    );
};

export default Home;