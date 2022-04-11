import Navbar from "../components/Navbar";
import {useState} from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Jobs from "../components/Jobs";

function Home() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar}/>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>

            <Hero/>

            <About/>

            <Projects title="latest work" showLink={true}/>

            <Jobs/>

            <Footer/>
        </>
    )
}

export default Home;
