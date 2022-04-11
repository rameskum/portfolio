import Navbar from "../components/Navbar";
import {useState} from "react";
import Sidebar from "../components/Sidebar";

function Home() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Navbar toggleSidebar={toggleSidebar}/>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>

            <main>
                {/*<Hero/>*/}
                {/*<Services/>*/}
                {/*<Jobs/>*/}
                {/*<Projects title="featured projects" showLink/>*/}
            </main>
        </>
    )
}

export default Home;
