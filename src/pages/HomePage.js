import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Jobs from "../components/Jobs";

function HomePage() {

    return (
        <>
            <Hero/>
            <About showMore={true}/>
            <Projects title="latest work" showLink={true}/>
            <Jobs/>
        </>
    )
}

export default HomePage;
