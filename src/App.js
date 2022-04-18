import {useState} from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Seo from './components/Seo';
import ScrollToTop from "./components/ScrollToTop";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Router>
                <Navbar toggleSidebar={toggleSidebar}/>
                <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
                <Seo/>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>

                <Footer/>
            </Router>
        </>
    );
}

export default App;
