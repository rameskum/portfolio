import Navbar from "../components/Navbar";
import {useState} from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

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

            <Projects title="latest work" showLink={true} />

            <main>
                {/*<Services/>*/}
                {/*<Jobs/>*/}
                {/*<Projects title="featured projects" showLink/>*/}
            </main>

            <Footer/>
        </>
    )
}

export default Home;
