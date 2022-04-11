import {useState} from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import {Route, Routes} from 'react-router-dom';
import ProjectsPage from "./pages/ProjectsPage";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";

function App() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar}/>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>

            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/projects' element={<ProjectsPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>

            <Footer/>
        </>
    )
}

export default App;
